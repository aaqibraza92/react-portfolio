import { getEmployeeList } from "../../../../helpers/backend";
import {GET_EMPLOYEE_LIST,GET_EMPLOYEE_LIST_SUCCESS,GET_EMPLOYEE_LIST_FAILURE} from "./actionTypes"


export const AuthGetEmpList=(data,callback)=>{

    return(dispatch)=>{
        dispatch({
            type: GET_EMPLOYEE_LIST
        });
        getEmployeeList(data).then((res)=>{
            if(res && res.status===200){
                dispatch({ type: GET_EMPLOYEE_LIST_SUCCESS, payload : res.data });
            }
            if(res && res.status===201){
                dispatch({ type: GET_EMPLOYEE_LIST_FAILURE, payload : res });
            }

            callback({status : res.status , message : res.message })
        })
      
    }
}