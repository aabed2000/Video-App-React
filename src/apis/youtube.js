import axios from "axios";

const KEY = "AIzaSyAlJ_e5B3HxI3Ti2uo_VhOe_CKA49zp2l0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "vidoe",
    maxResults: 5,
    key: KEY,
  },
});
