import React, { useReducer } from 'react';
import productReducer from '../components/Reducer/productReducer';


const useFilter = () => {
    const [productState,productDispatch] =useReducer(productReducer,{
        byRating:0,
        searchQuery: "",
      })
    
      return [productState,productDispatch];
};


export default useFilter;