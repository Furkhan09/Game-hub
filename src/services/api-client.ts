import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fe80f9a1547b446191fbc377d3ea43a0",
  },
});
