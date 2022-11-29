

const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART"){
        let {id, amount, product} = action.payload;
        // console.log(product)

        let cartProduct;
        cartProduct = {
            id,
            name : product.name,
            amount,
            image :product.image,
            price:product.price,
            max :product.quantity,

        }
 
    return {
        ...state,
        cart : [...state.cart, cartProduct],
    };
    };

    if(action.type === "REMOVE_ITEM" ){
        let updatedCart =state.cart.filter(
            (curItem)=>curItem.id !== action.payload
        );
        return{
            ...state,
            cart:updatedCart,
        };
    };

    //to empry or clear cart

    if(action.type==="CLEAR_CART"){
        return {
            ...state,
            cart :[],
        }
    }

    return state;
}

export default CartReducer