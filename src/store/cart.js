let initialCartState = {
    cart: []
};
  
const CartReducer = (state = initialCartState, action) => {
    let { type, payload } = action;
    console.log('7 cart',payload);
    switch (type) {
      case 'addToCart':
        console.log('10 cart',state.cart.includes(payload),payload.inventoryCount > 0);
          if(!state.cart.includes(payload) && payload.inventoryCount > 0)
          { 
            return{...state,cart:[...state.cart,payload],
            inventoryCount:payload.inventoryCount--,}
          }else{
            return{...state,cart:[...state.cart],}
          }
        case 'remove':
            return {
              cart: state.cart.filter(item=>item.name !== payload.name),
              inventoryCount:payload.inventoryCount++,
            };
      default:
        console.log('20 storefront cart',state);
        return state;
    }
};
  
export const addToCart = (cart) => {
    return {
      type: 'addToCart',
      payload: cart,
    };
};

export const removeFromCart = (cart) => {
    return {
      type: 'remove',
      payload: cart,
    };
};
  
export default CartReducer;
