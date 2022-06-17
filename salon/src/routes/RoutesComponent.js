import Footer from "../components/Common/Footer/Footer";
import Dashboard from "../pages/Admin/Dashboard";
import About from "../pages/Common/About/About";
import Home from "../pages/Common/Home/Home";
import Unauthorized from "../pages/Common/UnauthorizedPage";
import ForYourBusiness from "../pages/ForYourBusiness/ForYourBusiness";
import Reset from "../pages/Reset/Reset";
import SalonMembershipPlan from "../pages/Salon/SalonMembershipPlan/SalonMembershipPlan";
import Signup from "../pages/Signup/Signup";
import ThankYou from "../pages/ThankYou/ThankYou";
import OpeningHours from "../pages/Salon/SalonMembershipPlan/OpeningHours/OpeningHours";

import Logout from "../components/Authentication/Logout";
import MobileVerification from "../pages/Signup/MobileVerification/MobileVerification";
/* Salon Component Add */


/* ======Customer =======*/
import SalonLists from "../pages/Customer/SalonLists/SalonLists";
import SalonDetails from "../pages/Customer/SalonDetails/SalonDetails";
import ChooseServices from "../pages/Customer/ChooseServices/ChooseServices";
import ScheduleAppointment from "../pages/Customer/ScheduleAppointment/ScheduleAppointment";
import Checkout from "../pages/Customer/Checkout/Checkout";
import BookingConfirmed from "../pages/Customer/BookingConfirmed/BookingConfirmed";
import CustomerEditProfile from "../pages/Customer/CustomerEditProfile/CustomerEditProfile";
import CustomerWallet from "../pages/Customer/CustomerWallet/CustomerWallet";
import AllCustomerNotifications from "../pages/Customer/AllNotifications/AllCustomerNotifications";
import CancelBookingCustomer from "../pages/Customer/CancelBooking/CancelBooking";
import RBookingChooseStylish from "../pages/Customer/RescheduleBooking/RBookingChooseStylish";
import RBookingCalender from "../pages/Customer/RescheduleBooking/RBookingCalender";
import Hiring from "../pages/Customer/Hiring/Hiring";
import HiringDetails from "../pages/Customer/HiringDetails/HiringDetails";
import SubmitHiring from "../pages/Customer/SubmitHiring/SubmitHiring";
import LegalPolicesCustomer from "../pages/Customer/LegalPolices/LegalPolices";
import CustomerPrivacyCookiePolicy from "../pages/Customer/PrivacyCookiePolicy/CustomerPrivacyCookiePolicy";
import CustomerBookingTerms from "../pages/Customer/BookingTerms/CustomerBookingTerms";
import UGContentPolicyCustomer from "../pages/Customer/UGContentPolicy/UGContentPolicyCustomer";
import CustPartnerTermsBusiness from "../pages/Customer/PartnerTermsBusiness/CustPartnerTermsBusiness";
import CustTaxStrategy from "../pages/Customer/TaxStrategy/CustTaxStrategy";
import ModernSlaveryStatement from "../pages/Customer/ModernSlaveryStatement/CustModernSlaveryStatement";
import CustModernSlaveryStatement from "../pages/Customer/ModernSlaveryStatement/CustModernSlaveryStatement";
import CustomerHelpCentre from "../pages/Customer/CustomerHelpCentre/CustomerHelpCentre";
import CustomerHelpCentreDetails from "../pages/Customer/CustomerHelpCentre/CustomerHelpCentreDetails";
import CustGiftCard from "../pages/Customer/CustGiftCard/CustGiftCard";
import CustGiftCardCheckout from "../pages/Customer/CustGiftCardCheckout/CustGiftCardCheckout";
/* Admin Routes */
import AdminLogin from "../pages/Admin/AdminLogin";
// import Header from "../components/Common/Header/Header";
import Login from "../pages/Login/Login";
import HeaderCalling from "../components/Common/Header";

