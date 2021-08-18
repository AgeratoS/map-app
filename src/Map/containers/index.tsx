import React from "react";
import { View } from "native-base";
import MapView from "../components";
import { useLocalStorage } from "../../common/hooks/useLocalStorage";
import { LocationItem } from "../../common/types";

const localLocations: Array<LocationItem> = [
    {
        location: "ABC",
        address: "DEF",
    },
    {
        location: "DDD",
        address: "FSS",
    },
    {
        location: "FDSDF",
        address: "MKDS",
    }
]

const Map: React.FC = () => {

    const [locations] = useLocalStorage<LocationItem[]>("locations", []);

    return (
        <View style={{ flex: 1 }}>
            <MapView
                activeMarker={null}
                currentLocation={0}
                locations={localLocations}
                markers={null}
                onSlideLocation={() => {}}
            />
        </View>
    );
}

export default Map;