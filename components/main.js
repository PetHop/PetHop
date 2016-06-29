var React = require('react');
import Nav from './nav/nav.js';
import Footer from './footer/footer.js';
import MainData from './mainData.js';

var Main = React.createClass({







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
