//import React, { Component }  from 'react';
//
//
//const Example = (props) => {
//    return (
//        <div id="locationField">
//            <input id="autocomplete" placeholder="Enter your address"
//            onFocus="geolocate()" type="text"/>
//        </div>
//    );
//};
//
//export default Example;


// import React from 'react';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';

// class LocationSearchInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { address: '' };
//   }

//   handleChange = address => {
//     this.setState({ address });
//   };

//   handleSelect = address => {
//     geocodeByAddress(address)
//       .then(results => getLatLng(results[0]))
//       .then(latLng => console.log('Success', latLng))
//       .catch(error => console.error('Error', error));
//   };

//   componentWillMount(){
//         const API_KEY = process.env.GOOGLEMAP_API_KEY;
//         const script = document.createElement('script');
//         console.log(API_KEY);
//         script.src = "https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=myCallbackFunc";
//         document.head.append(script);
//   }

        let script = document.createElement("script")
        script.type = "text/javascript";

//   render() {
//     return (
//       <PlacesAutocomplete
//         value={this.state.address}
//         onChange={this.handleChange}
//         onSelect={this.handleSelect}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <input
//               {...getInputProps({
//                 placeholder: 'Search Places ...',
//                 className: 'location-search-input',
//               })}
//             />
//             <div className="autocomplete-dropdown-container">
//               {loading && <div>Loading...</div>}
//               {suggestions.map(suggestion => {
//                 const className = suggestion.active
//                   ? 'suggestion-item--active'
//                   : 'suggestion-item';
//                 // inline style for demonstration purpose
//                 const style = suggestion.active
//                   ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                   : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                 return (
//                   <div
//                     {...getSuggestionItemProps(suggestion, {
//                       className,
//                       style,
//                     })}
//                   >
//                     <span>{suggestion.description}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     );
//   }
// }
// export default LocationSearchInput
