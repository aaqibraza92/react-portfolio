import { addWorkPortfolio } from "../../../../helpers/backend";
import {ADD_PORTFOLIO,PORTFOLIO_SUBMIT_SUCCESS,PORTFOLIO_SUBMIT_FAILURE} from "./actionsTypes"


export const AuthPostPortfolio=(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: ADD_PORTFOLIO
        });
        addWorkPortfolio(data).then((res)=>{
            console.log("rrr",res);
            if(res && res.status===200){
                dispatch({ type: PORTFOLIO_SUBMIT_SUCCESS, payload : res });
            }
            if(res && res.status===201){
                dispatch({ type: PORTFOLIO_SUBMIT_FAILURE, payload : res });
            }

            callback({status : res.status , message : res.message })
        })
      
    }
}