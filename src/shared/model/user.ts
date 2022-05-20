import { createEvent, createStore } from "effector";
import { AuthCredentials } from "shared/api/auth";

export const authorize = createEvent<AuthCredentials>();

const initValue = {
  username: localStorage.getItem("username") || "",
  password: localStorage.getItem("password") || "",
};

export const $user = createStore({
  username: initValue.username,
  password: initValue.password,
  authorize: !!initValue.username && !!initValue.password,
}).on(authorize, (_, payload) => {
  localStorage.setItem("username", payload.username);
  localStorage.setItem("password", payload.password);
  return {
    ...payload,
    authorize: true,
  };
});
