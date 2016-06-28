var React = require('react');
import Nav from './nav/nav.js';
import Footer from './footer/footer.js';


var Main = React.createClass({







  render: function(){
    return(
      <div className="main">
        <Nav />
        { this.props.children }
        <Footer />
      </div>
    )
  }
});

module.exports = Main;
