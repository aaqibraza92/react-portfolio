import {ADD_PORTFOLIO,PORTFOLIO_SUBMIT_SUCCESS,PORTFOLIO_SUBMIT_FAILURE} from "./actionsTypes"


  let postPortfolio = [];
  const postPortfolioRedux = (state = postPortfolio, { type, payload }) => {
    switch (type) {
      case PORTFOLIO_SUBMIT_SUCCESS:
        return {
          postPortfolio: payload,
  
        };
      default:
        return state;
    }
  };
  
  export default postPortfolioRedux;
  