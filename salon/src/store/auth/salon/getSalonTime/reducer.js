import {GET_SALON_TIME,GET_SALON_TIME_SUCCESS,GET_SALON_TIME_FAILURE} from "./actionsTypes"

let getSalonTimeState = [];
const redGetSalonTime = (state = getSalonTimeState, { type, payload }) => {
  switch (type) {
    case GET_SALON_TIME_SUCCESS:
      return {
        getSalonTimeState: payload,
      };
    default:
      return state;
  }
};

export default redGetSalonTime;
