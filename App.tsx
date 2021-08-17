import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import Map from "./src/Map/components";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar />
      <Map />
    </NativeBaseProvider>
  );
}