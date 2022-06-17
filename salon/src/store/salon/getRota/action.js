import { GET_ROTA, GET_ROTA_SUCCESS, GET_ROTA_FAILURE } from "./actionTypes";
  import { getRota } from '../../../helpers/backend/salon'


export const getSalonRota = () => {
    return (dispatch) => {
      dispatch({ type: GET_ROTA });
      getRota().then(async(response) => { 
        console.log(response)
        if(response.status === 200)
        {
          dispatch({ type: GET_ROTA_SUCCESS, payload : response.data });
        }
        else{
          var error = response.message
          dispatch({ type: GET_ROTA_FAILURE, error });
        }
        
        },
          error => {
            dispatch({ type: GET_ROTA_FAILURE, error });
          }
        );
    }
  }