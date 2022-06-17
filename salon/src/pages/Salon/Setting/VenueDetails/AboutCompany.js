import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../../assets/Img/Img";
import GAlign from "../../../../components/Layout/GAlign";
import GHorizontalInput from "../../../../components/Layout/GHorizontalInput";
import GImage from "../../../../components/Layout/GImage/GImage";
import GSpacing from "../../../../components/Layout/GSpacing";
import SalonProfileNavigation from "./SalonProfileNavigation";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import GButton from "../../../../components/Layout/GButton";
import { Link } from "react-router-dom";
import Svg from "../../../../assets/svg/Svg";
import "./VenueDetails.css";
import GLink from "../../../../components/Layout/GLink";
import { useDispatch, useSelector } from "react-redux";
import { HOME_URL, IMAGE_URL } from "../../../../helpers/apiurls";
import WysiwygEditor from "../../../../components/WysiwygEditor/WysiwygEditor";
import { useNavigate } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";
import {
  getAboutCompany,
  updateAboutCompany,
  updateWorkingHours,
} from "../../../../helpers/backend";
import { notify } from "react-notify-toast";
import { usePlacesWidget } from "react-google-autocomplete";
import { AuthGetAboutComp } from "../../../../store/auth/salon/getAboutCompany/actions";
import VenueProfileNavigation from "./Venue/VenueProfileNavigation";
import JoditEditor from "jodit-react";
import axios from "axios";
import Auth from "../../../../helpers/Auth/Auth";

