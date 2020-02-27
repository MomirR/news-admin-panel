import { colors, fonts } from "@assets/jss/main";
const paginationStyle = theme => ({
  pagination: {
    "& ul": {
      listStyle: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.primaryDark,
      padding: 0,

      "& li": {
        display: "inline-block",
        "& a": {
          cursor: "pointer",
          "&:focus": {
            outline: "none"
          }
        },
        "&.page": {
          "& a": {
            margin: "0 10px",
            fontFamily: fonts.abel,
            fontWeight: 400,
            padding: "7px 15px",
            border: `1px solid ${colors.tertiaryGray}`,
            borderRadius: "10px",
            "&:hover": {
              border: `1px solid ${colors.secondaryGray}`
            }
          }
        },
        "&.selected": {
          "& a": {
            backgroundColor: colors.primaryDark,
            color: "#fff"
          }
        }
      }
    }
  },
  paginationIcon: {
    cursor: "pointer"
  }
});

export default paginationStyle;
