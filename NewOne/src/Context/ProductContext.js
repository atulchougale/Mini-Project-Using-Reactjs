import axios from "axios";
import { useContext ,createContext,useEffect, useReducer} from "react";
import reducer from "../Reducer/ProductReducer"

const AppContext = createContext();

const API ="https://6381eefa9842ca8d3c9d0014.mockapi.io/foodiis";

const initialstate={
    isLoading:false,
    isError:false,
    products:[],
    mostOrdered:[],
    isSingleLoading: false,
    singleProduct: {},
};


const AppProvider = ({children}) =>{

    const [state,dispatch]=useReducer(reducer,initialstate)

    const getProducts=async(url)=>{
        dispatch({type:"SET_LOADING"});
        try{
            const res= await axios.get(url);
        const products =await res.data;
        dispatch({type:"SET_API_DATA" , payload:products});
    }catch(error){
        dispatch({type:"API_ERROR"});
    }

    };


    // my 2nd api call for single product

   
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

    useEffect(()=>{
        getProducts(API);
    }, []);



return (
<AppContext.Provider value={{ ...state, getSingleProduct }}>
    {children}
</AppContext.Provider>
);
};

// custom hooks

const useProductContext=()=>{
    return useContext(AppContext);
}

export { AppProvider,AppContext,useProductContext };