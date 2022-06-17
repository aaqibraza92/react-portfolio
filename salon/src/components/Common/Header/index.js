import React, { useEffect, useState } from "react";
import NewHeader from "./Customer/NewHeader";
import HeaderNavigation from "./Customer/HeaderNavigation";
import HeaderSalon from "./Salon/HeaderSalon";
import SalonAuthHeader from "./Salon/SalonAuthHeader";
import { useDispatch, useSelector } from "react-redux";

import { useLocation } from "react-router-dom";
import { authUserProfile } from "../../../store/auth/profile/actions";
import AuthCustomerHeader from "./Customer/AuthCustomerHeader";
import CustomerHeader from "./Customer/CustomerHeader";
import AdminHeader from "./Admin/AdminHeader";
import MemebershipHeader from "./Salon/HeaderWithLogo";
import HeaderWithLogo from "./Salon/HeaderWithLogo";
import { userLogin } from "../../../helpers/backend";
import Auth from "../../../helpers/Auth/Auth";

const HeaderCalling = (props) => {
  const { userType } = props;
  const dispatch = useDispatch();
  const getProfile = useSelector((state) => {
    return state && state.authInfo.authInfo && state.authInfo.authInfo;
  });


  const location = useLocation();
  useEffect(() => {
    dispatch(authUserProfile());
  }, [dispatch]);




  const [userInfo, setuserInfo] = useState(getProfile && getProfile);
  useEffect(() => {
    setuserInfo(getProfile && getProfile);
  }, [getProfile, userInfo]);

  return (
    <div>
      {(() => {
        if (userType === "Salon") {
          return (
            <>
              {Auth.getToken() !== null ? (
                <>
                  <HeaderWithLogo />
                </>
              ) : (
                <>
                  {/* <HeaderSalon /> */}
                  <CustomerHeader />
                </>
              )}
            </>
          );
        } else if (userType === "Customer") {
          return (
            <>
              {Auth.getToken() !== null ? (
                <>
                  <AuthCustomerHeader />
                  {location.pathname === "/" && <HeaderNavigation />}
                </>
              ) : (
                <>
                  {location.pathname === "/" ? (
                    <>
                      <NewHeader /> <HeaderNavigation />
                    </>
                  ) : (
                    <NewHeader />
                  )}
                </>
              )}
            </>
          );
        } else {
          return (
            <>
              {Auth.getToken() !== null ? (
                <>
                  <SalonAuthHeader data={userInfo} />
                </>
              ) : (
                <>
                  <NewHeader />
                </>
              )}
              <HeaderNavigation />
            </>
          );
        }
      })()}
      {/* Headers For Customer  */}
      {/* <NewHeader />
      <HeaderCustomer /> */}
      {/* It is Component of Header Below Navigation Items */}
      {/* <HeaderNavigation /> */}

      {/* {(() => {
        if (location.pathname === "/for-your-business") {
          return <HeaderBusiness />;
        }  else {
          return (
            <>
            {userInfo!=="" ? <SalonAuthHeader data={userInfo} /> : <NewHeader />}
              <HeaderNavigation />
            </>
          );
        }
      })()} */}

      {/* <CustomerProfileHeader /> */}

      {/* Headers For Salon  */}

      {/* <MemebershipHeader />
      <SalonAuthHeader /> */}

      {/* Header For Admin  */}
      {/* <AdminHeader /> */}
    </div>
  );
};

export default HeaderCalling;
