import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Touchable, View } from "react-native";
import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/Screens/Login";
import { Home } from "./src/Screens/Home";
import { Settings } from "./src/Screens/Settings";
import { getData } from "./src/Utils/storage";

export default function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  async function getToken() {
    getData("access_token").then((res) => console.log(res));
  }
  useEffect(() => {
    getToken();
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        {/* <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
          <Stack.Screen options={{ headerShown: false }} name="Settings" component={Settings} />
        </Stack.Navigator> */}
        {/* {loggedIn ? <Home /> : <Login />} */}
      </NavigationContainer>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
