import React from "react";
import { PlacesListProps } from "../../types";
import { List, Text, View } from "native-base";
import PlaceItem from "../PlaceItem";

const PlacesList: React.FC<PlacesListProps> = ({ items }) => (
    <View>
        <Text>My Locations</Text>
        <List>
            {items.map(item => (
                <List.Item>
                    <PlaceItem placeItem={item} />
                </List.Item>
            ))}
        </List>
    </View>
);

export default PlacesList;