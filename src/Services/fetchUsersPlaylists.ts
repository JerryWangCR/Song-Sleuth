import { getData } from "../Utils/storage";
import axios from "axios";

export const fetchUsersPlaylists = async (userID: string) => {
  const token = await getData("access_token");
  const config = {
    method: "GET",
    url: `https://api.spotify.com/v1/users/${userID}/playlists`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(token);

  return await axios
    .request(config)
    .then((res) => {
      return res.data.items;
    })
    .catch((error) => {
      console.error(error);
    });
};
