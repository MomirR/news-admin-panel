import { sizes } from "../main";

const layoutStyle = theme => ({
  content: {
    flexGrow: 1,
    overflow: "auto",
    height: "auto",
    marginTop: 80,
    marginBottom: 50,
    padding: 25,
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(9) + 1
    }
  },
  sidebarOpen: {
    [theme.breakpoints.up("md")]: {
      marginLeft: sizes.drawerWidth
    }
  }
});

export default layoutStyle;
