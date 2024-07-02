import axios from "axios"
import { ADD_CART, ADD_PRODUCT, GET_CART, GET_PRODUCT, LOGIN, LOGOUT, REMOVE_PRODUCT, SIGN_UP, SINGLE_PRODUCT } from "./actiontype"

export const Log_in=(data)=>async(dispatch)=>{
    let user=await axios.get(`http://localhost:8090/users?usermail=${data.usermail}&userpass=${data.userpass}`,)
    dispatch({
        type:LOGIN,
        payload:user.data[0]
    })
}
export const Sign_up=(data)=>async(dispatch)=>{
    let user=await axios.post(`http://localhost:8090/users`,data)
    dispatch({
        type:SIGN_UP,
        payload:user.data
    })
}

export const Logout=()=>{
    return{
        type:LOGOUT
    }
}

// product 

export const Add_Product=(data)=>async(dispatch)=>{
    let user=await axios.post(`http://localhost:8090/product`,data)
    dispatch({
        type:ADD_PRODUCT,
        payload:user.data
    })
}

export const Get_Product=(data)=>async(dispatch)=>{
    let user=await axios.get(`http://localhost:8090/product`)
    dispatch({
        type:GET_PRODUCT,
        payload:user.data
    })
}

// single product

export const Single_Product = (id) => async (dispatch) => {
    let res = await axios.get(`http://localhost:8090/product/${id}`);
    dispatch({
      type: SINGLE_PRODUCT,
      payload: res.data,
    });
  };
  
  export const Add_Cart = (data) => async (dispatch) => {
    let res = await axios.post(" http://localhost:8090/cart", data);
  
    dispatch({
      type: ADD_CART,
      payload: res.data,
    });
  };
  
  
  
  export const Get_Cart = () => async (dispatch) => {
    let res = await axios.get("http://localhost:8090/cart");
    dispatch({
      type: GET_CART,
      payload: res.data,
    });
  };
  
  
  
  
  export const Remove_Product = (id) => async (dispatch) => {
    let res = await axios.delete(`http://localhost:8090/cart/${id}`);
    dispatch({
      type: REMOVE_PRODUCT,
      payload: id,
    });
  };