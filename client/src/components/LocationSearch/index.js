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


import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    handleChange = address => {
        this.setState({ address });
    };

handleSelect = address => {
    geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => console.log('Success', latLng))
        .catch(error => console.error('Error', error));
};

componentWillMount(){
    const API_KEY = process.env.REACT_APP_GOOGLEMAP_API_KEY
    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places";
    document.head.append(script);
    function loadScript(url, callback){

        let script = document.createElement("script")
        script.type = "text/javascript";

        if (script.readyState){  //IE
            script.onreadystatechange = function(){
                if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {  //Others
            script.onload = function(){
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }
}


render() {
    return (
        <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
        <input
        {...getInputProps({
        placeholder: 'Enter your address!',
        className: 'location-search-input',
        })}
/>
<div className="autocomplete-dropdown-container">
    {loading && <div>Loading...</div>}
     {suggestions.map(suggestion => {
     const className = suggestion.active
     ? 'suggestion-item--active'
     : 'suggestion-item';
     // inline style for demonstration purpose
     const style = suggestion.active
     ? { backgroundColor: '#fafafa', cursor: 'pointer' }
: { backgroundColor: '#ffffff', cursor: 'pointer' };
return (
    <div
    {...getSuggestionItemProps(suggestion, {
    className,
    style,
    })}
    >
        <span>{suggestion.description}</span>
</div>
);
})}
    </div>
</div>
)}
    </PlacesAutocomplete>
);
}
}
export default LocationSearchInput