import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../helpers/Auth/Auth";
import AuthHelper from "../helpers/Auth/AuthHelper";
import { authUserProfile } from "../store/auth/profile/actions";
import RoutesComponent from "./RoutesComponent";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import SalonAuthHeader from "../components/Common/Header/Salon/SalonAuthHeader";
import HeaderSalon from "../components/Common/Header/Salon/HeaderSalon";

const GetRoute = ({ isprivate: isPrivate, page: Page, ...rest }) => {

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authUserProfile());
  }, [dispatch]);

  const getProfile = useSelector((state) => {
    return state && state.authInfo.authInfo && state.authInfo.authInfo;
  });
  const [userInfo, setuserInfo] = useState(getProfile && getProfile);
  useEffect(() => {
    setuserInfo(getProfile && getProfile);
  }, [getProfile]);

  var LoggedIn = false;
  var role = AuthHelper.getUserRoleFromAuth();

  if (Auth.isUserLoggedIn()) {
    LoggedIn = true;
  }
  if (isPrivate) {
    // check role of user
    if(rest.role === "Salon" && role !== "Salon")
    {
      <>
      <SalonAuthHeader data={userInfo} /> <HeaderSalon />
      </>
       return <Navigate to="/salon/login"/>;
    }
    else if(rest.role === "Customer" && role !== "Customer"){
      return <Navigate to="/login"/>;
    }
    else if(rest.role === "Admin" && role !== "Admin"){
      return <Navigate to="/admin/login"/>;
    }
    else if (role === "Default") {
      console.log("1");
      return (
        <>
          {rest.enableHeaderFooter && <RoutesComponent.HeaderComponent userType={rest.role} />}
          {/* { <Navigate to="/login"/>} */}
          {/* <RoutesComponent.LoginPage /> */}
          {rest.enableHeaderFooter && (
            <RoutesComponent.FooterComponent footer={rest.footer || false} />
          )}
        </>
      );
    } 
  else {
      console.log("4");
      if (role !== rest.role) {
        return <RoutesComponent.UnauthorizedPage />;
      }
    }

    var isValid = false;
    var token = null;
    if (Auth.isUserLoggedIn()) {
      token = Auth.getToken();
      isValid = true;
    }
    if (isValid) {
      if (rest.isAdmin) {

      } else {
        return (
          <>
            {rest.enableHeaderFooter && <RoutesComponent.HeaderComponent userType={rest.role} />}
            <div className="contentWrapper">
           
              <Page {...rest} />
            </div>

            {rest.enableHeaderFooter && (
              <RoutesComponent.FooterComponent footer={rest.footer || false} />
            )}
          </>
        );
      }
    } else {
      return (
        <>
          {rest.enableHeaderFooter && <RoutesComponent.HeaderComponent userType={rest.role} />}
          <RoutesComponent.LoginPage />
          {rest.enableHeaderFooter && (
            <RoutesComponent.FooterComponent footer={rest.footer || false} />
          )}
        </>
      );
    }
  } else {
    return (
      <>
        {rest.enableHeaderFooter && <RoutesComponent.HeaderComponent userType={rest.role} />}
        <div className="contentWrapper">
          <Page {...rest} />
        </div>
        {rest.enableHeaderFooter && (
          <RoutesComponent.FooterComponent footer={rest.footer || false} />
        )}
      </>
    );
  }
};


