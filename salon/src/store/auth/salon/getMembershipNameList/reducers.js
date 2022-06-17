import {GET_SALON_AMENITIES,GET_MEMBERSHIP_SUCCESS,GET_MEMBERSHIP_FAILURE} from "./actionTypes"


  let getMembershipNames = [];
  const RedMembershipNamesList = (state = getMembershipNames, { type, payload }) => {
    switch (type) {
      case GET_MEMBERSHIP_SUCCESS:
        return {
          getMembershipNames: payload,
        };
      default:
        return state;
    }
  };
  
  export default RedMembershipNamesList;
  