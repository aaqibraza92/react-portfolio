import {MEMBERSHIP_RETRIEVE,MEMBERSHIP_RETREIVE_SUCCESS,MEMBERSHIP_RETREIVE_FAILURE} from "./actionsTypes"


  let allmembershipPlans = [];
  const salonMembershipsLists = (state = allmembershipPlans, { type, payload }) => {
    switch (type) {
      case MEMBERSHIP_RETREIVE_SUCCESS:
        return {
            allmembershipPlans: payload,
  
        };
      default:
        return state;
    }
  };
  
  export default salonMembershipsLists;
  