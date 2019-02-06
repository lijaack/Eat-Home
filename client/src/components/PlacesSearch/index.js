import React from "react";

/* global google */


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
        this.state = {value: ''};
        this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
                                                                {"types": ["geocode"]});
        this.autocomplete.setFields('address_components');
        this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
    }
//    handleChange(event) {
//        this.setState({value: event.target.value});
//    }

      handlePlaceChanged(){
        const place = this.autocomplete.getPlace();
//        console.log(place.formatted_address);
          this.setState({value: place.formatted_address});
          console.log(this.state.value)
//        this.props.onPlaceLoaded(place);
      }



    render() {
        return (
            <input ref={this.autocompleteInput} value={this.state.value} id="autocomplete" placeholder="Enter your address"
            type="text" ></input>
        );
    }
}

export default SearchBar