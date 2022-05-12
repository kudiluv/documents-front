import axios from "axios";
import { API_URL } from "shared/config";

export default axios.create({
  baseURL: API_URL,
});
