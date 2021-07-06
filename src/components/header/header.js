import React from "react";
import { connect } from "react-redux";

function Header(props){
    console.log('4 header',props.cart)
    if (props.cart) return(
        <header>
            <h1>
                StoreFront
            </h1>
            <h4>
            {console.log('header 11', props.cart.length)}
            Cart ({props.cart.length})
            </h4>
        </header>
    )
    else return(
        <header>
            <h1>
                StoreFront
            </h1>
            <h4>
            Cart (0)
            </h4>
        </header>
    )
}

const mapStateToProps = (state) => ({
    cart:state.CartReducer.cart
});

export default connect(mapStateToProps)(Header);

// export default Header;