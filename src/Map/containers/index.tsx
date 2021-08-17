import React from "react";
import { View } from "native-base";
import MapView from "../components";

const Map: React.FC = () => {
    return (
        <View style={{ flex: 1 }}>
            <MapView />
        </View>
    );
}

export default Map;