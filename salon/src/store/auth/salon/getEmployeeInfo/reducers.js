import {GET_SALON_INFO_FETCH,SALON_INFO_FETCH_SUCCESS,SALON_INFO_FETCH_FAILURE} from "./actionTypes"


  let getEmployeeInfoStateRed = [];
  const getEmployeeInfoRedux = (state = getEmployeeInfoStateRed, { type, payload }) => {
    switch (type) {
      case SALON_INFO_FETCH_SUCCESS:
        return {
          getEmployeeInfoStateRed: payload,
        };
      default:
        return state;
    }
  };
  
  export default getEmployeeInfoRedux;
  