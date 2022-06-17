import { AUTH_PROFILE, AUTH_PROFILE_SUCCESS, AUTH_PROFILE_ERROR   } from "./actionTypes"

const initialState = {
  error: "",
  authInfo: "",
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_PROFILE:
      state = { ...state }
      break
    case AUTH_PROFILE_SUCCESS:
      state = { ...state, authInfo: action.payload }
      break
    case AUTH_PROFILE_ERROR:
      state = { ...state, error: action.payload }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default profile
