let initialCartState = {
    cart: []
};
  
const CartReducer = (state = initialCartState, action) => {
    let { type, payload } = action;
    switch (type) {
      case 'addToCart':
        console.log('9 cart',payload);
        console.log('10 cart',payload.inStock > 0);
          if(!state.cart.includes(payload) && payload.inStock > 0)
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
        console.log('20 store cart',state);
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
