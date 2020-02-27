import { colors } from "../main";
const footerStyle = theme => ({
  footerWraper: {
    bottom: 0,
    left: 0,
    position: "absolute",
    height: 70,
    width: "100%",
    fontSize: 15,
    borderTop: `1px solid  ${colors.secondaryGray}`,
    padding: "0 auto!important"
  },
  footerText: {
    marginTop: 20,
    textAlign: "center"
  },
  footerSmall: {
    width: "95%",
    left: "2.5%"
  }
});

export default footerStyle;
