import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import EnterLocation from "../EnterLocation/containers";
import { Entypo } from "@expo/vector-icons";
import Map from "../Map/containers";

const Tab = createBottomTabNavigator();

const Routing = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen
                name="EnterLocation"
                component={EnterLocation}
                options={{
                    title: "Enter location",
                    tabBarIcon: () => <Entypo name="location" size={24}/>
                }}
            />
            <Tab.Screen name="Map" component={Map} options={{
                headerShown: false,
                title: "Map",
                tabBarIcon: () => <Entypo name={"map"} size={24}/>
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
);

export default Routing;