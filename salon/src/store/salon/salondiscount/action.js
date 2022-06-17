import {
   SALON_DISCOUNT,
    SALON_DISCOUNT_SUCCESS,
    SALON_DISCOUNT_FAILURE
  } from "./actionTypes"
  import { getSalonDiscountList } from '../../../helpers/backend/salon'

export const getSalonDiscount = () => {
    return (dispatch) => {
      dispatch({ type: SALON_DISCOUNT });
      getSalonDiscountList().then(async(response) => { 
        if(response.status === 200)
        {
          dispatch({ type: SALON_DISCOUNT_SUCCESS, payload : response.data });
        }
        else{
          var error = response.message
          dispatch({ type: SALON_DISCOUNT_FAILURE, error });
        }
        
        },
          error => {
            dispatch({ type: SALON_DISCOUNT_FAILURE, error });
          }
        );
    }
  }