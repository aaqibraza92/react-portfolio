import { getSalonProducts } from "../../../../helpers/backend/salon";
import {GET_SALON_PRODUCT_LIST,GET_SALON_PRODUCT_LIST_SUCCESS,GET_SALON_PRODUCT_LIST_FAILURE} from "./actionTypes"


export const AuthGetSalonProductList=(data,callback)=>{

    return(dispatch)=>{
        dispatch({
            type: GET_SALON_PRODUCT_LIST
        });
        getSalonProducts(data).then((res)=>{
            console.log("Responseproductsalon >>>>",res)
            if(res && res.status===200){
                dispatch({ type: GET_SALON_PRODUCT_LIST_SUCCESS, payload : res.data });
            }
            else{
                var error = res.message
                dispatch({ type: GET_SALON_PRODUCT_LIST_FAILURE, error });
              }

            // if(res && res.status===201){
            //     dispatch({ type: GET_SALON_PRODUCT_LIST_FAILURE, payload : res });
            // }

            // callback({status : res.status , message : res.message })
        })
      
    }
}