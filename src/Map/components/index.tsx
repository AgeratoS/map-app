import React from "react";
import MapComponent from "./MapComponent";
import MapCarousel from "./MapCarousel";
import { MapProps } from "../types";

const Map: React.FC<MapProps> = ({ onSlideLocation, currentLocation, locations, activeMarker, markers}) => (
  <>
      <MapComponent activeMarker={activeMarker} markers={markers} />
      <MapCarousel locations={locations} onSlideLocation={onSlideLocation} currentLocation={currentLocation} />
  </>
);

export default Map;