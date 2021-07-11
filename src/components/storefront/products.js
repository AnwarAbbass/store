import React from "react";
import { connect } from "react-redux";
import {addToCart} from '../../store/cart'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center'

    },
    img: {
        height: '100px',
        width: '150px'
    },
    list: {
        display: 'inline-block',
        float:'left',
        width:'200px',
        margin: '2.5%',
    },
    ul:{
        width:'90%',
        marginLeft: '20%',
    },
    h4:{
        display: 'block',
        textAlign:'center',
    }
}));

// function Products(props) {
//     if (props.product) 
//     {return (
//         <>
//             <div>
//                 <h3>{console.log('xxxx',props.categories)} {props.categories.displayName}</h3>
//             </div>
//             {console.log('13 product storefront',props)}
//             {props.product.map((item, idx) => {
//                     return (
//                         <li key={idx}>
//                             {/* <img alt="item" src={item.image} /> */}
//                             {console.log('17 product',item)}
//                             {item.name}
//                             <br></br>
//                             {item.price} $
//                             <button onClick={() => props.addToCart(item)}>
//                                 Add to Cart
//                             </button>
//                             <button>
//                                 View Details
//                             </button>
//                         </li>
//                     )
//                 })}
                
//         </>
//     );}



function Products(props) {
    const classes = useStyles();
    // console.log('5 storefront product',props);
    if (props.product) {
        return (
            <>
                <div className={classes.root}>
                    <Typography variant="h3" component="h3">{props.categories.displayName}</Typography>
                </div>
                {/* {console.log('13 product storefront',props)} */}
                
                <List className={classes.ul} aria-label="secondary mailbox folder">
                    {props.product.map((item, idx) => {
                        return (
                            <ListItem key={idx} className={classes.list}>
                                <h4 className={classes.h4}>{item.name}</h4>
                                <img className={classes.img} alt="item" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQerBgJf0rAWXbXOwBwTrnSuLFxBFgH2HaDgA&usqp=CAU" />
                                {console.log('pppppp', item)}
                                <br></br>
                                {item.price}$
                                <br></br>
                                <Button onClick={() => props.addToCart(item)}>
                                    Add to Cart
                                </Button>
                                <Button>
                                    View Details
                                </Button>
                            </ListItem>
                        )
                    })}
                </List>
            </>
        );
    }
    else return <div></div>;
}

const mapStateToProps = (state) => ({
    product: state.ProductReducer.List,
    categories: state.CatigoryReducer.cat,
});

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps,mapDispatchToProps)(Products);
