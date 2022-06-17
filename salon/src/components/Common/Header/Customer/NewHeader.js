import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import "../Header.css";
import Img from "../../../../assets/Img/Img";
import { Link } from "react-router-dom";
import GImage from "../../../Layout/GImage/GImage";
import { getHeaderMenuList } from "../../../../helpers/backend/index";
import CookieConsent from "react-cookie-consent";
import Svg from "../../../../assets/svg/Svg";
import { useTranslation } from "react-i18next";

const NewHeader = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  useEffect(() => {});

  try {
    getHeaderMenuList().then((res) => {
    });
  } catch (e) {}

  return (
    <>
      <CookieConsent
        className="f_worksons_r"
        location="bottom"
        enableDeclineButton
        buttonText="Accept All Cookies"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#240b36" }}
        buttonStyle={{ background: "#ff385c", color: "#fff", fontSize: "13px" }}
        declineButtonStyle={{
          background: "transparent",
          color: "#fff",
          fontSize: "13px",
        }}
        declineButtonText={Svg.crossWhite}
        onDecline={() => {}}
        expires={150}
      >
        <p className="mb0 f14">{t("Cookie")}</p>
      </CookieConsent>
      <section className="pt-3 pb-3 bg_theme border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md="4"  className="mobile-center mobMb10">
              <Link to="/">
                <GImage src={Img.logo.default} alt="logo" />
              </Link>
            </Col>
            <Col
              md="8"
              className="text-end d-flex justify-content-end align-items-center  mobile-end-none  mobile-center header_top_menu text-uppercase f14 color_theme"
            >
              <div>
                <Link className="text_d_none mr10" to="/for-your-business">
                  {t("Forbusiness")}
                </Link>
              </div>
              <div>
                <Link className="text_d_none mr5" to="/login">
                  {t("Login")}
                </Link>
                <span className="fs14 colorGrey mr5">{t("Or")}</span>
                <Link className="text_d_none" to="/sign-up">
                  {t("Signup")}
                </Link>
              </div>
              {/* <span>{Svg.bar}</span> */}
            </Col>
          </Row>
        </Container>
      </section>
      {/* <MobileMenu /> */}
    </>
  );
};

export default NewHeader;

// dNoneMd dNoneXs dNoneLg

// const MobileMenu = () => {
//   return (
//     <>
//       <section className="mobileMenu">
//         <ul className="noUl mb0 d-flex align-items-center flex-wrap mb15">
//           <li className="w-100 mb10">
//             <Link to="#" className="text-center f15 colorOrange btnTheme w-100">
//               Log In as Customer
//             </Link>
//           </li>

//           <li className="w-100">
//             <Link
//               to="#"
//               className="text-center f15 colorBlack btnTheme btnBlack w-100"
//             >
//               Log In as Provider
//             </Link>
//           </li>
//         </ul>
//         <ul className="noUl mb20">
//           <li className="mb15">
//             <Link to="#" className="f16 colorBlack mr20">
//               Services
//             </Link>
//           </li>
//           <li className="mb15">
//             <Link to="/provider/signup" className="f16 colorBlack">
//               Join as pro
//             </Link>
//           </li>
//           <li>
//             <Link to="/" className="f16 colorBlack">
//               How it works
//             </Link>
//           </li>
//         </ul>

//         <div>
//           <Link to="#" className="f16  btnTheme mt20">
//             Login
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// };
