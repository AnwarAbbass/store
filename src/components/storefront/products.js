import React from "react";
import { connect } from "react-redux";
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
        // marginLeft:'100px'
        width:'90%',
        marginLeft: '20%',
    },
    h4:{
        display: 'block',
        textAlign:'center',
    //     margin: '0px',
	// padding: '0px',
	// border: '0px',
	// fontSize: '100%',
	// font: 'inherit',
	// verticalAlign: 'baseline',
    }
}));

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
                                <Button>
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

export default connect(mapStateToProps)(Products);
