// import { ListItemAvatar } from "@material-ui/core";

let initialProductState = {
    products: [
        {
            categoryAssociation: "food",
            name: "Pizza",
            description: "",
            price: 10,
            inventoryCount: 5,
        },
        {
            categoryAssociation: "food",
            name: "rose",
            description: "",
            price: 5,
            inventoryCount: 5,
        },
        {
            categoryAssociation: "food",
            name: "milk",
            description: "",
            price: 5,
            inventoryCount: 5,
        },
        {
            categoryAssociation: "electronic",
            name: "Nokia",
            description: "",
            price: 800,
            inventoryCount: 5,
        },
        {
            categoryAssociation: "electronic",
            name: "HP",
            description: "",
            price: 400,
            inventoryCount: 5,
        },
        {
            categoryAssociation: "electronic",
            name: "Lenovo",
            description: "",
            price: 1000,
            inventoryCount: 5,
        },
      
    ],
};

const ProductReducer =(state = initialProductState,action)=>{
    let {type,payload}=action;
    switch (type) {
        case 'active':
            // console.log('state.products',payload,state.products);
            // console.log('56 storefront product',List);
            let List= state.products.filter(item=> item.categoryAssociation===payload);
            return { products: state.products, List: List };    
        default:
            // console.log('59 storefront product',state);
            return state;
    }
}

export default ProductReducer;
