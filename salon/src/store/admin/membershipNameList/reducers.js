import {GET_MEMBERSHIP_LISTS,GET_MEMBERSHIP_SUCCESS,GET_MEMBERSHIP_FAILURE} from "./actionTypes"


  let getMembershipLists = [];
  const getMembershipListsRedux = (state = getMembershipLists, { type, payload }) => {
    switch (type) {
      case GET_MEMBERSHIP_SUCCESS:
        return {
          getMembershipLists: payload,
        };
      default:
        return state;
    }
  };
  
  export default getMembershipListsRedux;
  