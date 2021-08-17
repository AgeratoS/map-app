import { GestureResponderEvent } from "react-native";
import { LocationItem } from "../common/types";
// It's all types that correspond to PlaceInput component

type PlaceInputOnPress = (data: LocationItem, details: unknown) => void;
export type PlaceInputProps = {
    placeholder?: string;
    onPress: PlaceInputOnPress;
};

// It's all types that correspond to PlacesList component
export type PlacesListProps = {
    items: LocationItem[]
}

// It's all types that correspond to PlaceItem component
export type PlaceItemProps = {
    placeItem: LocationItem;
};

// It's all types that correspond to EnterLocation component
type OnSaveLocations = (responderEvent: GestureResponderEvent) => void;
export type EnterLocationProps = {
    locations: LocationItem[];
    onSave: OnSaveLocations;
    onLocationPress: PlaceInputOnPress;
}