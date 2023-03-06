import { createTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";

const theme = createTheme({
  palette: {
    primary: pink,
  },
  overrides: {
    MuiButtonBase: {
      root: {
        textTransform: "uppercase",
      },
    },
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
      },
    },
  },
});

export default theme;
