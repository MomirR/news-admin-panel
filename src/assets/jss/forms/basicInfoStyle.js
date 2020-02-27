import { fonts, colors } from '../main';

export const basicInfoStyle = (theme) => ({
    userHeading: {
        color: colors.primaryDark,
        fontFamily: fonts.bitter,
        display: "inline"
    },
    userInfoItem: {
        textAlign: 'left',
        [theme.breakpoints.up('md')]: {
            textAlign: 'left'
        }
    },
    mt: {
        textAlign: 'left',
    },
    rola: {
        textTransform: "uppercase",
        textDecoration: "underline",
        color: colors.primaryGray,
        fontFamily: fonts.abel,
        letterSpacing: 1,
        marginLeft: 20,
        display: 'inline'
    },
    userIcon: {
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block"

    },
    socialIcons: {
        color: colors.primaryDark,
    },
    line: {
        border: `1px solid ${colors.secondaryGray}`,
        margin: '0 50px'
    },
    linkWrapper: {
        marginTop: 20,
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            textAlign: 'left'
        }
    }
})