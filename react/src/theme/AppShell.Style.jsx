
import commonStyles from "./commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    appShell: {
        maxWidth: 800,
        margin: 'auto',
    },
    mapFullSize: {
        height: 'calc(100vh - 180px)',
        outline: 'none',
    },
    piPlayerImg: {
        border: '1px solid ' + theme.palette.primary.main,
        borderRadius: theme.spacing(0.5),
        maxWidth: '100%',
    },
    navList: {
        padding: theme.spacing(),
    },
    screenCard: {
        boxShadow: 'none',
        marginBottom: 100,
    },
    menuOpenerBtn: {
        position: 'absolute',
        top: theme.spacing(),
        right: theme.spacing(),
    },
    navDrawer: {
        width: 300,
    },
    navDrawerWidth: {
        width: 300,
    },
    piPlayer: {
        // border: '1px solid #a89a2c',
        margin: 'auto',
        textAlign: 'center',
    },

    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },


    mapPreview: {
        height: 200,
        outline: 'none',
    },
    piJSLogo: {
        height: 30,
        // margin: theme.spacing(0.5),
    },
});
