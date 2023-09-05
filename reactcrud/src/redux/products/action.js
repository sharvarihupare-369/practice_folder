import axios from "axios"
import {  GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"

export const postProduct = (newProduct) => (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})
  axios.post("http://localhost:8080/products",newProduct).then((res)=>{
    // console.log(res)
    dispatch({type:POST_PRODUCT_SUCCESS, payload:res.data})
  }).catch(err=>{
    // console.log(err)
    dispatch({type:PRODUCT_FAILURE})
  })
}

export const getProducts = (obj) => (dispatch) => {
  dispatch({type:PRODUCT_REQUEST})
   axios.get("http://localhost:8080/products",obj).then((res)=>{
    // console.log(res)
    dispatch({type:GET_PRODUCT_SUCCESS, payload:res.data})
  }).catch(err=>{
    // console.log(err)
    dispatch({type:PRODUCT_FAILURE})
  })
}

export const editPrice = (id,data) => (dispatch) => {
   dispatch({type:PRODUCT_REQUEST})
  return axios.patch(`http://localhost:8080/products/${id}`,data).then((res)=>{
    console.log(res)
    dispatch({type:PATCH_PRODUCT_SUCCESS})
   }).catch((err)=>{
    dispatch({type:PRODUCT_FAILURE})
   })
}