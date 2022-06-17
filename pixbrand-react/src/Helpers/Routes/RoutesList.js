import Pages from "../../Views";

const GetRoute = ({ isprivate: isPrivate, page: Page, ...rest }) => {
  if (isPrivate) {
    return (
      <>
        <Pages.HeaderComponent />
        <Page {...rest} />
        <Pages.FooterComponent />
      </>
    );
  } else {
    return (
      <>
        <Pages.HeaderComponent />
        <Page {...rest} />
        <Pages.FooterComponent footer={rest.footer || false} />
      </>
    );
  }
};

let RouterList = [
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.HomePage} />
    ),
    path: "/",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.TermsServices} />
    ),
    path: "/terms-services",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.PrivacyPolicy} />
    ),
    path: "/privacy-policy",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.AboutPage} />
    ),
    path: "/about",
    isAdmin: false,
  },

  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.GoodReads} />
    ),
    path: "/good-reads",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.SingleBlogPage} />
    ),
    path: "/single-blog-page",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.Work} />,
    path: "/work",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.SingleCareerPage}
      />
    ),
    path: "/single-career-page",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.ContactUs} />
    ),
    path: "/contactus",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.Career} />,
    path: "/career",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.Services} />
    ),
    path: "/services",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.UiDesign} />
    ),
    path: "/uidesign-services",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.SingleServicePage}
      />
    ),
    path: "/single-services-page",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.PerfectDesigning}
      />
    ),
    path: "/perfect-designing-page",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.DigitalMarketing}
      />
    ),
    path: "/digital-marketing",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.DigitalMarketing1}
      />
    ),
    path: "/digital-marketing1",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.Companion} />
    ),
    path: "/companion",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.Game} />,
    path: "/game",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.HouseTrippng} />
    ),
    path: "/house-tripping",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Pages.Pixxley} />,
    path: "/pixxley",
    isAdmin: false,
  },

  {
    element: (
      <GetRoute isprivate={false} role="Default" page={Pages.Cyberpal} />
    ),
    path: "/cyberpal",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute
        isprivate={false}
        role="Default"
        page={Pages.MainPortfolioPage}
      />
    ),
    path: "/main-portfolio-page",
    isAdmin: false,
  },
];

export default RouterList;
