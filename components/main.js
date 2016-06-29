var React = require('react');
import Nav from './nav/nav.js';
import Footer from './footer/footer.js';
import MainData from './mainData.js';

var Main = React.createClass({






  // MainData wraps these compnents to make its functions available to children through "context"
  render: function(){
    return(
      <div className="main">
        <MainData>
          <Nav />
          { this.props.children }
          <Footer />
        </MainData>
      </div>
    )
  }
});

module.exports = Main;