let RoutesList = [
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Customer"
        page={RoutesComponent.HomePage}
        enableHeaderFooter={true}
      />
    ),
    path: "/",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Admin"
        page={RoutesComponent.AdminLogin}
        enableHeaderFooter={false}
      />
    ),
    path: "/admin/login",
    isAdmin: true,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Admin"
        page={RoutesComponent.DashboardPage}
        enableHeaderFooter={false}
      />
    ),
    path: "/admin",
    isAdmin: true,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Admin/"
        page={RoutesComponent.DashboardPage}
        enableHeaderFooter={false}
      />
    ),
    path: "/admin/*",
    isAdmin: true,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Customer"
        page={RoutesComponent.LoginPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/login",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.Logout}
        enableHeaderFooter={false}
      />
    ),
    path: "/logout",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Customer"
        page={RoutesComponent.SignupPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/sign-up",
    isAdmin: false,
  },

  {
    element: (
      <GetRoute
        isprivate={false}
        role="Customer"
        page={RoutesComponent.ResetPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/reset",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.ResetPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/team-setpassword",
    isAdmin: false,
  },

  

  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonMPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon-membership-plan",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.MobileVerifiyPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/mobile-verification",
    isAdmin: false,
  },

  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.Thankyoupage}
        enableHeaderFooter={true}
      />
    ),
    path: "/thankyou",
    isAdmin: false,
  },

  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.TermsConditionsPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/terms-conditions",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.PrivacyPolicyPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/privacy-policy",
    isAdmin: false,
  },

  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.AboutPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/about",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.ForYourBusinessPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/for-your-business",
    isAdmin: false,
  },

  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.SalonAbout}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/profile/about",
    isAdmin: false,
  },

  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.SalonServices}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/profile/services",
    isAdmin: false,
  },

  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.ResetPassword}
        enableHeaderFooter={true}
      />
    ),
    path: "/reset-password/:id",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.EmailVerification}
        enableHeaderFooter={true}
      />
    ),
    path: "/email-verification/:token",
    isAdmin: false,
  },

  /*==== Salon Routes ====*/
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.WaitForApproval}
        enableHeaderFooter={true}
      />
    ),
    path: "/wait-for-approval",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.BecomeProviderPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/become-provider",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.SalonMobileVerification}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/mobile-verification",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonLogin}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/login",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonForgotPassword}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/forgot-password",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonMailSentMessage}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/mail-success",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonResetPassword}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/reset-password",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonMPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/membership-plan",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.ServiceTerms}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/terms",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonContact}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/privacy-policy",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Salon"
        page={RoutesComponent.SalonAboutCompany}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/setting/about-company",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Salon"
        page={RoutesComponent.SalonOpeningHours}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/setting/opening-hours",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonServiceSetting}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/setting/services",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Salon"
        page={RoutesComponent.SalonResources}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/setting/resources",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Salon"
        page={RoutesComponent.SalonPortfolioImages}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/setting/portfolio-images",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Salon"
        page={RoutesComponent.SalonAmenities}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/setting/amenities",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonInvoicingList}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/setting/invoice-list",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonInvoiceSetting}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/setting/invoice",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
      isprivate={false}
      role="Salon"
        page={RoutesComponent.SalonVenueAboutPage}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/setting/venue-about-company",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
      isprivate={false}
      role="Salon"
        page={RoutesComponent.SalonVenueOpeningHoursPage}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/setting/venue-opening-hours",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
      isprivate={false}
      role="Salon"
        page={RoutesComponent.SalonVenueServicesPage}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/setting/venue-services",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
      isprivate={false}
      role="Salon"
        page={RoutesComponent.SalonVenueResourcesPage}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/setting/venue-resources",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
      isprivate={false}
      role="Salon"
        page={RoutesComponent.SalonVenuePortfolioPage}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/setting/venue-portfolio",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonVenueAmenitiesPage}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/setting/venue-amenities",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonBankDetail}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/setting/bank-details",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonCustomerNotifications}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/setting/customer-notification",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonTeamNotifications}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/setting/team-notification",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonBookingWidget}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/setting/booking-widget",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonBookinSettings}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/setting/booking",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonMembershipSettings}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/setting/membership",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonDashboardCalender}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/dashboard/calender",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonDashboardStatistics}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/dashboard/statistic",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonCustomerReviews}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/customer-reviews",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonServices}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/services",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonDiscounts}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/discounts",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.SalonVouchers}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/vouchers",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={true}
        role="Salon"
        page={RoutesComponent.SalonTeamRota}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon/team/rota",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonEmployees}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/team/employees",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonProducts}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/products",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonClientList}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/client-list",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonMarketingMessage}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/automated/marketing-message",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonTransactionalMessage}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/automated/transactional-message",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonSocialMedia}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/marketing/social-media",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonPartnerSite}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/marketing/partner-site",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonPartnerSite}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/marketing/partner-site",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonReports}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/reports",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.ReportBookingList}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/reports/booking-list",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.ReportClientAcquisition}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/reports/client-acquisition",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.ReportsClientRetention}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/reports/client-retention",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalesOverview}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/reports/sales-overview",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.ServiceSales}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/reports/service-sales",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalesByEmployee}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/reports/sales-employee",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalesByChannel}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/reports/sales-channel",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.DailySales}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/reports/daily-channels",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.MonthlySales}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/reports/monthly-sales",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.ProductSales}
        enableHeaderFooter={false}
      />
    ),
    path: "/salon/reports/product-sales",
    isAdmin: false,
  },
  /*customer*/
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonListsPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon-list",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Salon"
        page={RoutesComponent.SalonDetailsPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/salon-details",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.ChooseServicesPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/choose-services",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.ScheduleAppointmentPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/schedule-appointment",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CheckoutPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/checkout",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.BookingConfirmedPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/booking-confirmed",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CustomerEditProfilePage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/edit-profile",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CustomerWalletPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/wallet",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CustomerNotificationPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/notifications",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CancelBookingPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/cancel-booking",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.RBookingChooseStylish}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/reschedule-booking-stylish",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.HiringPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/hiring-lists",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.HiringDetailsPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/hiring-details",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.SubmitHiringPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/submit-hiring",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.LegalPolicesPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/legal-polices",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CustomeLegalPolicesPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/legal-polices",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CustomerPrivacyCookiePolicyPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/privacy-cookie-policy",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CustomerPrivacyCookiePolicyPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/privacy-cookie-policy",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CustomerBookingTermsPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/booking-terms",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.UGContentPolicyCustomerPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/user-content-policy",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CustPartnerTermsBusinessPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/partner-terms-business",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CustPartnerTermsBusinessPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/partner-terms-business",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CustTaxStrategyPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/tax-strategy",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CustModernSlaveryStatementPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/slavery-statement",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CustomerHelpCentrePage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/help-centre",
    isAdmin: false,
  },

  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CustomerHelpCentreDetailsPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/help-centre-details",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CustGiftCardPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/gift-card",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={RoutesComponent.CustGiftCardCheckoutPage}
        enableHeaderFooter={true}
      />
    ),
    path: "/customer/giftcard-checkout",
    isAdmin: false,
  },


  /*customer*/

  {
    element: <GetRoute isprivate={false} role="Default" page={RoutesComponent.UnauthorizedPage} />,
    path: "*",
    isAdmin: false,
    showHeaderFooder: true,
  },
];

export default RoutesList;
