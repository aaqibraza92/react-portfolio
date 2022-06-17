import { getSalonAmenities } from "../../../../helpers/backend";
import {GET_SALON_AMENITIES,SALON_AMENITIES_SUCCESS,SALON_AMENITIES_FAILURE} from "./actionTypes"


export const AuthGetSalonAmenities=(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: GET_SALON_AMENITIES
        });
        getSalonAmenities(data).then((res)=>{
            if(res && res.status===200){
                dispatch({ type: SALON_AMENITIES_SUCCESS, payload : res.data });
            }
            if(res && res.status===201){
                dispatch({ type: SALON_AMENITIES_FAILURE, payload : res });
            }

            callback({status : res.status , message : res.message })
        })
      
    }
}