import axios from "axios";

const API_URL = "https://60bfbc0397295a0017c43b7a.mockapi.io"; 

export default axios.create({
  baseURL: API_URL,
  headers: { "Content-type": "application/json" }
});
