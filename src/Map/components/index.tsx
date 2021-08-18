import React from "react";
import { Box } from "native-base";
import MapComponent from "./MapComponent";
import MapCarousel from "./MapCarousel";
import { MapProps } from "../types";

const Map: React.FC<MapProps> = ({ onSlideLocation, currentLocation, locations, activeMarker, markers}) => (
  <>
      <MapComponent
          activeMarker={activeMarker}
          markers={markers}
      />
      <Box
          position={"absolute"}
          shadow={8}
          bottom={5}
          left={5}
          right={5}
          bg={"primary.400"}
          alignSelf={"center"}
          rounded={"md"}
          padding={3}
      >
          <MapCarousel
          locations={locations}
          onSlideLocation={onSlideLocation}
          currentLocation={currentLocation}
      />
      </Box>
  </>
);

export default Map;