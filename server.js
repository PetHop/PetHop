var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var stormpath = require('express-stormpath');
var multer = require('multer');

var app = express();

// Middlware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/views'));
app.use('/usercontent', express.static(__dirname + '/usercontent'));
require('./multerImpl')(app); //Call the multerImpl and pass in app state to it


// This contains function to link stormpath and mongodb by placing each others IDs in their objects
var userCreationCtrl = require('./controllers/userCreationCtrl.js');

// Initialize and configure stormpath
app.use(stormpath.init(app, {
  website: true,
  //This option expands the custom data section when we do a GET request to '/me' to see the account object of the currently logged in user. We need this because the mongo_id is in there.
  web: {
    me: {
      expand: {
        customData: true
      }
    }
  },
  // This function calls "userCreationCtrl" which takes the newly created Stormpath account and creates an entry in mongoDB using that email and name, then calls back with the _id property from mongo to store in stormpath custom data as that user's mongo_id. Other user data will be gathered at profileEdit page after a redirect because stormpath has not yet implemented custom field data submission from their <RegistrationForm /> component.
  postRegistrationHandler: function (account, req, res, next) {
    account.getCustomData(function(err, data) {
      if (err) {
        console.log(err.toString);
        return next(err);
      } else {
        userCreationCtrl(account, null, function(err, resultId){
          console.log("userCreationCtrl resultId", resultId);
          data.mongo_id = resultId;
          console.log("data", data);
          data.save();
          // This line will redirect us to /feed from teh registration form.
          // res.redirect(302, '/feed').end(); // .end of undefined error is breaking this.
          next();
        });
      }
    });
  },
}));

// Controller Requirements
var userCtrl = require('./controllers/userCtrl.js');
var travelCtrl = require('./controllers/travelCtrl.js');
var petsCtrl = require('./controllers/petsCtrl.js');

// Controller Functions
app.get('/users', userCtrl.read);
app.post('/users/', userCtrl.create);
app.put('/users/:id', userCtrl.update);
app.delete('/users/:id', userCtrl.delete);
app.get('/users/:id', userCtrl.readById);
app.get('/users/:id/nopop', userCtrl.readByIdNoPop); // no extra data populated (so we can get the IDs of other components)

app.get('/travel', travelCtrl.read); // all extra data is populated here
app.post('/travel/', travelCtrl.create);
app.put('/travel/:id', travelCtrl.update);
app.delete('/travel/:id', travelCtrl.delete);
app.get('/travel/:id', travelCtrl.readById); // all extra data is populated here

app.get('/pets', petsCtrl.read);
app.post('/pets/', petsCtrl.create);
app.put('/pets/:id', petsCtrl.update);
app.delete('/pets/:id', petsCtrl.delete);

// Configure Multer storage location and naming convention for uploaded files
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({ storage : storage }).array('userPhoto',2);  // Uploads an array of files to req.files (opposed to req.file for single) and limits to 2 files total

// This route is to test file uploads
app.post('/petpic',function(req,res){
    upload(req,res,function(err) {
        console.log(req.body);
        console.log(req.files);
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});


if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!
  var watcher = chokidar.watch('./server');
  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(function(id) {
        if (/\/server\//.test(id)) delete require.cache[id];
      });
    });
  });
}

// Connect to the database.
mongoose.connect("mongodb://localhost:27017/pethop");
mongoose.connection.once('open', function(){
  console.log("MongoDB connected successfully");
});

// Render the index (referring to root of views specified above (__dirname + '/views'))
app.get('/', function(req, res){
  res.render('index');
});

// Wait for Stormpath to connect to it's API before accepting connections so we can check authentication.
app.on('stormpath.ready', function () {
  app.listen(8080, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Listening on 8080');
  });
});
