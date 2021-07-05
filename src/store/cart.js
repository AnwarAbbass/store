let initialCartState = {
    cart: []
};
  
const CartReducer = (state = initialCartState, action) => {
    let { type, payload } = action;
    console.log('7 cart',payload,initialCartState);
    switch (type) {
      case "addToCart":
          if(state.cart.includes(payload)) state.cart.push(payload)
        return {
          cart: state.cart
        };
        case "remove":
            return {
              cart: state.cart.filter(item=>item.name !== payload.name)
            };
      default:
        console.log('20 storefront catigories',state);
        return state;
    }
  };
  
export const addToCart = (cart) => {
    return {
      type: "addToCart",
      payload: cart,
    };
};

export const removeFromCart = (cart) => {
    return {
      type: "remove",
      payload: cart,
    };
};
  
  export default CartReducer;
  