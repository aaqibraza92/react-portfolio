import Footer from "../components/Common/Footer/Footer";
import Header from "../components/Common/Header/Header";
import About from "../pages/Common/About/About";
import Home from "../pages/Common/Home/Home";
import Unauthorized from "../pages/Common/UnauthorizedPage";
import Login from "../pages/Login/Login";
import Reset from "../pages/Reset/Reset";
// import SalonMembershipPlan from "../pages/Salon/SalonMembershipPlan/SalonMembershipPlan";
import Signup from "../pages/Signup/Signup";
import ThankYou from "../pages/ThankYou/ThankYou";
// import Successfulpassword from "../pages/Successfulpassword/Successfulpassword";
import OpeningHours from "../pages/Salon/SalonMembershipPlan/OpeningHours/OpeningHours";

const Common={
HomePage: Home,
HeaderComponent: Header,
FooterComponent: Footer,
AboutPage: About,
SignupPage: Signup,
ResetPage: Reset,
LoginPage : Login,
// vishal //
// SalonMPage : SalonMembershipPlan,
Thankyoupage: ThankYou,
OpeningHoursPage : OpeningHours,
// SuccessfulpasswordPage : Successfulpassword,


UnauthorizedPage:Unauthorized,
}
export default Common;