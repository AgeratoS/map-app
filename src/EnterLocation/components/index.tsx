import React from "react";
import { Button } from "native-base";
import PlacesInput from "./PlacesInput";
import PlacesList from "./PlacesList";
import { EnterLocationProps } from "../types";

const EnterLocation: React.FC<EnterLocationProps> = ({ locations, onSave, onLocationPress }) => (
    <>
        <PlacesInput
            onPress={onLocationPress}
        />
        <PlacesList items={locations} />
        <Button onPress={onSave}>Save locations</Button>
    </>
);

export default EnterLocation;