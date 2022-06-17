import React from "react";
import { Route, Routes } from "react-router-dom";
import Notification from "react-notify-toast";
import AlertModal02 from "../../components/AlertModal02/AlertModal02";
import FormModal from "../../components/FormModal/FormModal";
import AdminSidebar from "./Sidebar/Sidebar";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import HomeDashboard from "./HomeDashboard/HomeDashboard";
// import AddOn from "./MembershipPlan/AddOn";
// import SalonApproved from "./SalonApproved/SalonApproved";
import SalonImages from "./SalonRequested/SalonImages";
import Awards from "./Awards/Awards";
import SalonReviews from "./SalonReviews/SalonReviews";
import Bookings from "./Bookings/Bookings";
import Categories from "./Categories/Categories";
import Services from "./Services/Services";
import ServiceGroup from "./ServiceGroups/ServiceGroups";
import GiftCards from "./GiftCards/GiftCards";
import Invoice from "../Salon/Setting/Finance/Invoice";
import Country from "./Country/Country";
import Cms from "./Cms/Cms";
import SalonRequest from "./SalonRequested/SalonRequest";
import SalonApproved from "./SalonApproved/SalonApproved";
import CreateSalonRequest from "./SalonRequested/CreateSalonRequest"
import SalonMembershipPlan from "./SalonApproved/SalonMembershipPlan";
import UpdateSalonImages from "./SalonRequested/UpdateSalonImages";
import UpdateSalonRequest from "./SalonRequested/UpdateSalonRequest";
import AdminHeader from "../../components/Common/Header/Admin/AdminHeader";
import Amenities from "./Amenities/Amenities";
import LanguagePreference from "./LanguagePreference/LanguagePreference";
import Customers from "./Customers/Customers";
import Tax from "./Tax/Tax";
import MembershipPlan from "./MembershipPlan/MembershipPlan";
import AddOn from "./AddOn/AddOn";
import SalonAwards from "./SalonAwards/SalonAwards";
import CustomerDetails from "./Customers/CustomerDetails";
import Invoices from "./Invoices/Invoices";

export default function DashBoard() {
  return (
    <>
      <Notification />
      <AlertModal02 />
      <FormModal />
      <div className="pc-header">
        {/* {/ <DashboardHeader /> /} */}
        <AdminHeader />
      </div>
      <div className="admin-body-container">
        <div className="admin-sidebar">
          <AdminSidebar />
        </div>
        <div className="pc-container">
          <div className="pcoded-content">
            <Routes>
              <Route path="/" element={<HomeDashboard />} />
              <Route path="/membership-plan" element={<MembershipPlan />} />
              <Route path="/addon" element={<AddOn />} />
              <Route path="/salon-requested" element={<SalonRequest />} />
              <Route path="/salon-approved" element={<SalonApproved />} />
              <Route path="/salon-images" element={<SalonImages />} />
              <Route path="/update-salon-images" element={<UpdateSalonImages />} />
              <Route path="/update-salon-request" element={<UpdateSalonRequest />} />
              {/* {/ {/ {/ route created by vishal 02-05-2022 /} /} /} */}
              <Route path="/create-salon-request" element={<CreateSalonRequest />} />
              {/* {/ {/ {/ route created by vishal 02-05-2022 /} /} /} */}
{/* 
              {/ {/ {/ route created by vishal 03-05-2022 /} /} /} */}
              <Route path="/salon-membership-plan" element={<SalonMembershipPlan />} />
              {/* {/ {/ {/ route created by vishal 03-05-2022 /} /} /} */}



              {/* {/ {/ route created by ajay sir /} /} */}
              <Route path="/admin/login" element={""} />
              <Route path="/salon-reviews" element={<SalonReviews/>} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/salon-awards" element={<SalonAwards />} />
              <Route path="/amenities" element={<Amenities />} />
              <Route path="/language-preference" element={<LanguagePreference />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service-groups" element={<ServiceGroup />} />
              <Route path="/gift-cards" element={<GiftCards />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/tax" element={<Tax/>} />
              <Route path="/country" element={<Country />} />
              <Route path="/cms" element={<Cms />} />
              {/* {/ route created by ajay sir /} */}

              {/* {/ 17-05-22 /} */}
              <Route path="/customers/customers-details" element={<CustomerDetails />} />

            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}