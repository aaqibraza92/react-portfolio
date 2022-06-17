import {
   SALON_TEAM,
    SALON_TEAM_SUCCESS,
    SALON_TEAM_FAILURE
  } from "./actionTypes"
  import { getSalonEmployeeDropDown } from '../../../helpers/backend/salon'


export const getSalonTeams = () => {
    return (dispatch) => {
      dispatch({ type: SALON_TEAM });
      getSalonEmployeeDropDown().then(async(response) => { 
        console.log(response)
        if(response.status === 200)
        {
          dispatch({ type: SALON_TEAM_SUCCESS, payload : response.data });
        }
        else{
          var error = response.message
          dispatch({ type: SALON_TEAM_FAILURE, error });
        }
        
        },
          error => {
            dispatch({ type: SALON_TEAM_FAILURE, error });
          }
        );
    }
  }