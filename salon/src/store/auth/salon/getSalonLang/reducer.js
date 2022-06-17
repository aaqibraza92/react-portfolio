import {
  GET_SALON_LANG,
  GET_SALON_LANG_SUCCESS,
  GET_SALON_LANG_FAILURE,
} from "./actionsTypes";

let getSalonLang = [];
const redGetSalonLang = (state = getSalonLang, { type, payload }) => {
  switch (type) {
    case GET_SALON_LANG_SUCCESS:
      return {
        getSalonLang: payload,
      };
    default:
      return state;
  }
};

export default redGetSalonLang;
