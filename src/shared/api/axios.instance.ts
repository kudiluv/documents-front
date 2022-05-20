import axios from "axios";
import { API_URL } from "shared/config";
import { $user } from "shared/model/user";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

$user.watch((user) => {
  if (user.authorize) {
    axiosInstance.defaults.auth = {
      username: user.username,
      password: user.password,
    };
  }
});

export default axiosInstance;
