import { ResponseType, useAuthRequest } from "expo-auth-session";
import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Touchable,
} from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { Button, Icon, Layout, Spinner } from "@ui-kitten/components";
import LoginLogo from "../Components/LoginLogo";
import SpotifyLogo from "../Components/SpotifyLogo";
import { storeData, getData } from "../Utils/storage";
import { fetchRandomSongs } from "../Services/fetchRandomSongs";

import { SongButton } from "../Components/SongButton";

import { Audio } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";

export const SongPlayer = ({ route, navigation }) => {
  const { playlistID } = route.params;

  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const soundObject = new Audio.Sound();
  let isLoaded = false;
  async function playSong(previewUrl: string) {
    try {
      if (!isLoaded) {
        await soundObject.loadAsync({ uri: previewUrl });
        isLoaded = true;
      }
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  }

  async function pauseSong() {
    try {
      await soundObject.pauseAsync();
    } catch (error) {
      console.log("Error pausing sound: ", error);
    }
  }

  async function fetchSongs() {
    fetchRandomSongs(4, playlistID).then((res) => {
      setSongs(res);
      setLoading(false);
      res.forEach((item) => songs.push(item.track.name));
    });
  }
  useEffect(() => {
    fetchSongs();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View
          style={{
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 350,
              height: 350,
            }}
            source={{
              uri: `${songs[0].track.album.images[0].url}`,
            }}
          />
          <Text
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              alignItems: "center",
            }}
          >
            Quiz Song: {songs[0].track.name}
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Button
              onPress={() => {
                playSong(songs[0].track.preview_url);
              }}
            >
              ▶
            </Button>
            <Button onPress={() => pauseSong()}>▐▐</Button>
            <Button
              onPress={() => {
                fetchSongs();
                pauseSong();
              }}
            >
              Generate Songs
            </Button>
          </View>
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <View
              style={{
                padding: 10,

                flexDirection: "row",
              }}
            >
              <SongButton songName={songs[0].track.name} />
              <SongButton songName={songs[1].track.name} />
            </View>
            <View
              style={{
                padding: 10,

                flexDirection: "row",
              }}
            >
              <SongButton songName={songs[2].track.name} />
              <SongButton songName={songs[3].track.name} />
            </View>
          </View>
        </View>
      )}
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 2,
    color: "white",
  },
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 50,
    height: 50,
  },
});
