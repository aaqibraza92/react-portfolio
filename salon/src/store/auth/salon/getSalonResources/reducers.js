import {GET_SALON_RESOURCES,SALON_RESOURCES_SUCCESS,SALON_RESOURCES_FAILURE} from "./actionTypes"


  let getSalonResources = [];
  const GetSalonResourcesRedux = (state = getSalonResources, { type, payload }) => {
    switch (type) {
      case SALON_RESOURCES_SUCCESS:
        return {
          getSalonResources: payload,
        };
      default:
        return state;
    }
  };
  
  export default GetSalonResourcesRedux;
  