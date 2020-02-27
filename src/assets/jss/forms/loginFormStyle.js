import { colors } from "../main";
const loginFormStyle = theme => ({
  loginForm: {
    padding: "50px",
    // border: " 1px solid #cccccc",
    // boxShadow: `2px 2px 6px ${colors.primaryGray}`,
    [theme.breakpoints.down("xs")]: {
      padding: "20px"
    }
  },
  form: {
    flexGrow: 1,
    marginTop: "15px",
    width: "100%"
  },
  textField: {
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "auto"
    }
  },
  link: {
    cursor: "pointer",
    "&:hover": {
      color: colors.primaryGray,
      textDecoration: "none"
    }
  },
  errorMsg: {
    color: colors.red,
    textTransform: "uppercase",
    margin: "0",
    fontSize: "10px",
    marginTop: "10px"
  },
  w100: {
    width: "100%!important"
  },
  signInText: {
    fontWeight: 600
  }
});

export default loginFormStyle;
