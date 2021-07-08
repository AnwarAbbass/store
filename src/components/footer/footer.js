import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: 'lightblue',
      padding: theme.spacing(2),
      marginTop: 'auto'
    },
}));

function Footer(){
    const classes = useStyles();

    return(
        <footer className={classes.footer}>
            &copy;
            store-front
        </footer>
    )
}

export default Footer;
