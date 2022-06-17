import {GET_SALON_INVOICE,GET_SALON_INVOICE_SUCCESS,GET_SALON_INVOICE_FAILURE} from "./actionTypes"


  let getSalonInvoice = [];
  const RedGetSalonInvoice = (state = getSalonInvoice, { type, payload }) => {
    switch (type) {
      case GET_SALON_INVOICE_SUCCESS:
        return {
          getSalonInvoice: payload,
        };
      default:
        return state;
    }
  };
  
  export default RedGetSalonInvoice;
  