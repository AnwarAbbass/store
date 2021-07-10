import React from "react";
import { Button,Typography,AppBar,Toolbar,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: {
      background: '#ffffff',
      padding: theme.spacing(1),

    },
    cart: {
      alignSelf: "center",
      textAlign: "right",
      color: "#eee",
    },
    appBar: {
      marginBottom:'2%'
    },
}));

function Header(){
    const classes = useStyles();
    return(
        <header>

        <AppBar className={classes.appBar} position="relative">
        <Toolbar className={classes.toolbar}>
        <Grid container>
        <Grid item xs>
        <Button ><Typography variant="h3" component="h3">StoreFront</Typography></Button>
        </Grid>
        <Grid item xs className={classes.cart}>
        <Button >CART (0)</Button>
        </Grid>
        </Grid>
        </Toolbar>
        </AppBar>
        
            {/* <h1>
                StoreFront
            </h1> */}
        </header>
    )
}

export default Header;