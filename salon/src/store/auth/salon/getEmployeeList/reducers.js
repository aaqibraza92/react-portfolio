import {GET_EMPLOYEE_LIST,GET_EMPLOYEE_LIST_SUCCESS,GET_EMPLOYEE_LIST_FAILURE} from "./actionTypes"


  let getEmployeeLIst = [];
  const RedGetEmployeeList = (state = getEmployeeLIst, { type, payload }) => {
    switch (type) {
      case GET_EMPLOYEE_LIST_SUCCESS:
        return {
          getEmployeeLIst: payload,
        };
      default:
        return state;
    }
  };
  
  export default RedGetEmployeeList;
  