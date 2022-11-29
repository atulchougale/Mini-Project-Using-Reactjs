import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";

const CartContext= createContext();

const getLocalcartData=()=>{
    let localCartData=localStorage.getItem("foodCart");
    if(localCartData===[]){
        return [];
    }else{
        return JSON.parse(localCartData);
    }
}

const initialState ={
    // cart :[],
    cart: getLocalcartData(),
    total_item : "",
    total_amount : "",
    shiping_fee : 50 ,
}

const CartProvider = ({children}) => {

    const [state, dispatch]=useReducer(reducer ,initialState);

    const addToCart = (id, amount, product) => {
        dispatch({type:"ADD_TO_CART",payload:{id, amount, product}})
    };

    // REmove the individual item from cart
    const removeItem =(id)=>{
        dispatch({type:"REMOVE_ITEM" , payload:id});
    };

    //to clrar cart
    const clearCart=()=>{
        dispatch({type:"CLEAR_CART"})
    }

    // to add the data in localstorage
    //get vs set
    useEffect(()=>{
        localStorage.setItem("foodCart",JSON.stringify(state.cart))
    },[state.cart])

    return <CartContext.Provider value={{...state , addToCart,removeItem,clearCart}}>{children}</CartContext.Provider>;
};

const useCartContext =  ()=>{
    return useContext(CartContext);
};

export {CartProvider,useCartContext};