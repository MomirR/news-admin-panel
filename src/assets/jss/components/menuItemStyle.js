import { colors, fonts } from "../main";
const menuItemStyle = theme => ({
  icons: {
    marginLeft: 15,
    color: colors.primaryDark,
    fontSize: 20
  },
  listOfLinks: {
    fontFamily: fonts.franklin,
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.00938em"
  }
});

export default menuItemStyle;
