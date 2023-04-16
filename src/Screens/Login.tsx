import { ResponseType, useAuthRequest } from "expo-auth-session";
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { Button, Icon, Layout, Spinner } from "@ui-kitten/components";
import LoginLogo from "../Components/LoginLogo";
import SpotifyLogo from "../Components/SpotifyLogo";
import { storeData, getData } from "../Utils/storage";

const LoadingIndicator = (props) => (
  <View style={[props.style, styles.indicator]}>
    <Spinner status="control" size="small" />
  </View>
);

export const Login = ({ navigation }) => {
  const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
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
  useEffect(() => {
    if (response?.type == "success") {
      // console.log(response);
      const { access_token } = response.params;
      storeData("access_token", access_token);
    }
  });
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <LoginLogo />
        </View>
        <TouchableOpacity>
          {loading ? (
            <Button
              style={styles.button}
              appearance="filled"
              accessoryLeft={LoadingIndicator}
              size="large"
              onPress={() => {
                setLoading(false);
              }}
            >
              Logging you in!
            </Button>
          ) : (
            <Button
              onPress={async function event() {
                // getToken();
                setLoading(true);
                promptAsync().then(async () => {
                  const login = await getData("access_token");
                  console.log(login);
                  if (login != "NULL") {
                    navigation.navigate("Home");
                  }
                });
              }}
              style={styles.button}
              appearance="filled"
              accessoryLeft={SpotifyLogo}
              size="large"
            >
              Login to Spotify
            </Button>
          )}
        </TouchableOpacity>
      </View>
    </ApplicationProvider>
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
