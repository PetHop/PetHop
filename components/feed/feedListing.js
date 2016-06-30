import React from 'react';
import cardPic from 'file!./../../views/img/lucy.png';
import ownerPic from 'file!./../../views/img/nick.png';
import card2Pic from 'file!./../../views/img/gingersnap.png';
import owner2Pic from 'file!./../../views/img/lauren.png';

var FeedListing = React.createClass({
  render: function () {
    return (

            <div className="row">
              <div className="col s10 m10 l3">
                <div className="card z-depth-2">
                <div className="ownerPic">
                  <img src={ ownerPic } alt="" className="responsive-img"/>
                </div>
                  <div className="card-image">
                    <img src={ cardPic }/>
                    <span className="card-title">Jenny Marucci</span>

                  </div>
                  <div className="card-content">
                    <p>Needs a ride to: Kent, OH</p>
                  </div>
                  <div className="card-action">
                  <a href="#">View Details</a>
                  <a href="#">View Profile</a>
                  </div>
                </div>
              </div>

              <div className="col s10 m10 l3">
                <div className="card z-depth-2">
                <div className="ownerPic">
                  <img src={ owner2Pic } alt="" className="responsive-img"/>
                </div>
                  <div className="card-image">
                    <img src={ card2Pic }/>
                    <span className="card-title">GingerSnap Nichols</span>

                  </div>
                  <div className="card-content">
                    <p>Needs a ride to: Maui, HI</p>
                  </div>
                  <div className="card-action">
                  <a href="#">View Details</a>
                  <a href="#">View Profile</a>
                  </div>
                </div>
              </div>
            </div>

   )
  }
});

{/*<p>{ this.props.petName } needs a ride to { this.props.destination }</p>*/}


export default FeedListing;
