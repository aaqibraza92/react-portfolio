import {GET_TEAM_MEM_SERVICES,GET_TEAM_MEM_SERVICES_SUCCESS,GET_TEAM_MEM_SERVICES_FAILURE} from "./actionTypes"


  let getTeamMemberService = [];
  const getTeamMemberServiceRedux = (state = getTeamMemberService, { type, payload }) => {
    switch (type) {
      case GET_TEAM_MEM_SERVICES_SUCCESS:
        return {
          getTeamMemberService: payload,
        };
      default:
        return state;
    }
  };
  
  export default getTeamMemberServiceRedux;
  