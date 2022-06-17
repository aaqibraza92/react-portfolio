import {GET_SALON_SERVICES_LISTS,GET_SALON_SERVICES_LISTS_SUCCESS,GET_SALON_SERVICES_LISTS_FAILURE} from "./actionsTypes"

let salonServiceGrpList = [];
const RedSalonServiceGrpList=(state=salonServiceGrpList,{type,payload})=>{
    switch(type){
        case GET_SALON_SERVICES_LISTS_SUCCESS:
        return {
            salonServiceGrpList:  payload,
        };
        default: 
        return state;
    }
}

export default RedSalonServiceGrpList;