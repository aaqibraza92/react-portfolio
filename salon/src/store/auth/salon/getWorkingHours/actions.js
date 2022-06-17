import { getWorkingHours } from "../../../../helpers/backend";
import {GET_WORKING_HOURS,WORKING_HOURS_SUCCESS,WORKING_HOURS_FAILURE} from "./actionTypes"


export const AuthGetWorkingHours=()=>{
    return(dispatch)=>{
        dispatch({
            type: GET_WORKING_HOURS
        });
        getWorkingHours().then((res)=>{
            if(res && res.status===200){

                dispatch({ type: WORKING_HOURS_SUCCESS, payload : res.data });
            }
            if(res && res.status===201){
                dispatch({ type: WORKING_HOURS_FAILURE, payload : res });
            }
        })
      
    }
}