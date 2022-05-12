import React from "react";
import "./index.scss";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import { Routing } from "pages";
import { theme } from "shared/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{<Routing />}</BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>
    </>
  );
};

export default App;
