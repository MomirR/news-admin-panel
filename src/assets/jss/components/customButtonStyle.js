import { colors, fonts } from "../main";
const customButtonStyle = theme => ({
  default: {
    marginRight: "10px",
    backgroundColor: colors.primaryDark,
    textPrimary: {
      color: colors.tertiaryGray,
      fontFamily: fonts.franklin
    }
  },
  danger: {
    marginRight: "10px",
    border: `2px solid ${colors.red}`,
    color: colors.primaryDark,
    "& :hover": {
      color: colors.red
    }
  }
});
export default customButtonStyle;
