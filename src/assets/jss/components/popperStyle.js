import { colors } from "../main";
const popperStyle = theme => ({
  paper: {
    border: `1px solid ${colors.secondaryGray}`,
    borderRadius: 5,
    height: "auto",
    width: 150,
    padding: theme.spacing(1),
    backgroundColor: colors.secondaryGray,
    // alignItems:"center",
    textAlign: "center"
  },
  popperPosition: {
    zIndex: 1400
  },
  arrowUp: {
    width: 0,
    height: 0,
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: `10px solid ${colors.secondaryGray}`,
    marginLeft: 108
  }, 
  linkButton: {
    textDecoration: "none",
  }, 
  accountButton: {
    marginBottom: 5
  },
  settingsButton: {
    marginBottom: 5
  }
});

export default popperStyle;
