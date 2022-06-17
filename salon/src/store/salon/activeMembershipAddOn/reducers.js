import {
  ACTIVE_MEM_ADDON,
  ACTIVE_MEM_ADDON_SUCCESS,
  ACTIVE_MEM_ADDON_FAILURE
  } from "./actionTypes"

const initialState = [];

const fetchActiveMembershipAddOn = (state = initialState, action) => 
{
  const { type, payload } = action;
  switch (type) {
    case ACTIVE_MEM_ADDON:
      return { data: payload };
    case ACTIVE_MEM_ADDON_SUCCESS:
        return payload;
    case ACTIVE_MEM_ADDON_FAILURE:
      return { error: payload };
    default:
      return state;
  }
}
export default fetchActiveMembershipAddOn



