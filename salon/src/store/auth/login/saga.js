import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER} from "./actionTypes"
import { apiError, loginSuccess} from "./actions"


import { userLogin } from "../../../helpers/backend/index"



function* loginUser(user) {
  try {
    console.log('usersaga',user)
    const response = yield call(userLogin, {
        email: user.email,
        password: user.password,
      })
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
  } catch (error) {
    yield put(apiError(error))
  }
}

// function* logoutUser({ payload: { history } }) {
//   try {
//     localStorage.removeItem("authUser")
   
//   } catch (error) {
//     yield put(apiError(error))
//   }
// }

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  // yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
