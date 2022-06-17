import {SERVICE_LISTS_GET,SERVICE_LISTS_SUCCESS,SERVICE_LISTS_FAILURE} from "./actionsTypes"

let salonServiceallList = [];
const redsalonServiceList=(state=salonServiceallList,{type,payload})=>{
    switch(type){
        case SERVICE_LISTS_SUCCESS:
        return {
            salonServiceallList:  payload,
        };
        default: 
        return state;
    }
}

export default redsalonServiceList;