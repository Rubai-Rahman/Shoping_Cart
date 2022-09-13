import React from "react";

const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE": {
      return {
        ...state,
        sort: action.payload,
      };
    }
   
    case "FILTER_BY_RATING": {
      return {
        ...state,byRating:action.payload
      };
    }
    case "FILTER_BY_SEARCH": {
      return {
        ...state,searchQuery:action.payload
      };
    }
    case "CLEAR_FILTERS": {
      return {
        byRating:0,
        searchQuery: "",
      };
    }
    default:
      return state;
  }
};

export default productReducer;
