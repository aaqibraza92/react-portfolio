import {
  NAV_ITEMS,
  NAV_ITEMS_SUCCESS,
  NAV_ITEMS_ERROR
} from "./actionTypes"
import { getHeaderMenuList } from '../../helpers/backend/index'

export const headerNavItems = () => {
  return (dispatch) => {
    dispatch({ type: NAV_ITEMS });
    getHeaderMenuList()
      .then(async (response) => {
        if (response.status === 200) {
          dispatch({ type: NAV_ITEMS_SUCCESS, payload: response.data });
        }
        else {
          dispatch({ type: NAV_ITEMS_ERROR, payload: response.message });
        }
      },
        error => {
          dispatch({ type: NAV_ITEMS_ERROR, error });
        }
      );
  }
}
