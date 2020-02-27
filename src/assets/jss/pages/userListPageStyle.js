import { colors } from "@assets/jss/main";
const userListPageStyle = theme => ({
  styledGrid: {
    padding: "10px 20px",
    border: `1px`,
    [theme.breakpoints.down("md")]: {
      padding: "5px"
    }
  },
  sortAndFilterBar: {
    display: "flex",
    "& p": {
      marginRight: "10px",
      color: colors.primaryDark,
      textTransform: "uppercase"
    }
  }
});

export default userListPageStyle;
