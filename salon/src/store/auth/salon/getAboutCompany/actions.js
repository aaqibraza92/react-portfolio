import { getAboutCompany } from "../../../../helpers/backend";
import {GET_ABOUT_COMPANY,ABOUT_COMPANY_SUCCESS,ABOUT_COMPANY_FAILURE} from "./actionTypes"


export const AuthGetAboutComp=()=>{
    return(dispatch)=>{
        dispatch({
            type: GET_ABOUT_COMPANY
        });
        getAboutCompany().then((res)=>{
            if(res && res.status===200){

                dispatch({ type: ABOUT_COMPANY_SUCCESS, payload : res.data });
            }
            if(res && res.status===201){
                dispatch({ type: ABOUT_COMPANY_FAILURE, payload : res });
            }
        })
      
    }
}