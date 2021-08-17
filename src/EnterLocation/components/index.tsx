import React from "react";
import { Button, NativeBaseProvider, View } from "native-base";
import PlacesInput from "./PlacesInput";
import PlacesList from "./PlacesList";

const EnterLocation = () => (
    <NativeBaseProvider>
        <View>
            <PlacesInput
                onPress={() => {}}
                query={{key: 'ABC', language: 'en'}}
            />
            <PlacesList />
            <Button>Save locations</Button>
        </View>
    </NativeBaseProvider>
);

export default EnterLocation;