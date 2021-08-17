import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import Routing from "./src/routing";

export default function App() {
  return (
    <NativeBaseProvider>
        <StatusBar />
        <Routing />
    </NativeBaseProvider>
  );
}