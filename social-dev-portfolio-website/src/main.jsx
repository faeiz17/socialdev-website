import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { store } from "./redux/store.js";
// import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material";

//Creating Theme For MUI
export const CustomTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#eb3678",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#4f1787",
      contrastText: "#eb3678",
    },
    background: {
      paper: "#000000",
    },
    divider: "#1a237e",
  },
  props: {
    MuiAppBar: {
      color: "transparent",
    },
  },
  overrides: {
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
          transform: "translateX(16px)",
          color: "#fff",
          "& + $track": {
            opacity: 1,
            border: "none",
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: "1px solid #bdbdbd",
        backgroundColor: "#fafafa",
        opacity: 1,
        transition:
          "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
    },
  },
  typography: {
    fontFamily: "Oswald",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            "url('https://www.toptal.com/designers/subtlepatterns/uploads/black_twill.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={CustomTheme}>
    <CssBaseline />
    <React.StrictMode>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </React.StrictMode>
  </ThemeProvider>
);
