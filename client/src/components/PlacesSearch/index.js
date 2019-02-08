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
//        console.log(place);
          this.setState({value: place.formatted_address});
          console.log(this.state.value)
        this.setState((state,props) => ({
            location: this.state.value,
        }));

         this.props.onPlaceChanged(place.formatted_address);
      }
    



    render() {
        return (
        <input ref={this.autocompleteInput} text-value={this.state.value} id="autocomplete" placeholder="Enter your address"
         type="text"></input>
        );
    }
}

export default SearchBar