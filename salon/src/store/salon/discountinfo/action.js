import {
    DISCOUNT_INFO,
    DISCOUNT_INFO_SUCCESS,
    DISCOUNT_INFO_FAILURE
  } from "./actionTypes"
  import { getSalonDiscountInfo } from '../../../helpers/backend/salon'


export const getDiscountInfo = (data) => {
    return (dispatch) => {
      dispatch({ type: DISCOUNT_INFO });
      getSalonDiscountInfo(data).then(async(response) => { 
        if(response.status === 200)
        {
          dispatch({ type: DISCOUNT_INFO_SUCCESS, payload : response.data[0] });
        }
        else{
          var error = response.message
          dispatch({ type: DISCOUNT_INFO_FAILURE, error });
        }
        
        },
          error => {
            dispatch({ type: DISCOUNT_INFO_FAILURE, error });
          }
        );
    }
  }