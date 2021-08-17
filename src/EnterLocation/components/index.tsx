import React from "react";
import { Button, View } from "native-base";
import PlacesInput from "./PlacesInput";
import PlacesList from "./PlacesList";
import { EnterLocationProps } from "../types";

const EnterLocation: React.FC<EnterLocationProps> = ({ locations, onSave, onLocationPress }) => (
    <View style={{ flex: 1 }}>
            <PlacesInput
                onPress={onLocationPress}
            />
            <PlacesList items={locations} />
            <Button onPress={onSave}>Save locations</Button>
    </View>
);

export default EnterLocation;