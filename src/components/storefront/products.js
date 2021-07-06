import React from "react";
import { connect } from "react-redux";
import {addToCart} from '../../store/cart';
import { useDispatch, useSelector } from 'react-redux';

function Products(props) {
    if (props.product) 
    {return (
        <>
        {console.log('5 storefront product',props)}
            <div>
                <h3>{console.log('xxxx',props.categories)} {props.categories.displayName}</h3>
            </div>
            {console.log('13 product storefront',props)}
            {props.product.map((item, idx) => {
                    return (
                        <li key={idx}>
                            {/* <img alt="item" src={item.image} /> */}
                            {console.log('17 product',item)}
                            {item.name}
                            <br></br>
                            {item.price} $
                            <button onClick={() => props.addToCart(item)}>
                                Add to Cart
                            </button>
                            <button>
                                View Details
                            </button>
                        </li>
                    )
                })}
                
        </>
    );}
    else return <div></div>;
}

const mapStateToProps = (state) => ({
    product: state.ProductReducer.List,
    categories: state.CatigoryReducer.cat,
});

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps,mapDispatchToProps)(Products);
