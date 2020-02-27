import { colors, sizes } from "../main";
const drawerWidth = sizes.drawerWidth;
const headerStyle = theme => ({
  appBarUnregistred: {
    backgroundColor: colors.white,
    boxShadow: "none",
    borderBottom: `1px solid ${colors.secondaryGray}`,
    alignItems: "center",
    width: "95%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
    borderBottom: `1px solid ${colors.secondaryGray}`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },

  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  accountCircle: {
    zIndex: theme.zIndex.drawer,
    marginTop: 5,
    marginRight: 25,
    top: 0,
    right: 0,
    position: "fixed"
  }
});

export default headerStyle;
