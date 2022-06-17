import {
  DISCOUNT_LIST,
  DISCOUNT_LIST_SUCCESS,
  DISCOUNT_LIST_FAILURE
  } from "./actionTypes"
  import { getSalonDiscountList } from '../../../helpers/backend/salon'

export const getDiscounts = (data) => {
  return (dispatch) => {
    dispatch({ type: DISCOUNT_LIST });
    getSalonDiscountList(data).then(async(response) => { 
      if(response.status === 200)
      {
        dispatch({ type: DISCOUNT_LIST_SUCCESS, payload : response.data });
      }
      else{
        var error = response.message
        dispatch({ type: DISCOUNT_LIST_FAILURE, error });
      }
      
      },
        error => {
          dispatch({ type: DISCOUNT_LIST_FAILURE, error });
        }
      );
  }
}