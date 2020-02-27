const modalStyle = theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& h5": {
      marginBottom: "20px"
    }
  },
  paper: {
    padding: "40px 50px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 30px"
    }
  }
});

export default modalStyle;
