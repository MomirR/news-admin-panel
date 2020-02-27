import { colors } from "@assets/jss/main";

const userStyle = theme => ({
  styledGrid: {
    border: `1px solid ${colors.primaryGray}`,
    padding: "10px 20px",
    borderRadius: 7,
    marginBottom: 10,
    [theme.breakpoints.down("md")]: {
      padding: "5px"
    }
  },
  iconsBar: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignContent: "flex-end"
    }
  },
  styledAvatar: {
    display: "inline-block"
  },
  deleteUserIcon: {
    padding: 0
  }
});

export default userStyle;
