import { NAV_ITEMS, NAV_ITEMS_SUCCESS, NAV_ITEMS_ERROR   } from "./actionTypes"

const initialState = {
  error: "",
  navitems: [],
}

const Navitems = (state = initialState, action) => {
  switch (action.type) {
    case NAV_ITEMS:
      state = { ...state }
      break
    case NAV_ITEMS_SUCCESS:
      state = { ...state, navitems: action.payload }
      break
    case NAV_ITEMS_ERROR:
      state = { ...state, error: action.payload }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default Navitems
