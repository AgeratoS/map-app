import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EnterLocationView from "../components";
import { useLocalStorage } from "../../common/hooks/useLocalStorage";
import { LocationItem } from "../../common/types";

const EnterLocation: React.FC = () => {

    // locations - локации, которые достаем из localStorage
    const [locations, setLocations] = useLocalStorage<LocationItem[]>("locations", [])
    // selectedLocations - локации, которые выбрал пользователь. В общем случае
    // locations и selectedLocations НЕ совпадают. Именно поэтому выделяется
    // отдельный стэйт
    const [selectedLocations, setSelectedLocations] = useState<LocationItem[]>(locations);

    const onSave = () => setLocations(selectedLocations)
    const onLocationPress = (data: LocationItem) => {
        setSelectedLocations(prevLocations => [...prevLocations, data])
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <EnterLocationView
                locations={selectedLocations}
                onLocationPress={onLocationPress}
                onSave={onSave}
            />
        </SafeAreaView>
    );
}

export default EnterLocation;