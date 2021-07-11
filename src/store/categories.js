let initialState = {
  categories: [
    { normalizedName: "food", displayName: "Food", description: "sdesdsdsdsddsdsd" },
    { normalizedName: "electronic", displayName: "Electronics", description: "asdasdasdasdasd", },],
};

const CatigoryReducer = (state = initialState, action) => {
  let { type, payload } = action;
  // console.log('9 storefront catigories',payload,initialState);
  switch (type) {
    case "active":
      let cat =state.categories.filter(cat => cat.normalizedName === payload)
      // console.log('13 storefront catigories',cat);
      return {
        categories: state.categories,
        cat:cat[0]
      };

    default:
      // console.log('20  catigories',state);
      return state;
  }
};

export const active = (category) => {
  return {
    type: "active",
    payload: category,
  };
};

export default CatigoryReducer;
