import { Button } from "@ui-kitten/components";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { storeData, getData } from "../Utils/storage";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { useEffect } from "react";
export const Settings = ({ navigation }) => {
  const discovery = {
    authorizationEndpoint: "http://accounts.spotify.com/logout",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  };

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: "f2a4c7d6e7a842709c45b15bf7a9b528",
      clientSecret: "3eb0bbd15de84de4aa4a485f2f854c74",
      scopes: [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
        "streaming",
        "user-read-email",
        "user-read-private",
      ],
      usePKCE: false,
      redirectUri: "exp://192.168.2.185:19000",
    },
    discovery
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        style={styles.button}
        appearance="filled"
        size="large"
        onPress={async function event() {
          storeData("access_token", "NULL");
          console.log(await getData("access_token"));
          promptAsync().then(async () => {
            if ((await getData("access_token")) == "NULL") {
              navigation.navigate("Login");
            }
          });
        }}
      >
        Logout
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 300,
    height: 200,
  },
  button: {
    margin: 2,
    color: "white",
  },
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
});
