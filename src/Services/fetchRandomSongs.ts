import { getData } from "../Utils/storage";
import axios from "axios";

export const fetchRandomSongs = async (
  numberOfRandomSongs: number,
  playlist: string
) => {
  const token = await getData("access_token");
  const config = {
    method: "GET",
    url: `https://api.spotify.com/v1/playlists/${playlist}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  // console.log(token);

  return await axios
    .request(config)
    .then((res) => {
      var randomSongs = [];
      for (let i = 0; i < numberOfRandomSongs; i++) {
        randomSongs.push(
          res.data.tracks.items[
            Math.floor(Math.random() * res.data.tracks.items.length)
          ]
        );
      }

      return randomSongs;
    })
    .catch((error) => {
      console.error(error);
    });
};
