import React from 'react'
import ScriptjsLoader from 'react-google-maps/lib/async/ScriptjsLoader'



function MapLoader (props){
    return (
        <ScriptjsLoader
      hostname={"maps.googleapis.com"}
      pathname={"/maps/api/js"}
      query={ {
        v: 3.24,
        key: 'AIzaSyC9Zst0uBpxGJ2P4LLv3IMATpN9Ppl4ImI',
        libraries: "geometry,drawing,places"
      } }
      loadingElement={
        <div>
          <i className="fa fa-spinner" aria-hidden="true"></i>
        </div>
      }

      containerElement={
        <div id="google-map-container" />
      }
      googleMapElement={ props.children }
    />
        )
};

module.exports = MapLoader;
