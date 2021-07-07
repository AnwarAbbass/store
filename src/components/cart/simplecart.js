import React from "react";
import { connect } from "react-redux";
import { removeFromCart ,addToCart} from '../../store/cart';

function Carts(props) {
console.log('5 cart',props);
    if (props.cart) 
    {return (
        <>
            {props.cart.map((item, idx) => {
                    return (
                        <li key={idx}>
                            {console.log('uuuuuuuu17',item)}
                            {item.name}
                            <button onClick={() => props.removeFromCart(item)}>X</button>
                        </li>
                    )
                })}
                
        </>
    );}
    else return <div></div>;
}

const mapStateToProps = (state) => ({
    cart:state.CartReducer.cart
});

const mapDispatchToProps = { removeFromCart ,addToCart};

export default connect(mapStateToProps,mapDispatchToProps)(Carts);
