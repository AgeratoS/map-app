import React from "react";
import { View } from "native-base";
import MapView from "../components";
import { useLocalStorage } from "../../common/hooks/useLocalStorage";
import { LocationItem } from "../../common/types";

const Map: React.FC = () => {

    const [locations] = useLocalStorage<LocationItem[]>("locations", []);

    return (
        <View style={{ flex: 1 }}>
            <MapView
                activeMarker={null}
                currentLocation={0}
                locations={locations}
                markers={null}
                onSlideLocation={() => {}}
            />
        </View>
    );
}

export default Map;