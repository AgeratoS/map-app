// It's all types that correspond to MapComponent component
import { LocationItem } from "../common/types";

export type MapComponentProps = {
    markers: any;
    activeMarker: any;
}

// It's all types that correspond to MapCarousel component

type OnSlideLocation = (index: CurrentLocation) => void;
type CurrentLocation = number;
export type MapCarouselProps = {
    locations: LocationItem[];
    onSlideLocation: OnSlideLocation;
    currentLocation: CurrentLocation;
}

// It's all types that correspond to CarouselSlide component
export type CarouselSlideProps = {
    location: LocationItem;
}

// It's all types that correspond to Map component
export type MapProps = MapCarouselProps & MapComponentProps;