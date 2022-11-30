import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    common: {
      black: "#e1e2e1",
      white: "#e1e2e1",
    },
    error: {
      main: "#880a17",
    },
    warning: {
      main: "#ffc11e",
    },
    success: {
      main: "#084430",
    },
  },
  typography: {
    fontFamily: "roboto",
  },
});
