import { fonts, colors } from '../main';

export const basicInfoFormStyle = (theme) => ({
    label: {
        display: "block",
        marginBottom: 7
    },
    textLabel: {
        display: "inline-block",
        width: 80,
    },
    customInput: {
        padding: 5,
        color: colors.primaryGray,
        border: `1px solid ${colors.primaryGray}`,
        width: 230
    },
    mb50: {
        marginBottom: 50
    },
    verticalLine: {
        borderLeft: `1px solid ${colors.primaryGray}`,
        height: "100%",
        marginLeft: '50%'
    },
    select: {
        color: colors.primaryGray,
        width: 230,
        border: `1px solid ${colors.primaryGray}!important`,
        padding: 5,
        backgroundColor: "white"
    },
    btn: {
        padding: "5px 20px",
        color: "white",
        backgroundColor: "black",
        borderRadius: 6,
        position: "relative",
        bottom: 0
    },
    btnBasicInfo: {
        [theme.breakpoints.up('md')]: {
            bottom: -130,
            left: 250
        },
        [theme.breakpoints.up('lg')]: {
            bottom: -130,
            left: 250
        }
    },
    btnSocial: {
        [theme.breakpoints.up('md')]: {
            bottom: -120,
            left: 250
        },
        [theme.breakpoints.up('lg')]: {
            bottom: -120,
            left: 250
        }
    },
    btnPass: {
        [theme.breakpoints.up('md')]: {
            bottom: -40,
            left: 322
        },
        [theme.breakpoints.up('lg')]: {
            bottom: -40,
            left: 360
        },
        [theme.breakpoints.up('xl')]: {
            bottom: -40,
            left: 400
        }
    },
    line: {
        border: `1px solid ${colors.secondaryGray}`,
        marginTop: 50
    },
    textLabelSocial: {
        display: "inline-block",
        width: 100,
        fontFamily: fonts.bitter,
        fontWeight: 700
    }
})