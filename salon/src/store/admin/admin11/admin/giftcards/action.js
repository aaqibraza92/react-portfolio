import {
   GIFTCARD_LIST,
    GIFTCARD_LIST_SUCCESS,
    GIFTCARD_LIST_FAILURE
  } from "./actionTypes"
  import { adminGetGiftCard } from '../../../helpers/backend/admin'


export const giftcardsList = (data) => {
    return (dispatch) => {
      dispatch({ type: GIFTCARD_LIST });
      adminGetGiftCard(data).then(async(response) => { 
        if(response.status === 200)
        {
          dispatch({ type: GIFTCARD_LIST_SUCCESS, payload : response });
        }
        else{
          var error = response.message
          dispatch({ type: GIFTCARD_LIST_FAILURE, error });
        }
        
        },
          error => {
            dispatch({ type: GIFTCARD_LIST_FAILURE, error });
          }
        );
    }
  }