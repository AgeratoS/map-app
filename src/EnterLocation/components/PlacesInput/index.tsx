import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { PlaceInputProps } from "../../types";

const PlacesInput: React.FC<PlaceInputProps> = ({ placeholder= "Look up address or POI", onPress, query }) => (
    <GooglePlacesAutocomplete
        placeholder={placeholder}
        onPress={onPress}
        query={query}
    />
);

export default PlacesInput;