import React from "react";
import { View, Text } from "native-base";
import { CarouselSlideProps } from "../../types";

const CarouselSlide: React.FC<CarouselSlideProps> = ({ location: { location, address } }) => (
    <View>
        <View>
            <Text>{location}</Text>
            <Text>{address}</Text>
        </View>
    </View>
);

export default CarouselSlide;