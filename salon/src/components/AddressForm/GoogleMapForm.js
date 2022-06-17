// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import { SalonRequestLists } from "../../store/admin/salonrequested/action";
// import {API_URL2} from '../../helpers/apiurls';
// import axios from 'axios';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
// var map_key = 'AIzaSyB0lHA_hBW6VaJFxruQ2oR0a3prK-i7d5A';

import React from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyB0lHA_hBW6VaJFxruQ2oR0a3prK-i7d5A");
Geocode.enableDebug();

class Map extends React.Component{
constructor(props){
  console.log("Data1",props,);
  super( props );
  
  this.state = {
   address: props.google.data.address,
   city: '',
  //  area: props.google.data.city,
   state: '',
   country: '',
   postalcode: '',
  
   mapPosition: {
    lat: this.props.center.lat,
    lng: this.props.center.lng
   },
   markerPosition: {
    // lat: this.latVal,
    // lng: this.lngVal
     lat: this.props.center.lat,
    lng: this.props.center.lng
}
  }
 }
/**
  * Get the current address from the default map position and set those values in the state
  */
 componentDidMount() {
  Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
   response => {
     console.log("resplatlng",response);
    this.setState( {
   } )
   },
   error => {
    console.error(error);
   }
  );
 };
/**
  * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
  *
  * @param nextProps
  * @param nextState
  * @return {boolean}
  */

 shouldComponentUpdate( nextProps, nextState ){
  if (
   this.state.markerPosition.lat !== this.props.center.lat 

  ) {
   return true
  } else if ( this.props.center.lat === nextProps.center.lat ){
   return false
  }
 }



/**
  * And function for city,state and address input
  * @param event
  */
 onChange = ( event ) => {
  this.setState({ [event.target.name]: event.target.value });
 };
/**
  * This Event triggers when the marker window is closed
  *
  * @param event
  */
 onInfoWindowClose = ( event ) => {
};
/**
  * When the user types an address in the search box
  * @param place
  */
 onPlaceSelected = ( place ) => {
   console.log("placesssss",place);
   const address = place.formatted_address,
   addressArray =  place.address_components,

   latValue = place.geometry.location.lat(),
   lngValue = place.geometry.location.lng();

 };
/**
  * When the marker is dragged you get the lat and long using the functions available from event object.
  * Use geocode to get the address, city, area and state from the lat and lng positions.
  * And then set those values in the state.
  *
  * @param event
  */
 onMarkerDragEnd = ( event ) => {
  console.log( 'event', event );
  let newLat = event.latLng.lat(),
      newLng = event.latLng.lng(),
      addressArray = [];
 Geocode.fromLatLng( newLat , newLng ).then(
   response => {
      console.log("myresp",response);
      console.log("myresp123",response.results[0].geometry.location);
      this.props.handlecoordinates(response.results[0].geometry.location)
    const address = response.results[0].formatted_address,
     addressArray =  response.results[0].address_components,
     city = this.getCity( addressArray ),
     area = this.getArea( addressArray ),
     state = this.getState( addressArray );
     this.setState({
     address: ( address ) ? address : '',
     area: ( area ) ? area : '',
     city: ( city ) ? city : '',
     state: ( state ) ? state : ''
    })
   },
   error => {
     console.log("errmap",error);
    console.error(error);
   }
  );
 };

render(){
const AsyncMap = withScriptjs(
   withGoogleMap(
    props => (
     <GoogleMap google={this.props.google}
      defaultZoom={this.props.zoom}
      defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
     >
        
{/*Marker*/}
      <Marker 
       google={this.props.google}
       name={'Dolores park'}
       draggable={true}
       onDragEnd={ this.onMarkerDragEnd }
       position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
             />
      <Marker />
{/* InfoWindow on top of marker */}
      <InfoWindow
       onClose={this.onInfoWindowClose}
       position={{ lat: ( this.state.markerPosition.lat + 0.0018 ), lng: this.state.markerPosition.lng }}
      >
       <div>
        <span style={{ padding: 0, margin: 0 }}>{ this.state.address }</span>
       </div>
      </InfoWindow>
  </GoogleMap>
)
   )
  );
let map;
  if( this.props.center.lat !== undefined ) {
   map = <div>
    
     <AsyncMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0lHA_hBW6VaJFxruQ2oR0a3prK-i7d5A&libraries=geometry"
      loadingElement={
       <div style={{ height: `100%` }} />
      }
      containerElement={
       <div style={{ height: this.props.height }} />
      }
      mapElement={
       <div style={{ height: `100%` }} />
      }
     />
      <br/>
    


    </div>
} else {
   map = <div style={{height: this.props.height}} />
  }
  return( map )
 }
}
export default Map