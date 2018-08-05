import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=Qx4ETygEaJrjofWZDueP40hBswnofyGz&limit=10";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
