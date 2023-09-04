import axios from "axios"
import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionTypes"

export const postProduct = (newProduct) => (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})
  axios.post("http://localhost:8080/products",newProduct).then((res)=>{
    console.log(res)
    dispatch({type:PRODUCT_SUCCESS, payload:res.data})
  }).catch(err=>{
    console.log(err)
    dispatch({type:PRODUCT_FAILURE})
  })
}