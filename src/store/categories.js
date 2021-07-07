let initialState = {
  categories: [
    { normalizedName: "food", displayName: "Food", description: "sdesdsdsdsddsdsd" },
    { normalizedName: "electronic", displayName: "Electronics", description: "asdasdasdasdasd", },],
};

const CatigoryReducer = (state = initialState, action) => {
  let { type, payload } = action;
  console.log('9 storefront catigories',payload,type);
  switch (type) {
    case "active":
      let cat =state.categories.filter(cat => cat.normalizedName === payload.results.category)
      console.log('13 storefront catigories',cat);
      return {
        categories: state.categories,
        cat:cat[0]
      };

    case 'get':
      let result=payload.results[0].category;
      console.log('21 storefront catigories',result);

      return {
        categories: state.categories,
        cat: result,
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

export const get = (category) => {
  return {
    type: "get",
    payload: category,
  };
};
export default CatigoryReducer;
