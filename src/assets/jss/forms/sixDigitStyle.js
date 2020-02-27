import { fonts, colors } from '../main';

export const sixDigitStyle = () => ({
        form:{
            width: 495,
            margin: "30vh auto",
        },
        heading: { 
            fontFamily: fonts.bitter,
            textTransform: "uppercase",
            color: colors.primaryDark,
            padding: 5,
        },
        btn: {
            width: "100%",
            borderRadius: 0,
            backgroundColor: colors.primaryDark,
            color: "#ffffff",
            fontFamily: fonts.franklin,
            textTransform: "uppercase",
            marginTop: 10,
            "&:hover": {
                textDecoration: "none",
                borderRadius: 0,
                backgroundColor: colors.secondaryDark
              }
        },
        w100: {
            width: "100%"
        },
        ErrorMsg: {
            color: colors.red,
            textTransform: "uppercase",
            margin: "0",
            fontSize: "10px",
            marginTop: "10px",
          },
          msg: {
            textAlign: "left",
            color: colors.primaryGray,
            fontFamily: fonts.franklin
          },
          digitInput: {
            height: 40,
            width: 40,
            textAlign: "center",
            fontSize: 24,
            color: colors.primaryDark,
            "&:focus": {
                textAlign: "center",
                fontSize: 24,
                color: colors.primaryGray
              }
          },
          digitWrapper: {
            padding: 11,
            borderColor: colors.primaryGray
          },
          spanWrapper: {
            border:"none",
            borderTop:`1px solid ${colors.primaryGray}`,
            color:"#fff",
            backgroundColor:"#fff",
            height:"1px",
            width:"3%",
          }
})