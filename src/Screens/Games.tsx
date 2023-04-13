import * as React from "react";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { fetchRandomSongs } from "../Services/fetchRandomSongs";
import { fetchPlaylists } from "../Services/fetchPlaylists";
import { fetchUsersPlaylists } from "../Services/fetchUsersPlaylists";
import { Button, Icon, Layout, Spinner } from "@ui-kitten/components";

export const Games = () => {
  const [songs, setSongs] = useState();
  const [playlists, setPlaylists] = useState();
  const [userPlaylists, setUserPlaylists] = useState();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    fetchPlaylists("jazz").then((res) => {
      setPlaylists(res);
    });
    fetchUsersPlaylists("krishvijayan55").then((res) => setUserPlaylists(res));
  }, []);

  const getPlaylistRandomSongs = async (playlistID: string) => {
    fetchRandomSongs(4, playlistID).then((res) => {
      console.log(
        `4 random songs from: https://open.spotify.com/playlist/${playlistID}`
      );
      res.forEach((item) => console.log(item.track.name));
    });
  };

  const DisplayPlaylists = () => {
    return (
      <View>
        {/* <Button
            appearance="filled"
            size="large"
            onPress={() => {
              playlists.forEach((item) => console.log(item.id));
            }}
          ></Button> */}
        <FlatList
          data={playlists}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => {
                getPlaylistRandomSongs(item.id);
              }}
            >
              <View style={styles.item}>
                <Image
                  style={styles.logo}
                  source={{
                    uri: `${item.images[0].url}`,
                  }}
                />
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <DisplayPlaylists />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },

  logo: {
    width: 350,
    height: 350,
  },
  item: {
    marginBottom: 50,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 25,
  },
});