import ResetPassword from "../pages/ResetPassword/ResetPassword";
import EmailVerification from "../pages/EmailVerification/EmailVerification";
/* Salon Component Add */
import BecomeProvider from "../pages/Salon/BecomeProvider";
import SalonLogin from "../pages/Salon/SalonLogin";
import SalonResetPassword from "../pages/Salon/SalonResetPassword";
import SalonForgotPassword from "../pages/Salon/SalonForgotPassword";
import ServiceTerms from "../pages/Salon/ServiceTerms/Index";
import SalonContact from "../pages/Salon/PrivacyPolicy/SalonContact";
import SalonAboutCompany from "../pages/Salon/Setting/VenueDetails/AboutCompany";
import SalonOpeningHours from "../pages/Salon/Setting/VenueDetails/OpeningHours";
import SalonResources from "../pages/Salon/Setting/VenueDetails/SalonResources";
import SalonPortfolioImages from "../pages/Salon/Setting/VenueDetails/PortfolioImages";
import SalonAmenities from "../pages/Salon/Setting/VenueDetails/SalonAmenities";
import SalonInvoicingList from "../pages/Salon/Setting/Finance/InvoicingList";
import SalonInvoiceSetting from "../pages/Salon/Setting/Finance/Invoice";
import SalonBankDetail from "../pages/Salon/Setting/Finance/BankDetails";
import SalonCustomerNotifications from "../pages/Salon/Setting/Notifications/CustomerNotifications";
import SalonTeamNotifications from "../pages/Salon/Setting/Notifications/TeamNotifications";
import SalonBookingWidget from "../pages/Salon/Setting/OnlineBookings/BookingWidget";
import SalonBookinSettings from "../pages/Salon/Setting/OnlineBookings/BookinSettings";
import SalonMembershipSettings from "../pages/Salon/Setting/Membership/Membership";
import SalonDashboardCalender from "../pages/Salon/Dashboard/DashboardCalender/Index";
import SalonDashboardStatistics from "../pages/Salon/Dashboard/StatisticsDashboard/StatisticsDashboard";
import SalonCustomerReviews from "../pages/Salon/Dashboard/CustomerReviews/CustomerReviews";
import SalonServices from "../pages/Salon/Services/ServiceSubTask";
import SalonDiscounts from "../pages/Salon/Discounts/Discounts";
import SalonVouchers from "../pages/Salon/Voucher/Vouchers";
import SalonTeamRota from "../pages/Salon/Team/TeamRota";
import SalonEmployees from "../pages/Salon/Team/SalonEmployees";
import SalonProducts from "../pages/Salon/Products/Products";
import SalonClientList from "../pages/Salon/ClientList/ClientList";
import SalonMarketingMessage from "../pages/Salon/Markeitng/AutomatedMessaging/MarketingMessaging";
import SalonTransactionalMessage from "../pages/Salon/Markeitng/AutomatedMessaging/TransactionalMessage";
import SalonSocialMedia from "../pages/Salon/Markeitng/SocialMedia/SocialMedia";
import SalonPartnerSite from "../pages/Salon/Markeitng/PartnerSite/PartnerSite";
import SalonReports from "../pages/Salon/Reports/Reports";
import SalonAbout from "../pages/Salon/SalonProfile/SalonAbout/SalonAbout";
import SalonMailSentMessage from "../pages/Salon/SalonMailSentMessage/SalonMailSentMessage";
import SalonServiceSetting from "../pages/Salon/Setting/VenueDetails/ServiceSetting";
import SalonMobileVerification from "../pages/Salon/SalonMobileVerification";
/* ======Customer =======*/

