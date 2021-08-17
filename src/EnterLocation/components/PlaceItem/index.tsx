import React from "react";
import { Text, View } from "native-base";
import { PlaceItemProps } from "../../types";

const PlaceItem: React.FC<PlaceItemProps> = ({ placeItem: { location, address } }) => (
    <View>
        <Text>{location}</Text>
        <Text>{address}</Text>
    </View>
);

export default PlaceItem;