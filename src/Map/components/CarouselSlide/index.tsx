import React from "react";
import { View, Text } from "native-base";
import { CarouselSlideProps } from "../../types";
import { Dimensions } from "react-native";

const { width: windowWidth } = Dimensions.get("window")

const HORIZONTAL_OFFSET = 64

const CarouselSlide: React.FC<CarouselSlideProps> = ({ location: { location, address } }) => (
    <View style={{ width: windowWidth - HORIZONTAL_OFFSET }}>
        <Text>Location: {location}</Text>
        <Text>Address: {address}</Text>
    </View>
);

export default CarouselSlide;