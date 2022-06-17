import {GET_MEMBERSHIP_ADDON_LIST,GET_MEMBERSHIP_ADDON_SUCCESS,GET_MEMBERSHIP_ADDON_FAILURE} from "./actionTypes"


  let getMembershipAddon = [];
  const RedMembershipAddon = (state = getMembershipAddon, { type, payload }) => {
    switch (type) {
      case GET_MEMBERSHIP_ADDON_SUCCESS:
        return {
          getMembershipAddon: payload,
        };
      default:
        return state;
    }
  };
  
  export default RedMembershipAddon;
  