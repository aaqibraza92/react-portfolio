import React from "react";
import { useTranslation } from "react-i18next";
import GImageCircleUpload from "../../../components/Layout/GImageCircleUpload/GImageCircleUpload";
import GCheckbox from "../../../components/Layout/GCheckbox";
import { Col, Container, Row } from "reactstrap";
// import CmnRadioBorder from "../../../components/Layout/CmnRadioBorder/CmnRadioBorder";
import GButton from "../../../components/Layout/GButton";
import GAlign from "../../../components/Layout/GAlign";
import Select from "react-select";
import Svg from "../../../assets/svg/Svg";

const AddClientDetails = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <>
      <section className="">
        <h3 className="fs14 lb mb0 bBottom pt20 pb20 pl40">{t("Addclientdetails")}</h3>

        <Container>
          <div className="card-body">
            <Row>
              <Col md={2} className="text-center">
                <GImageCircleUpload />
              </Col>
              <Col md={10}>
                <div>
                  <Row>
                    <Col lg={6}>
                      <label>
                        {t("Firstname")}
                        <span className="giconinput_required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form_custom"
                        placeholder={t("Firstname")}
                      />
                    </Col>
                    <Col lg={6}>
                      <label>
                        {t("Lastname")}{" "}
                        <span className="giconinput_required">*</span>{" "}
                      </label>
                      <input
                        type="email"
                        className="form_custom"
                        placeholder={t("Lastname")}
                      />
                    </Col>
                    <Col lg={6}>
                      <label>{t("Phone")}</label>
                      <input
                        type="number"
                        className="form_custom"
                        placeholder={t("Phone")}
                      />
                    </Col>
                    <Col lg={6}>
                      <label>{t("Email")}</label>
                      <input
                        type="email"
                        className="form_custom"
                        placeholder={t("Email")}
                      />
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col md="12" className="mb-3">
                <div className="border radius pt15 pb15 pl15 pr15 bgLightBlue">
                  <GCheckbox id="provide" label={t("MarketingCommunication")} />
                  <p className="fs14 pl28 mb-0">
                    {t("MarketingCommunicationSubText")}
                  </p>
                </div>
              </Col>

              <Col md="12" className="mb-3">
                <div className="border radius pt15 pb15 pl15 pr15 bgLightBlue">
                  <GCheckbox id="provides" label={t("Prepaymentrequireds")} />
                  <p className="fs14 pl28 mb-0">
                    {t("Prepaymentrequiredsubtext")}
                  </p>
                </div>
              </Col>
            </Row>
          </div>

          <div></div>
          <div className="card-body pt-0 pb-0">
            <Row>
              <Col lg={6} className="mb8">
                <label>{t("Postalcode")}</label>
                <input
                  type="Number"
                  className="form_custom"
                  placeholder={t("Postalcode")}
                />
              </Col>
              <Col lg={6} className="mb8">
                <div className="select_border_edit">
                  <label>{t("Gender")}</label>
                  <Select
                    label="Account type *"
                    className="themeSelect"
                    classNamePrefix="themeSelect"
                  />
                </div>
              </Col>

              <Col lg={4} className="mb8">
                <div className="select_border_edit">
                  <label>{t("Monthofbirth")}</label>
                  <Select
                    label="Account type *"
                    className="themeSelect"
                    classNamePrefix="themeSelect"
                  />
                </div>
              </Col>
              <Col lg={4} className="mb8">
                <label>{t("Dateofbirth")}</label>
                <input
                  type="Number"
                  className="form_custom"
                  placeholder={t("Dateofbirth")}
                />
              </Col>
              <Col lg={4} className="mb8">
                <label>{t("Yearofbirth")}</label>
                <input
                  type="Number"
                  className="form_custom"
                  placeholder={t("Yearofbirth")}
                />
              </Col>

              <Col lg={12} className="mb8">
                <div className="salon_note position-relative">
                  <label>{t("Notes")}</label>
                  <span className="icon_note">{Svg.book}</span>
                  <textarea
                    className="h_130"
                    name="notes"
                    placeholder="Add note here"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        <div className="bTop pt20 pr20 mt10 pb20">
          <GAlign align="right">
            <GButton
              mr="15px"
              backgroundColor="#fff"
              color="#000"
              border="1px solid #707070"
              hoverBg="#fff"
              hoveColor="#000"
              hoverBorder="1px solid #000"
              transform="capitalize"
            >
              {t("Close")}
            </GButton>
            <GButton transform="capitalize">{t("Save")}</GButton>
          </GAlign>
        </div>
      </section>
    </>
  );
};

export default AddClientDetails;
