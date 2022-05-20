import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { AuthCredentials, login as loginApi } from "shared/api/auth";
import { authorize } from "shared/model/user";

export const changeUsername = createEvent<string>();
export const $username = createStore<string>("").on(
  changeUsername,
  (_, value) => value
);
export const changePassword = createEvent<string>();
export const $password = createStore<string>("").on(
  changePassword,
  (_, value) => value
);

const $authCredentials = combine<AuthCredentials>({
  username: $username,
  password: $password,
});

export const login = createEvent();
export const loginFx = createEffect(loginApi);

export const $error = createStore("").on(
  loginFx.fail,
  (_, { error }) => "Wrong username or password"
);

sample({
  clock: login,
  source: $authCredentials,
  target: loginFx,
});

sample({
  clock: loginFx.doneData,
  source: $authCredentials,
  target: authorize,
});
