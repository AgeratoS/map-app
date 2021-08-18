import React, { useCallback } from "react";
import { FlatList } from "native-base";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import CarouselSlide from "../CarouselSlide";
import { MapCarouselProps } from "../../types";

const MapCarousel: React.FC<MapCarouselProps> = ({ locations, onSlideLocation, currentLocation }) => {

    const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);

        const isNoMansLand = 0.4 < distance;
        if (roundIndex !== currentLocation && !isNoMansLand)
        {
            onSlideLocation(roundIndex);
        }
    }, []);

    return (
        <FlatList
            data={locations}
            renderItem={({ item }) => {
                return (
                    <CarouselSlide location={item}/>
                );
            }}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
        />
    );
};

export default MapCarousel;