import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// Абсолютно уверен в своих деяниях: @dotenv - модуль react-native-dotenv,
// подтягивающий переменные окружения (настраивался из babel.config)
// Но TypeScript решил искать напрямую пакет @dotenv в node_modules

//@ts-ignore
import { GOOGLE_MAP_KEY_API } from "@dotenv";
import { PlaceInputProps } from "../../types";

const PlacesInput: React.FC<PlaceInputProps> = ({ placeholder= "Look up address or POI", onPress }) => (
    <GooglePlacesAutocomplete
        placeholder={placeholder}
        onPress={onPress}
        query={{
            key: GOOGLE_MAP_KEY_API,
            language: "en"
        }}
    />
);

export default PlacesInput;