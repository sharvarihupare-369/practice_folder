import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionTypes";

const initialState = {
    products : [],
    isLoading : false,
    isError : false
}


export const reducer = (state=initialState,{type,payload}) => {
    switch(type){
        case PRODUCT_REQUEST : {
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case PRODUCT_FAILURE : {
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case PRODUCT_SUCCESS : {
            return {
                ...state,
                isLoading:false,
                isError:false,
                products: [...state.products,payload]
            }
        }
        default : 
            return state;
    }
}