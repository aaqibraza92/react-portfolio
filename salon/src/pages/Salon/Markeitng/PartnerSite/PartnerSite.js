import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CardTitle, Col, Container, Label, Row } from "reactstrap";
import Img from "../../../../assets/Img/Img";
import AlertModal02 from "../../../../components/AlertModal02/AlertModal02";
import SalonAuthHeader from "../../../../components/Common/Header/Salon/SalonAuthHeader";
import CmnRadioBorder from "../../../../components/Layout/CmnRadioBorder/CmnRadioBorder";
import GButton from "../../../../components/Layout/GButton";
import GCheckbox from "../../../../components/Layout/GCheckbox";
import GIconInput from "../../../../components/Layout/GIconInput";
import GImage from "../../../../components/Layout/GImage/GImage";
import GRadioWithRightIcon from "../../../../components/Layout/GRadioWithRightIcon";
import SalonSidebar from "../../SalonSidebar/SalonSidebar";

const AutomatedMessagingBox = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <style jxs>{`
      .text_green {
        color: #075770;
        text-decoration: underline !important;
      }
      .max_h {
        max-height: 88vh;
        overflow-y: auto;
      }
    `}</style>
      <div className="border radius bgLightBlue pt25 pb15 pr25 pl25 position-relative mb20">
        <div className="right_side">
          <GImage src={Img.marketing} />
        </div>
        <h4 className="fs20 lm mb20 width90">{t("PartnerSiteSubHeading")}</h4>
        <div className="width90">
          <p>{t("PartnerSiteSubtext")}</p>
          <p>
            {t("PartnerSiteSubtextSecond")}{" "}
            <Link className="text_green" to="#">
              {t("Learn_more")}
            </Link>
          </p>
          <div className="d-flex align-items-center">
            <b>
              <label className="mr10"> {t("Enablepartnerside")}</label>
            </b>
            <Label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </Label>
          </div>
        </div>
      </div>
    </>
  );
};

const PartnerSite = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <div className="d-flex">
        <SalonSidebar />
        <Container fluid className="p-0 position-relative salon_pc_container">
          <SalonAuthHeader />
          {/* <AutomatedMessagingTab /> */}
          <div className="card-body max_h">
            <h1 className="fs24 lb mb20">{t("PartnerSite")}</h1>
            <Row>
              <Col xl={9} lg={12} md={12}>
                <AutomatedMessagingBox />
                <h6 className="fs18 lm mb20">{t("Theme")}</h6>

                <div>
                  <Row className="gx-5">
                    <Col md={4} className="mb20">
                      <GRadioWithRightIcon
                        id="Female"
                        value="Female"
                        name="Female"
                        label="Hipster"
                      />
                    </Col>

                    <Col md={4} className="mb20">
                      <GRadioWithRightIcon
                        id="male"
                        value="Female"
                        name="Female"
                        label="Blossom"
                      />
                    </Col>

                    <Col md={4} className="mb20">
                      <GRadioWithRightIcon
                        id="Feale"
                        value="Female"
                        name="Female"
                        label="Concierge"
                      />
                    </Col>
                  </Row>
                </div>

                <h6 className="fs18 lm mb20">{t("WebsiteAddress")}</h6>

                <div className="mb20">
                  <Row className="align-items-center">
                    <Col className="" md={3}>
                      <span className="mr10">
                        <GImage src={Img.country} />
                      </span>
                      <span>{t("Address")}:</span>
                    </Col>

                    <Col className="" md={5}>
                      <GIconInput value="mywebdomain" type="text" />
                    </Col>

                    <Col className="" md={4}>
                      <span>.mybakimrandevu.co.uk</span>
                    </Col>
                  </Row>
                </div>

                <h6 className="fs18 lm mb15">{t("SocialLinks")}</h6>
                <p>{t("SocialLinksSubText")}</p>

                <div>
                  <Row className="align-items-center">
                    <Col className="" md={3}>
                      <span className="mr10">
                        <GImage src={Img.facebook} />
                      </span>
                      <span>{t("PFacebook")}</span>
                    </Col>

                    <Col className="" md={5}>
                      <GIconInput value="mywebdomain" type="text" />
                    </Col>
                  </Row>

                  <Row className="align-items-center">
                    <Col className="" md={3}>
                      <span className="mr10">
                        <GImage src={Img.instagram} />
                      </span>
                      <span>{t("PInstagram")}</span>
                    </Col>

                    <Col className="" md={5}>
                      <GIconInput value="mywebdomain" type="text" />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <div className="bTop pt15 pb15 w-100 position-absolute bottom_0 pr25 text-end">
            <span className="mr15">
              <GButton backgroundColor="#37A3D2">
                {t("Viewpartnersite")}
              </GButton>
            </span>
            <GButton>{t("Save")}</GButton>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PartnerSite;
