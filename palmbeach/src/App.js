import "./App.css";
import Pages, { Page } from "./views";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Fade } from "react-bootstrap";
import Home from "./views/Home/Home";
import { useState } from "react";


function App() {
  const [isUnauthorizedPage, setIsUnauthorizedPage] = useState(false);

  const GetRoutes = ({ isprivate: isprivate, page: page, ...rest }) => {
    if (isprivate) {
      //if page is private the check Auth(). if auth success then render page otherwise render Unautorized Page.
      if (1 == 1) {
        setIsUnauthorizedPage(false);
        return <Pages Page={page} {...rest} />;
      } else {
        setIsUnauthorizedPage(true);
        return <Pages Page={Page.UnauthorizedPage} />;
      }
    } else {
      // if page is not private then render page without checking Auth()
      return <Pages Page={page} {...rest} />;
    }
  };
  return (
    <>
      {!isUnauthorizedPage && <Pages Page={Page.HeaderPage} />}
      <BrowserRouter basename="/">
        <Routes>
          <Route
            path="/"
            element={
              <GetRoutes isprivate={false} page={Page.HomePage} title="hello" />
            }
          />
          <Route
            path="/termsconditions"
            element={
              <GetRoutes isprivate={false} page={Page.TermsConditionsPage} />
            }
          />
          <Route
            path="/toexhibit"
            element={<GetRoutes isprivate={false} page={Page.ToexhibitPage} />}
          />

          <Route
            path="/news"
            element={<GetRoutes isprivate={false} page={Page.NewsPage} />}
          />

          <Route
            path="/blogsinglepage"
            element={<GetRoutes isprivate={false} page={Page.Blogsinglepage} />}
          />

          <Route
            path="*"
            element={<GetRoutes isprivate={false} page={Page.NotFoundPage} />}
          />
        </Routes>
      </BrowserRouter>
      {!isUnauthorizedPage && <Pages Page={Page.FooterPage} />}
    </>
  );
}

export default App;
