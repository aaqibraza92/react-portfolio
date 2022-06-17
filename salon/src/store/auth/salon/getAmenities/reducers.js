import {GET_SALON_AMENITIES,SALON_AMENITIES_SUCCESS,SALON_AMENITIES_FAILURE} from "./actionTypes"


  let getSalonAmenities = [];
  const getSalonAmenitiesRedux = (state = getSalonAmenities, { type, payload }) => {
    switch (type) {
      case SALON_AMENITIES_SUCCESS:
        return {
          getSalonAmenities: payload,
        };
      default:
        return state;
    }
  };
  
  export default getSalonAmenitiesRedux;
  