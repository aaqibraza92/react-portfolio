import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import News from "./News/News";
import NotFound from "./NotFound/NotFound";
import TermsConditions from "./TermsConditions/TermsConditions";
import ToExhibit from "./ToExibit/ToExhibit";
import Unauthorized from "./Unauthorized/Unauthorized";
import Blogsinglepage from "./BlogSinglePage/Blogsinglepage"

export const Page = {
  HeaderPage: "Header",
  HomePage: "HomePage",
  UnauthorizedPage: "UnauthorizedPage",
  NotFoundPage: "NotFoundPage",
  FooterPage: "FooterPage",
  TermsConditionsPage: "TermsConditions",
  ToexhibitPage: "Toexhibit",
  NewsPage: "News",
  Blogsinglepage: "Blogsinglepage"
};

const Pages = (props) => {
  switch (props.Page) {
    case "Header":
      return Header(props);
    case "FooterPage":
      return <Footer {...props} />;
    case "HomePage":
      return <Home {...props} />;
    case "TermsConditions":
      return <TermsConditions {...props} />;
      case "Toexhibit":
        return <ToExhibit {...props} />;
        case "News":
          return <News {...props} />;
        case "Blogsinglepage":
          return <Blogsinglepage {...props} />;
    case "UnauthorizedPage":
      return <Unauthorized {...props} />;
    case "NotFoundPage":
      return <NotFound {...props} />;

    default:
      return <></>;
  }
};

export default Pages;
