import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Settings } from "./Settings";
import { Games } from "./Games";
import { fetchRandomSongs } from "../Services/fetchRandomSongs";

export const Home = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Games" component={Games} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
