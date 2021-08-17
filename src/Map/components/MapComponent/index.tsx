import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { View } from "native-base";
import { MapComponentProps } from "../../types";

const MapComponent: React.FC<MapComponentProps> = ({ markers, activeMarker }) => (
    <View style={{ flex: 1 }}>
        <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
        />
    </View>
);

export default MapComponent;