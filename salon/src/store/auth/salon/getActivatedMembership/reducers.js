import {GET_ACTIVATED_MEMBERSHIP_LIST,GET_ACTIVATED_MEMBERSHIP_SUCCESS,GET_ACTIVATED_MEMBERSHIP_FAILURE} from "./actionTypes"


  let getActivatedMembership = [];
  const RedActivatedMembership = (state = getActivatedMembership, { type, payload }) => {
    switch (type) {
      case GET_ACTIVATED_MEMBERSHIP_SUCCESS:
        return {
          getActivatedMembership: payload,
        };
      default:
        return state;
    }
  };
  
  export default RedActivatedMembership;
  