const AboutCompany = (props) => {
  const editor = useRef(null);

  const config = {
    removeButtons: ["source"],
    readonly: false,
  };

  const [aboutComp, setaboutComp] = useState({});
  useEffect(() => {
    getAboutCompanyFunc();
  }, []);

  const getAboutCompanyFunc = () => {
    const options = {
      method: "GET",
      headers: {
        // if file upload "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: "Bearer " + Auth.getToken(), //for token
      },
    };

    axios.get(HOME_URL + "/salon/getAboutCompany", options).then((res) => {
      if (res && res.status === 200) {
        setaboutComp(res.data.data);
      }
    });
  };

  const navigate = useNavigate();
  // const [aboutComp, setaboutComp] = useState( RedStateAuthGetAboutComp && RedStateAuthGetAboutComp );
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [errors, seterrors] = useState({});
  const [latitude, setlatitude] = useState("");
  const [longitude, setlongitude] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setaboutComp({ ...aboutComp, [name]: value });
  };
  const getWswing = (val) => {
    setaboutComp({
      ...aboutComp,
      description: val,
    });
  };
  const validate = () => {
    const regex = new RegExp(
      "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$"
    );
    //this reg exp for both mobile and shopEmail and seperate
    const errors = {};
    if (aboutComp.address.trim() === "") {
      errors.address = "Please enter address";
    }

    if (
      aboutComp.city === null ||
      aboutComp.city === "" ||
      aboutComp.city === undefined
    ) {
      errors.city = "Please enter city";
    }
    if (
      aboutComp.postalCode === null ||
      aboutComp.postalCode === "" ||
      aboutComp.postalCode === undefined
    ) {
      errors.postalCode = "Please enter postalCode";
    }
    if (
      aboutComp.shopPhone === null ||
      aboutComp.shopPhone === "" ||
      aboutComp.shopPhone === undefined
    ) {
      errors.shopPhone = "Please enter shopPhone";
    }
    if (regex.test(aboutComp.shopPhone) === false) {
      errors.shopPhone = "Please enter valid shopPhone no.";
    }

    if (regex.test(aboutComp.shopEmail) === false) {
      errors.shopEmail = "Please enter shopEmail or valid shopEmail ";
    }

    if (
      aboutComp.website === null ||
      aboutComp.website === "" ||
      aboutComp.website === undefined
    ) {
      errors.website = "Please enter website";
    }
    if (
      aboutComp.description === null ||
      aboutComp.description === "" ||
      aboutComp.description === undefined
    ) {
      errors.description = "Please enter description";
    }

    seterrors(errors);
    //console.log(errors);
    return errors;
  };

  const onSubmitClick = () => {
    validate();
    updateAboutCompany(aboutComp).then((res) => {
      if (res.status === 200) {
        let myColor = { background: "#4bb543", text: "#FFFFFF" };
        notify.show(res.message, "custom", 5000, myColor);
        navigate("/salon/setting/opening-hours");
      }
      if (res.status === 202) {
        let myColor = { background: "#ff385c", text: "#FFFFFF" };
        notify.show("Please fill required fields", "custom", 5000, myColor);
      }
    });
    //salon/setting/opening-hours
  };
  const JoditHandleChange = (val) => {
    setaboutComp({
      ...aboutComp,
      description: val,
    });
  };
  return (
    <>
      <section className="pt40 pb40 bgLightBlue">
        {console.log("aboutComp", aboutComp)}
        <Container>
          {props.venue ? (
            ""
          ) : (
            <h2 className="fs24 mobFs18 lb mb20 mobMb10">{t("Setup")}</h2>
          )}

          {props.venue ? (
            <VenueProfileNavigation />
          ) : (
            <SalonProfileNavigation />
          )}

          <section className="bgWhite">
            <section className=" pt20 pb20 pl30 pr30">
              <h2 className="fs24 lb mb20 mobMb10">{t("Information")}</h2>
              <Row className="align-items-center mb15">
                <Col lg={4} md={4}>
                  <GImage
                    src={
                      aboutComp && aboutComp.profileImage !== ""
                        ? IMAGE_URL + aboutComp.profileImage
                        : Img.about
                    }
                    width="100%"
                    radius="4px"
                  />
                </Col>

                <Col lg={8} md={8}>
                  <h3 className="fs18 mobFs14 mb0 ml15">{t("Good")}</h3>
                </Col>
              </Row>
              <h3 className="fs18 mobFs14 mb30 mobMb15 lm">{t("Located")}</h3>
              <Row className="bBottom pb20 mb20 mobMb10">
                <Col md={6}>
                  <GSpacing>
                    <Row>
                      <Col className="text-end" md={4}>
                        <span className="labelInput">Address: </span>
                      </Col>

                      <Col md={8}>
                        <div>{aboutComp && aboutComp.address}</div>
                      </Col>
                    </Row>
                  </GSpacing>
                  <GSpacing paddingBottom="15px">
                    <Row>
                      <Col className="text-end" md={4}>
                        <span className="labelInput">{t("City")}: </span>
                      </Col>

                      <Col md={8}>
                        <div>{aboutComp && aboutComp.city}</div>
                      </Col>
                    </Row>
                  </GSpacing>

                  <GSpacing paddingBottom="15px">
                    <Row>
                      <Col className="text-end" md={4}>
                        <span className="labelInput">{t("Zip")}: </span>
                      </Col>

                      <Col md={8}>
                        <div>{aboutComp && aboutComp.postalCode}</div>
                      </Col>
                    </Row>
                  </GSpacing>
                  <GSpacing paddingBottom="15px">
                    <Row>
                      <Col className="text-end" md={4}>
                        <span className="labelInput">{t("State")}: </span>
                      </Col>

                      <Col md={8}>
                        <div>{aboutComp && aboutComp.state}</div>
                      </Col>
                    </Row>
                  </GSpacing>
                  <Row className="align-items-center">
                    <Col md={12}>
                      <GSpacing paddingBottom="15px">
                        <Row>
                          <Col className="text-end" md={4}>
                            <span className="labelInput">{t("Country")}: </span>
                          </Col>

                          <Col md={8}>
                            <div>{aboutComp && aboutComp.country}</div>
                          </Col>
                        </Row>
                      </GSpacing>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <h4 className="colorLightGrey fs14 mb10">{t("Location")}</h4>

                  <iframe
                    key="as787"
                    title="542313431asd45"
                    src={`https://maps.google.com/maps?q=${
                      aboutComp && aboutComp.coordinates
                    }&z=15&output=embed`}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </Col>
              </Row>

              <h3 className="fs18 mobFs14 mb30 mobMb15 lm">{t("Customers")}</h3>
              <Row className="bBottom pb20 mb20 mobMb10">
                <Col md={6}>
                  <GSpacing paddingBottom="15px">
                    <GHorizontalInput
                      label={t("Phone")}
                      placeholder={t("Phone")}
                      type="text"
                      value={aboutComp && aboutComp.shopPhone}
                      name="shopPhone"
                      onChange={(e) => handleInputChange(e)}
                      validationMsg={errors.shopPhone}
                      showvalidationMsg={errors.shopPhone && true}
                    />
                  </GSpacing>
                  <GSpacing paddingBottom="15px">
                    <GHorizontalInput
                      label={t("Email")}
                      placeholder="Berlin"
                      type="email"
                      value={aboutComp && aboutComp.shopEmail}
                      name="shopEmail"
                      onChange={(e) => handleInputChange(e)}
                      validationMsg={errors.shopEmail}
                      showvalidationMsg={errors.shopEmail && true}
                    />
                  </GSpacing>
                  <GHorizontalInput
                    label={t("Website")}
                    placeholder={t("Website")}
                    type="text"
                    value={aboutComp && aboutComp.website}
                    name="website"
                    onChange={(e) => handleInputChange(e)}
                    validationMsg={errors.website}
                    showvalidationMsg={errors.website && true}
                  />
                </Col>
                <Col md={6}>
                  <h4 className="colorLightGrey fs14 mb10">
                    {t("Description")}
                  </h4>

                  <JoditEditor
                    ref={editor}
                    value={
                      aboutComp &&
                      aboutComp.description &&
                      aboutComp.description
                    }
                    onChange={JoditHandleChange}
                  />

                  {errors.description && (
                    <p
                      style={{
                        color: "#ff385c",
                        marginTop: "4px",
                        marginLeft: "10px",
                      }}
                    >
                      {errors.description}
                    </p>
                  )}
                </Col>
              </Row>
            </section>
            <section className=" pl30 pr30">
              <GAlign align="between" alignV="center" className="mb20 mobMb10">
                <h3 className="fs18 colorBlack mb0 fLight">{t("Photos")}</h3>
                <GButton
                  backgroundColor="#fff"
                  color="#000"
                  border="1px solid #000"
                >
                  <span className="mr10">{Svg.downloadicon}</span>{" "}
                  {t("Download")}
                  {/* {"HOME_URL"+HOME_URL} */}
                </GButton>
              </GAlign>

              <Row className="mb20 mobMb10 gy-3">
                {aboutComp &&
                  aboutComp.verifiedShopImages &&
                  aboutComp.verifiedShopImages !== "" &&
                  aboutComp.verifiedShopImages.map((elem, ind) => {
                    return (
                      <>
                        <Col kye={ind} lg={3}>
                          <GImage
                            radius="7px"
                            width="100%"
                            src={IMAGE_URL + elem.image}
                          />
                        </Col>
                      </>
                    );
                  })}
              </Row>
            </section>

            <GAlign align="right" className="bTop pt20 pb20 pr30">
              <GButton onClick={onSubmitClick}>{t("Next")}</GButton>
            </GAlign>
          </section>
        </Container>
      </section>
    </>
  );
};

//export default AboutCompany;

// AboutCompany.propTypes = {
//   aboutComp: PropTypes.array,
//   onGetAboutComp: PropTypes.func,
// };

// const mapStateToProps = ({ salonAboutCompReducer }) => ({
//   aboutComp: salonAboutCompReducer.getAboutCompInfo,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onGetAboutComp: () => dispatch(AuthGetAboutComp()),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(AboutCompany);
export default AboutCompany;
