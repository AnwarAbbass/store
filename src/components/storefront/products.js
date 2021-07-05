import React from "react";
import { connect } from "react-redux";

function Products(props) {
console.log('5 storefront product',props);
    if (props.product) 
    {return (
        <>
            <div>
                <h3>{console.log('xxxx',props.categories)} {props.categories.displayName}</h3>
            </div>
            {console.log('13 product storefront',props)}
            {props.product.map((item, idx) => {
                    return (
                        <li key={idx}>
                            {/* <img alt="item" src={item.image} /> */}
                            {console.log('pppppp',item)}
                            {item.name}
                            {item.price}$
                            <button>
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

export default connect(mapStateToProps)(Products);
