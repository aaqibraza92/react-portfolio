import {GET_WORK_PORTFOLIO,WORK_PORTFOLIO_SUCCESS,WORK_PORTFOLIO_FAILURE} from "./actionTypes"


  let getWorkPortfolio = [];
  const salonWorkPortfolio = (state = getWorkPortfolio, { type, payload }) => {
    switch (type) {
      case WORK_PORTFOLIO_SUCCESS:
        return {
            getWorkPortfolio: payload,
        };
      default:
        return state;
    }
  };
  
  export default salonWorkPortfolio;
  