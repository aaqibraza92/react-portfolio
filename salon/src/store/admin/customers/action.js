import {
   CUSTOMER_LIST,
    CUSTOMER_LIST_SUCCESS,
    CUSTOMER_LIST_FAILURE
  } from "./actionTypes"
  import { adminGetCustomer } from '../../../helpers/backend/admin'


export const postCustomerList = (data) => {
    return (dispatch) => {
      dispatch({ type: CUSTOMER_LIST });
      adminGetCustomer(data).then(async(response) => { 
        if(response.status === 200)
        {
          dispatch({ type: CUSTOMER_LIST_SUCCESS, payload : response });
        }
        else{
          var error = response.message
          dispatch({ type: CUSTOMER_LIST_FAILURE, error });
        }
        
        },
          error => {
            dispatch({ type: CUSTOMER_LIST_FAILURE, error });
          }
        );
    }
  }