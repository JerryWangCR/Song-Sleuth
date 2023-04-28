import { getData } from "../Utils/storage";
import axios from "axios";

export const fetchPlaylists = async (categoryID: string) => {
  const token = await getData("access_token");
  const config = {
    method: "GET",
    url: `https://api.spotify.com/v1/browse/categories/${categoryID}/playlists`,
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
      return res.data.playlists.items;
    })
    .catch((error) => {
      console.error(error);
    });
};
