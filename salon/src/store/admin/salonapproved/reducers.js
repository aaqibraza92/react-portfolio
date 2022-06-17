import { ADMIN_APPROVED_SALON_LISTS, ADMIN_APPROVED_SALON_SUCCESS, ADMIN_APPROVED_SALON_FAILURE } from "./actionTypes";

const initialState = {};

const ApprovedSalonReducer = (state = initialState, action) => 
{
  const { type, payload } = action;

  switch (type) {
    case ADMIN_APPROVED_SALON_LISTS:
      return { data: payload };
    case ADMIN_APPROVED_SALON_SUCCESS:
        return { salonlist: payload };
    case ADMIN_APPROVED_SALON_FAILURE:
      return { message: payload };
    default:
      return state;
  }
}
export default ApprovedSalonReducer



