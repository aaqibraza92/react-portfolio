import { post, del, get, put } from "../api_helper";
import * as url from "../apiurls/admin";

export const adminApprovedSalonList = data=> post(url.ADMIN_SALON_APPROVEDLIST,data)
export const adminSalonUpdateStatus = data=> post(url.ADMIN_SALON_UPDATESTATUS,data)
export const adminGetCategoryList = data=> post(url.ADMIN_GET_CATEGORY_LIST,data)
export const adminGetServiceList = data=> get(url.ADMIN_GET_SERVICE_LIST,data)
export const adminGetSalonProfileInfo = data=> post(url.ADMIN_GET_SALON_PROFILEINFO,data)
export const adminPostSalonRegistration = (data)=> post(url.ADMIN_POST_SALON_REGISTRATION,data)
export const adminGetSalonUserInfo = (data)=> post(url.ADMIN_GET_SALON_USERINFO,data)
export const adminSalonUserInfoUpdate = (data)=> post(url.ADMIN_SALON_USERINFO_UPDATE,data)
export const adminMembershipList = (data)=> post(url.ADMIN_MEMBERSHIP_LIST,data)
export const adminPostMembership = (data)=> post(url.ADMIN_POST_MEMBERSHIP,data)
export const adminUpdateMembership = (data)=> post(url.ADMIN_UPDATE_MEMBERSHIP,data)
export const adminDeleteMembership = (data)=> post(url.ADMIN_DELETE_MEMBERSHIP,data)
export const adminMembershipAddonsList = (data)=> post(url.ADMIN_MEMBERSHIPADDON_LIST,data)
export const adminMembershipAddonsCreate = (data)=> post(url.ADMIN_MEMBERSHIPADDON_CREATE,data)
export const adminMembershipAddonsUpdate = (data)=> post(url.ADMIN_MEMBERSHIPADDON_UPDATE,data)

//Aminities
export const adminGetAminities = (data)=> post(url.ADMIN_GET_AMINITIES,data)
export const adminCreateAminities = (data)=> post(url.ADMIN_CREATE_AMENITIES,data)

//Language
export const adminGetLanguage = (data)=> get(url.ADMIN_GET_LANGUAGE,data)

//Customer
export const adminGetCustomer = (data)=> post(url.ADMIN_GET_CUSTOMER,data)

//Service Group 
export const adminGetServiceGroup = (data)=> post(url.ADMIN_GET_SERVICE_GROUP_LIST,data)
export const adminCreateCategory = (data)=> post(url.ADMIN_CREATE_CATEGORY,data)
export const adminDeleteService = (data)=> post(url.ADMIN_DELETE_SERVICE,data)
export const adminUpdateServiceGroup = (data)=> post(url.ADMIN_UPDATE_SERVICE_GROUP,data)

//Get GiftCard
export const adminGetGiftCard = (data)=> post(url.ADMIN_GET_GIFTCARD_LIST,data)
export const adminUpdateGiftCard = (data)=> post(url.ADMIN_UPDATE_GIFT_CARD,data)

//Get Award
export const adminGetAward = (data)=> post(url.ADMIN_GET_AWARDS_LIST,data)
//Get Country
export const adminGetCountry = (data)=> post(url.ADMIN_GET_AWARDS_LIST,data)
//Get Country
export const adminGetCms = (data)=> post(url.ADMIN_GET_CMS_LIST,data)
//GiftCard
export const adminPostgiftcard = (data)=> post(url.ADMIN_GIFTCARD_CREATE,data)
//All Category List
export const adminallcategorylist = (data)=> get(url.ADMIN_GET_ALL_CATEGORY_LIST,data)