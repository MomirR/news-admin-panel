import { createMuiTheme } from "@material-ui/core/styles";

export const colors = {
  primaryDark: "#231F20",
  secondaryDark: "#333333",
  tertiaryDark: "#666666",
  primaryGray: "#909090",
  secondaryGray: "#CCCCCC",
  tertiaryGray: "#F2F2F2",
  red: "#e26e6e",
  white: "#FFFFFF"
};

export const fonts = {
  bitter: '"Bitter", serif',
  abel: '"Abel", sans-serif',
  franklin: '"Libre Franklin", sans-serif ',
  lime: "Limelight, cursive"
};

export const AppStyle = {
  MuiButtonBase: {
    color: "red"
  }
};

export const sizes = {
  drawerWidth: 240
};

export const DefaultTheme = createMuiTheme({
  palette: {
    primary: {
      light: colors.tertiaryDark,
      main: colors.secondaryDark,
      dark: colors.primaryDark
    },
    secondary: {
      light: colors.tertiaryGray,
      main: colors.secondaryGray,
      dark: colors.primaryGray
    },
    error: {
      main: colors.red
    },
    text: {
      primary: colors.primaryGray
    }
  },
  typography: {
    fontFamily: fonts.abel,
    h1: {
      fontFamily: fonts.bitter,
      color: colors.secondaryDark,
      marginBottom: 50,
      fontSize: "2.125rem",
      fontWeight: "700",
      textTransform: "uppercase"
    },
    h2: {
      color: colors.primaryDark,
      fontFamily: fonts.bitter,
      display: "inline-block",
      fontSize: "1.5em",
      fontWeight: 700,
      margin: "20px 0"
    },
    h4: {
      fontFamily: fonts.bitter,
      color: colors.secondaryDark
    },
    h5: {
      fontFamily: fonts.bitter,
      color: colors.secondaryDark
    },
    body1: {
      color: colors.primaryGray,
      fontFamily: fonts.abel
    },
    body2: {
      fontWeight: "700",
      color: colors.tertiaryDark,
      fontFamily: fonts.bitter
    },
    caption: {
      fontWeight: 700,
      fontFamily: fonts.lime,
      color: colors.primaryGray,
      fontSize: 21
    }
  },
  overrides: {
    MuiLink: {
      root: {
        cursor: "pointer",
        color: colors.primaryGray,
        fontFamily: fonts.franklin
      },
      underlineHover: {
        "&:hover": {
          color: colors.tertiaryDark,
          textDecoration: "none"
        }
      }
    },
    MuiSelect: {
      root: {
        padding: 0,
        fontFamily: fonts.abel,
        fontSize: "1rem",
        borderRadius: 0
      },
      select: {
        padding: "0 50px 0 15px",
        "&:focus": {
          outline: colors.primaryDark
        }
      }
    },
    MuiInputBase: {
      input: {
        color: colors.tertiaryDark,
        fontWeight: 400
      }
    },
    MuiButton: {
      root: {
        fontFamily: fonts.franklin.primaryGray,
        textTransform: "capitalize"
      }
    }
  }
});
