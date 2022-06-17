import React from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import {
  Container,
  Col,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import Notifications, { notify } from "react-notify-toast";

import Home from "Views/Home";
import Register from "Views/Register";
import Login from "Views/Login";
import Reset from "Views/Reset";
import ChangePassword from "Views/ChangePassword";
import Profile from "Views/Profile";
import Setup from "Views/Setup";
import Setting from "Views/Setting";
import HomeSetup from "Views/HomeSetup";
import Reportfile from "Views/Reportfile";
import Creategange from "Views/Creategange";
import Searchreport from "Views/Searchreport";
import Suspectlistings from "Views/Suspectlistings";
import Gangdetails from "Views/Gangdetails";
import Search from "Views/Search/Search";
import Membership from "Views/Membership";
import ProfileSetting from "Views/ProfileSetting";
import Help from "Views/Help";
import Suspectdetails from "Views/Suspectdetails";
import NewReportsList from "Views/NewReportsList";
import Privacy from "Views/Privacy";
import About from "Views/About";
import Contact from "Views/Contact/Contact";
import Error from "Views/Error";

import Header from "Components/Header";
import Footer from "Components/Footer";

// import Footer from 'Components/Footer';

import { BASE_NAME, PUBLIC_URL } from "./Config";

import { Auth } from "Helpers";

import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

// import './Responsive.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathName: "",
      headerEnable: true,
    };
  }

  componentDidMount() {
    this.setState({ pathName: window.location.pathname });
    this.state.pathName = "/setup"
      ? this.setState({ headerEnable: false })
      : this.setState({ headerEnable: true });
    console.log("CDM" + this.state.pathName);
  }

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          Auth.getAuth() ? (
            <React.Fragment>
              <Header type={rest.headerType || 1} /> <Component {...props} />{" "}
              <Footer footer={rest.footer} />{" "}
            </React.Fragment>
          ) : (
            <>

            </>
            // <Redirect to={{ pathname: "/login" }} />
          )
        }
      />
    );

    const PublicRoute = ({ component: Component, restricted, ...rest }) => {
      // console.log(rest, 'rest2')
      return (
        <Route
          {...rest}
          render={(props) =>
            !Auth.getAuth() || !restricted ? (
              <>
                <Header type={rest.headerType || 1} />{" "}
                {/* {
                                                                                                                                                                                                                                                                                                                                                                                      this.state.headerEnable ? <Header type={rest.headerColor || 'white'} /> : ''
                                                                                                                                                                                                                                                                                                                                                                                    } */}{" "}
                <Component {...props} /> <Footer footer={rest.footer} />{" "}
              </>
            ) : (
              <Redirect to={{ pathname: "/" }} />
            )
          }
        />
      );
    };

    return (
      <React.Fragment>
        <section className={"app-root"}>
          <BrowserRouter basename={BASE_NAME}>
            {" "}
            {/* <Header /> */}{" "}
            <ScrollToTop>
              <Switch>
                {" "}
                {/* --------------Pages to be open without Login---------- */}{" "}
                <PublicRoute
                  restricted={false}
                  component={Home}
                  path="/"
                  exact
                />
                <PublicRoute
                  restricted={false}
                  component={Register}
                  path="/register"
                  exact
                />
                <PublicRoute
                  restricted={false}
                  component={Reset}
                  path="/reset"
                  exact
                />
                <PublicRoute
                  restricted={false}
                  component={ChangePassword}
                  path="/changepassword"
                  exact
                />
                <PublicRoute
                  restricted={false}
                  component={Profile}
                  path="/profile"
                  exact
                />{" "}
                {/* --------------Pages to be open before Login not after login---------- */}{" "}
                <PublicRoute
                  restricted={true}
                  component={Login}
                  path="/login"
                  exact
                />
                     <PublicRoute
                  restricted={false}
                  component={About}
                  path="/about"
                  exact
                />
                <PublicRoute
                  restricted={true}
                  component={ChangePassword}
                  path="/change-password"
                  exact
                />{" "}
                {/* --------------Pages to be open after Login---------- */}{" "}
                <PrivateRoute
                  restricted={false}
                  component={Profile}
                  path="/profile"
                  exact
                />{" "}
                 <PrivateRoute
                  restricted={false}
                  component={Help}
                  path="/help"
                  exact
                />{" "}
               
                {/* <Route path={'/'} exact component={(props) => <Home {...props} />} />
                                                                                                                                                                                                                        <Route path={'/register'} exact component={(props) => <Register {...props} />} />
                                                                                                                                                                                                                        <Route path={'/login'} exact component={(props) => <Login {...props} />} />
                                                                                                                                                                                                                        <Route path={'/reset'} exact component={(props) => <Reset {...props} />} />
                                                                                                                                                                                                                        <Route path={'/changepassword'} exact component={(props) => <ChangePassword {...props} />} />
                                                                                                                                                                                                                      <Route path={'/profile'} exact component={(props) => <Profile {...props} />} /> */}{" "}
                <PublicRoute
                  restricted={false}
                  component={Setup}
                  path="/setup"
                  exact
                  footer={"none"}
                  headerType={2}
                />{" "}
                 <PublicRoute
                  restricted={false}
                  component={ProfileSetting}
                  path="/profilesetting"
                  exact
                  headerType={1}
                />{" "}
                
              
                <PublicRoute
                  restricted={false}
                  component={Setting}
                  path="/setting"
                  exact
                  footer={"none"}
                  headerType={2}
                />{" "}
                  <PublicRoute
                  restricted={false}
                  component={Contact}
                  path="/contact"
                  exact
                  headerType={1}
                />{" "}
                    <PublicRoute
                  restricted={false}
                  component={Privacy}
                  path="/privacy"
                  exact
                  headerType={1}
                />{" "}
                       <PublicRoute
                  restricted={false}
                  component={Membership}
                  path="/membership"
                  exact
                  headerType={1}
                />{" "}
                
                <PublicRoute
                  restricted={false}
                  component={HomeSetup}
                  path="/homesetup"
                  exact
                  footer={"none"}
                  headerType={2}
                />{" "}
                <PublicRoute
                  restricted={false}
                  component={Reportfile}
                  path="/reportfile"
                  exact
                  footer={"none"}
                  headerType={2}
                />{" "}
                <PublicRoute
                  restricted={false}
                  component={Creategange}
                  path="/creategange"
                  exact
                  footer={"none"}
                  headerType={2}
                />{" "}
                <PublicRoute
                  restricted={false}
                  component={Searchreport}
                  path="/searchreport"
                  exact
                  footer={"none"}
                  headerType={2}
                />{" "}
                <PublicRoute
                  restricted={false}
                  component={Suspectlistings}
                  path="/suspectlistings"
                  exact
                  footer={"none"}
                  headerType={2}
                />{" "}
                <PublicRoute
                  restricted={false}
                  component={Gangdetails}
                  path="/gangedetails"
                  exact
                  footer={"none"}
                  headerType={2}
                />{" "}
                <PublicRoute
                  restricted={false}
                  component={Suspectdetails}
                  path="/suspectdetails"
                  exact
                  footer={"none"}
                  headerType={2}
                />{" "}
                <PublicRoute
                  restricted={false}
                  component={NewReportsList}
                  path="/newreportslist"
                  exact
                  footer={"none"}
                  headerType={2}
                />{" "}
                  <PublicRoute
                  restricted={false}
                  component={Search}
                  path="/search"
                  exact
                  headerType={1}
                />{" "}
                <PublicRoute
                  restricted={false}
                  component={Error}
                  path="*"
                  exact
                  footer={"none"}
                />{" "}
              </Switch>{" "}
            </ScrollToTop>{" "}
          </BrowserRouter>

          <Notifications />
        </section>{" "}
      </React.Fragment>
    );
  }
}

export default App;
