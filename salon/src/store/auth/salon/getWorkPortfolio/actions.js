import { getWorkPortfolio } from "../../../../helpers/backend";
import {GET_WORK_PORTFOLIO,WORK_PORTFOLIO_SUCCESS,WORK_PORTFOLIO_FAILURE} from "./actionTypes"


export const AuthGetWorkPortfolio=(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: GET_WORK_PORTFOLIO
        });
        getWorkPortfolio(data).then((res)=>{
            if(res && res.status===200){
                dispatch({ type: WORK_PORTFOLIO_SUCCESS, payload : res });
            }
            if(res && res.status===201){
                dispatch({ type: WORK_PORTFOLIO_FAILURE, payload : res });
            }

            callback({status : res.status , message : res.message })
        })
      
    }
}