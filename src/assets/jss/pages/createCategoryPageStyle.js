import { colors } from "@assets/jss/main";
const createCategoryPageStyle = theme => ({
  textfiled: {
    margin: 0
  },
  input: {
    width: "100%",
    padding: "10px 15px"
  },
  label: {
    fontSize: "1rem"
  },
  w100: {
    width: "100%"
  },
  homeOrder: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      boxSizing: "border-box",
      justifyContent: "space-between"
    }
  }
});

export default createCategoryPageStyle;