/* Admin Routes */
import Header from "../components/Common/Header/Header";
import WaitForApproval from "../pages/Salon/WaitForApproval/WaitForApproval";
import VenueDetails from "../pages/Salon/Setting/VenueDetails/Venue/VenueAboutComp";
import VenueAboutComp from "../pages/Salon/Setting/VenueDetails/Venue/VenueAboutComp";
import VenueOpeningHours from "../pages/Salon/Setting/VenueDetails/Venue/VenueOpeningHours";
import VenueServices from "../pages/Salon/Setting/VenueDetails/Venue/VenueServices";
import VenueResources from "../pages/Salon/Setting/VenueDetails/Venue/VenueResources";
import VenuePortfolio from "../pages/Salon/Setting/VenueDetails/Venue/VenuePortfolio";
import VenueAmenities from "../pages/Salon/Setting/VenueDetails/Venue/VenueAmenities";
import ReportBookingList from "../pages/Salon/Reports/ReportBookingList";
import ReportsClientRetention from "../pages/Salon/Reports/ReportsClientRetention";
import ReportClientAcquisition from "../pages/Salon/Reports/ReportsClientAcquisition";
import SalesOverview from "../pages/Salon/Reports/SalesOverview";
import ServiceSales from "../pages/Salon/Reports/ServiceSales";
import SalesByEmployee from "../pages/Salon/Reports/SalesByEmployee";
import SalesByChannel from "../pages/Salon/Reports/SalesByChannel";
import DailySales from "../pages/Salon/Reports/DailySales";
import MonthlySales from "../pages/Salon/Reports/MonthlySales";
import ProductSales from "../pages/Salon/Reports/ProductSales";
import TeamSetPassword from "../pages/Salon/TeamSetPassword/TeamSetPassword";
const RoutesComponent = {
  HomePage: Home,
  HeaderComponent: HeaderCalling,
  FooterComponent: Footer,
  AboutPage: About,
  SignupPage: Signup,
  ResetPage: Reset,
  TeamSetpassword: TeamSetPassword,
  LoginPage: Login,
  Thankyoupage: ThankYou,
  ResetPassword: ResetPassword,

  DashboardPage: Dashboard,
  UnauthorizedPage: Unauthorized,
  SalonMPage: SalonMembershipPlan,
  ForYourBusinessPage: ForYourBusiness,
  OpeningHoursPage: OpeningHours,
  MobileVerifiyPage: MobileVerification,
  EmailVerification: EmailVerification,
  Logout: Logout,

  //Salon Side Route
  WaitForApproval: WaitForApproval,
  BecomeProviderPage: BecomeProvider,
  SalonLogin: SalonLogin,
  SalonResetPassword: SalonResetPassword,
  SalonForgotPassword: SalonForgotPassword,
  ServiceTerms: ServiceTerms,
  SalonContact: SalonContact,
  SalonAboutCompany: SalonAboutCompany,
  SalonOpeningHours: SalonOpeningHours,
  SalonResources: SalonResources,
  SalonPortfolioImages: SalonPortfolioImages,
  SalonAmenities: SalonAmenities,
  SalonInvoicingList: SalonInvoicingList,
  SalonInvoiceSetting: SalonInvoiceSetting,
  SalonBankDetail: SalonBankDetail,
  SalonCustomerNotifications: SalonCustomerNotifications,
  SalonTeamNotifications: SalonTeamNotifications,
  SalonBookingWidget: SalonBookingWidget,
  SalonBookinSettings: SalonBookinSettings,
  SalonMembershipSettings: SalonMembershipSettings,
  SalonDashboardCalender: SalonDashboardCalender,
  SalonDashboardStatistics: SalonDashboardStatistics,
  SalonCustomerReviews: SalonCustomerReviews,
  SalonServices: SalonServices,
  SalonDiscounts: SalonDiscounts,
  SalonVouchers: SalonVouchers,
  SalonTeamRota: SalonTeamRota,
  SalonEmployees: SalonEmployees,
  SalonProducts: SalonProducts,
  SalonClientList: SalonClientList,
  SalonMarketingMessage: SalonMarketingMessage,
  SalonTransactionalMessage: SalonTransactionalMessage,
  SalonSocialMedia: SalonSocialMedia,
  SalonPartnerSite: SalonPartnerSite,
  SalonReports: SalonReports,
  // New Routes Added For Reports Section 28-05-22
  ReportBookingList: ReportBookingList,
  ReportClientAcquisition: ReportClientAcquisition,
  ReportsClientRetention: ReportsClientRetention,
  SalesOverview: SalesOverview,
  ServiceSales: ServiceSales,
  SalesByEmployee: SalesByEmployee,
  SalesByChannel: SalesByChannel,
  DailySales: DailySales,
  MonthlySales: MonthlySales,
  ProductSales: ProductSales,
  
  SalonMailSentMessage: SalonMailSentMessage,
  SalonServiceSetting: SalonServiceSetting,
  SalonMobileVerification: SalonMobileVerification,
  SalonVenueAboutPage: VenueAboutComp,
  SalonVenueOpeningHoursPage: VenueOpeningHours,
  SalonVenueServicesPage: VenueServices,
  SalonVenueResourcesPage: VenueResources,
  SalonVenuePortfolioPage: VenuePortfolio,
  SalonVenueAmenitiesPage: VenueAmenities,
  //Customer Side Route
  SalonAboutPage: SalonAbout,

  /*customer*/
  SalonListsPage: SalonLists,
  SalonDetailsPage: SalonDetails,
  ChooseServicesPage: ChooseServices,
  ScheduleAppointmentPage: ScheduleAppointment,
  CheckoutPage: Checkout,
  BookingConfirmedPage: BookingConfirmed,
  CustomerEditProfilePage: CustomerEditProfile,
  CustomerWalletPage: CustomerWallet,
  CustomerNotificationPage: AllCustomerNotifications,
  CancelBookingPage: CancelBookingCustomer,
  RBookingChooseStylishPage: RBookingChooseStylish,
  RBookingCalenderPage: RBookingCalender,
  HiringPage: Hiring,
  HiringDetailsPage: HiringDetails,
  SubmitHiringPage: SubmitHiring,
  CustomeLegalPolicesPage: LegalPolicesCustomer,
  CustomerPrivacyCookiePolicyPage: CustomerPrivacyCookiePolicy,
  CustomerBookingTermsPage: CustomerBookingTerms,
  UGContentPolicyCustomerPage: UGContentPolicyCustomer,
  CustPartnerTermsBusinessPage: CustPartnerTermsBusiness,
  CustTaxStrategyPage: CustTaxStrategy,
  CustModernSlaveryStatementPage: CustModernSlaveryStatement,
  CustomerHelpCentrePage: CustomerHelpCentre,
  CustomerHelpCentreDetailsPage: CustomerHelpCentreDetails,
  CustGiftCardPage: CustGiftCard,
  CustGiftCardCheckoutPage: CustGiftCardCheckout,
  AdminLogin: AdminLogin,
};
export default RoutesComponent;
