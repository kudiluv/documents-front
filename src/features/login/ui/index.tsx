import React, { useState } from "react";
import {
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useStore } from "effector-react";
import {
  $error,
  $password,
  $username,
  changePassword,
  changeUsername,
  login,
  loginFx,
} from "../model";
import Container from "./container";
import styles from "./styles.module.scss";

export function Login() {
  const username = useStore($username);
  const password = useStore($password);
  const pending = useStore(loginFx.pending);
  const error = useStore($error);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Paper className={styles.form}>
        <img src="./logo.svg" />
        <TextField
          fullWidth
          variant="standard"
          label="Username"
          sx={{ mt: "50px" }}
          value={username}
          onChange={(e) => changeUsername(e.target.value)}
        />
        <TextField
          fullWidth
          variant="standard"
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          sx={{ mt: "26px", mb: "20px" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  sx={{ mr: "5px" }}
                  edge="end"
                >
                  {!showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => {
            changePassword(e.target.value);
          }}
        />
        {error && <Typography>{error}</Typography>}
        <LoadingButton
          loading={pending}
          variant="contained"
          sx={{ mt: "28px", width: "50%" }}
          onClick={() => {
            login();
          }}
        >
          Login
        </LoadingButton>
      </Paper>
    </Container>
  );
}
