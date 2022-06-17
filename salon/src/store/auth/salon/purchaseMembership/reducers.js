import {MEMBERSHIP_PURCHASE_GET,MEMBERSHIP_PURCHASE_SUCCESS,MEMBERSHIP_PURCHASE_FAILURE} from "./actionsTypes"

let salonPurchaseMembership = [];
const salonPurchaseLists=(state=salonPurchaseMembership,{type,payload})=>{
    switch(type){
        case MEMBERSHIP_PURCHASE_SUCCESS:
        return {
            salonPurchaseMembership:  payload,
        };
        default: 
        return state;
    }
}

export default salonPurchaseLists;