import React from "react";

function Header(){
    return(
        <header>
            <h1>
                StoreFront
            </h1>
            <h4>
            {/* {props.cart.length} */}
                Cart (0)
            </h4>
        </header>
    )
}

export default Header;