module.exports = (app) => {
  const multer = require('multer'); // Grabs Multer

  const storage = multer.diskStorage({
    destination: './usercontent/', // Specifies upload location...


    // Files will come in with their name already altered to our convention(mongoid + imagepurpose)
    filename: function (req, file, cb) {
      console.log("multer req.body", req);
      switch (file.mimetype) { // *Mimetype stores the file type, set extensions according to filetype
        case 'image/jpeg':
          ext = '.jpeg';
          break;
        case 'image/png':
          ext = '.png';
          break;
        case 'image/gif':
          ext = '.gif';
          break;
      }

      cb(null, file.originalname + ext);
    }
  });

  const upload = multer({ storage:  storage});

  app.post('/uploadHandler', upload.single('file'), function (req, res, next) {
    res.send({ responseText: req.file.path }); // You can send any response to the user here
  });
};
