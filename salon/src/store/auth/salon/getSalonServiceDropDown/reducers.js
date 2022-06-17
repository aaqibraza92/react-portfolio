import {SERVICE_DROPDOWN_LIST,SERVICE_DROPDOWN_SUCCESS,SERVICE_DROPDOWN_FAILURE} from "./actionsTypes"

let salonServiceallList = [];
const getServiceItems=(state=salonServiceallList,{type,payload})=>{
    switch(type){
        case SERVICE_DROPDOWN_SUCCESS:
        return {
            salonServiceallList:  payload,
        };
        default: 
        return state;
    }
}

export default getServiceItems;