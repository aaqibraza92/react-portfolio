import { ADMIN_GET_SERVICE_GROUP_SUCCESS} from "./actionTypes";

const initialAuthState = null;

const GetServiceGroup = (state = initialAuthState, { type, payload }) => {
  switch (type) {
    case ADMIN_GET_SERVICE_GROUP_SUCCESS:
      return {servicegroup : payload,
      }
    default:
      return state;
  }
};

export default GetServiceGroup



