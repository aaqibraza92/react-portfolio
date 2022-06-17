import { combineReducers } from "redux";

import auth from "./auth/login/reducer";
import message from "./resmessage/reducer";
import usersignup from "./auth/signup/reducer";
import salonRequestedLists from "./admin/salonrequested/reducers";
import authInfo from "./auth/profile/reducer";
import navitems from "./navitems/reducer";
import salonMembershipsLists from "./auth/salon/membershipPlans/reducer";
import salonAboutCompReducer from "./auth/salon/getAboutCompany/reducers";
import approvedSalonList from "./admin/salonapproved/reducers";
import redsalonServiceList from "./auth/salon/salonServiceList/reducers";
import salonWorkPortfolio from "./auth/salon/getWorkPortfolio/reducers";
import GetSalonResourcesRedux from "./auth/salon/getSalonResources/reducers";
import getSalonAmenitiesRedux from "./auth/salon/getAmenities/reducers";
import postPortfolioRedux from "./auth/salon/addPortfolio/reducer";
import getServiceItems from "./auth/salon/getSalonServiceDropDown/reducers";
import getMembershipListsRedux from "../store/admin/membershipNameList/reducers";
import RedSalonServiceGrpList from "./auth/salon/salonServiceGroupList/reducers";
import RedMembershipNamesList from "./auth/salon/getMembershipNameList/reducers";
import RedActivatedMembership from "./auth/salon/getActivatedMembership/reducers";
import getTeamMemberServiceRedux from "./auth/salon/getTeamMemberService/reducers";
import resendOtp from "./auth/resendOtp/reducer";
import getEmployeeInfoRedux from "./auth/salon/getEmployeeInfo/reducers";
import RedMembershipAddon from "./auth/salon/getMembershipAddonList/reducers";
import RedGetSalonInvoice from "./auth/salon/getSalonInvoice/reducers";
import RedGetEmployeeList from "./auth/salon/getEmployeeList/reducers";
import redGetSalonLang from "./auth/salon/getSalonLang/reducer";
import redGetSalonTime from "./auth/salon/getSalonTime/reducer";
import membership from "./admin/membership/reducers";
import amenities from "./admin/amenities/reducers";
import language from "./admin/language/reducers";
import customers from "./admin/customers/reducers";
import category from "./admin/category/reducers";
import service from "./admin/service/reducers";
import servicegroup from "./admin/servicegroup/reducers";
import membershipAddon from "./admin/membershipAddon/reducers";
import giftcards from "./admin/giftcards/reducers";
import awards from "./admin/awards/reducers";
import cms from "./admin/cms/reducers";
import fetchActiveMembershipAddOn from "./salon/activeMembershipAddOn/reducers"
import groupandservice from './salon/groupandservice/reducers'
import serviceinfo from './salon/serviceinfo/reducers'
import salonteams from './salon/salonteams/reducers'
import salondiscount from './salon/salondiscount/reducers'
import packageinfo from './salon/packageinfo/reducers'
import packagelist from './salon/packagelist/reducers'
import redGetWorkingHours from "./auth/salon/getWorkingHours/reducers"
import discountlist from './salon/discountlist/reducers'
import discountinfo from './salon/discountinfo/reducers'
import getRota from './salon/getRota/reducers'
const rootReducer = combineReducers({
  auth,
  message,
  usersignup,
  RedMembershipAddon,
  salonRequestedLists,
  RedActivatedMembership,
  RedMembershipNamesList,
  salonMembershipsLists,
  salonAboutCompReducer,
  salonWorkPortfolio,
  getServiceItems,
  GetSalonResourcesRedux,
  redsalonServiceList,
  getTeamMemberServiceRedux,
  postPortfolioRedux,
  RedGetSalonInvoice,
  authInfo,
  redGetSalonLang,
  RedGetEmployeeList,
  navitems,
  RedSalonServiceGrpList,
  getMembershipListsRedux,
  getSalonAmenitiesRedux,
  approvedSalonList,
  membership,
  resendOtp,
  amenities,
  language,
  customers,
  category,
  redGetSalonTime,
  service,
  servicegroup,
  membershipAddon,
  giftcards,
  awards,
  cms,
  getEmployeeInfoRedux,
  fetchActiveMembershipAddOn,
  groupandservice,
  serviceinfo,
  salonteams,
  salondiscount,
  packageinfo,
  packagelist,
  redGetWorkingHours,
  discountlist,
  discountinfo,
  getRota
});

export default rootReducer;
