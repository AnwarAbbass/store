import React from "react";
import { connect } from "react-redux";
import { removeFromCart ,addToCart} from '../../store/cart';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cart: {
      textAlign: "right",
    },
    text:{
        width: '59px'
    }
}));

function Carts(props) {
    const classes = useStyles();
console.log('5 storefront cart',props);
    if (props.cart) 
    {return (
        <>
            <div className={classes.cart}>
                {props.cart.map((item, idx) => {
                    return (
                        <ListItem key={idx}>
                            <Typography className={classes.text}>{item.name}</Typography>
                            
                            <Button onClick={() => props.removeFromCart(item)}>X</Button>
                        </ListItem>
                    )
                })}
            </div>   
        </>
    );}
    else return <div></div>;
}

const mapStateToProps = (state) => ({
    cart:state.CartReducer.cart
});

const mapDispatchToProps = { removeFromCart ,addToCart};

export default connect(mapStateToProps,mapDispatchToProps)(Carts);
