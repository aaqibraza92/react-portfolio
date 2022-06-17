import {GET_WORKING_HOURS,WORKING_HOURS_SUCCESS,WORKING_HOURS_FAILURE} from "./actionTypes"


  let getWorkingHours = [];
  const redGetWorkingHours = (state = getWorkingHours, { type, payload }) => {
    switch (type) {
      case WORKING_HOURS_SUCCESS:
        return {
            getWorkingHours: payload,
        };
      default:
        return state;
    }
  };
  
  export default redGetWorkingHours;
  