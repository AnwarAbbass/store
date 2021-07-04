import React from "react";
import { connect } from "react-redux";

function Products(props) {

    return (
        <>
            <ul>
                {props.product.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <img alt="item" src={item.image} />
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
            </ul>
        </>
    );
}

const mapStateToProps = (state) => ({
    product: state.ProductReducer.productsList,
    categories: state.CategoryReducer.categories,
});

export default connect(mapStateToProps)(Products);