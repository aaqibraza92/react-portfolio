import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import Img from "../../../../assets/Img/Img.js";
import GButton from "../../../../components/Layout/GButton.js";
import ReportsBookingBox from "./ReportsBookingBox.js";
import "./ReportsBox.css";

const ReportsCompleted = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <style jsx="true">{`
        .bg_light_report {
          background-color: #5b5d6b;
        }
        .border_blue {
          border: 1px solid #37a3d2;
        }
        .border_button {
         position: absolute;
         top: 0px;
         right: 0px;
       }
      `}</style>
      <div className="card-body">
        <ReportsBookingBox
          firsttext="Booked on 22 Mar via Bakim Randevu (35% fee). Order ref#"
          id="T807610015"
          firstname="FIRST VISIT"
          TextColor="#37A3D2"
          title="Emma Watson"
          backgroundColor="#EAF6FB"
          border="1px solid #EAF6FB"
          phone={Img.reportphone}
          link="+44 876 543 2100"
          phonenumber="+44 876 543 2100"
          email={Img.reportmail}
          emailid="emma@email.com"
          booktext={Img.reporttext}
          alwaystext="Always late"
          Buttontext={Img.reportsuser}
          Buttontext1={Img.reportsedit}
          color="#000"
        />
      </div>
      <div className="heightVh2 bgLightBlue"></div>
      <div>
        <div className="pl35 pt10 pb10">
          <p className="lm fs14 text-uppercase mb-0">{t("Transactions")}</p>
        </div>
      </div>

      <div className="bg_light_report card-body text-white rounded-0">
        <div className="">
          <Row>
            <Col md={4}>2022-03-07 17:40:34</Col>
            <Col md={4} className="text-center">
              2 Services
            </Col>
            <Col md={4} className="text-end">
              34$
            </Col>
          </Row>
        </div>
      </div>

      <div className="card-body">
        <div className="border_blue position-relative radius pl15 pr15 pt15 pb15">
          <div className="border_button"><GButton  backgroundColor="#37A3D2" transform="uppercase" hoverBg="#37A3D2">{t("Complete")}</GButton></div> 
          <Row>
            <Col md={12}>
              <label className="fs12">{t("Service")}</label>
              <input
                type="text"
                name="name"
                className="form_custom"
                placeholder={t("Service")}
              />
            </Col>

            <Col md={12}>
              <label className="fs12">{t("Subservice")}</label>
              <input
                type="text"
                name="name"
                className="form_custom"
                placeholder={t("Subservice")}
              />
            </Col>

            <Col md={2}>
              <label className="fs12">{t("Dater")}</label>
              <input
                type="text"
                name="name"
                className="form_custom"
                placeholder="25/05/2022"
              />
            </Col>

            <Col md={2}>
              <label className="fs12">{t("Time")}</label>
              <input
                type="text"
                name="name"
                className="form_custom"
                placeholder="10:30"
              />
            </Col>
            <Col md={2}>
              <label className="fs12">{t("Duration")}</label>
              <input
                type="text"
                name="name"
                className="form_custom"
                placeholder="30 min"
              />
            </Col>
            <Col md={6}>
              <label className="fs12">{t("Teammembers")}</label>
              <input
                type="text"
                name="name"
                className="form_custom"
                placeholder="Team member"
              />
            </Col>

            <Col md={12}>
              <label className="fs15 opacity-75 lm">{t("timeend")}</label>
            </Col>

            <Col md={12} className="mt10 d-flex justify-content-between">
              <label className="fs15 text-black  lm"><u>{t("Addnote")}</u></label>
              <label className="fs15 text-black  lm">£ 50</label>
            </Col>
          </Row>
        </div>
      </div>

      <div className="bgLightBlue pt15 pl35 pb15 reports_bg rounded-0">
        <div className="">
          <Row>
            <Col md={12}>15 minute gap</Col>
          </Row>
        </div>
      </div>

      <div className="card-body">
        <div className="border_blue position-relative radius pl15 pr15 pt15 pb15">
          <div className="border_button"><GButton  backgroundColor="#37A3D2" transform="uppercase" hoverBg="#37A3D2">{t("Complete")}</GButton></div> 
          <Row>
            <Col md={12}>
              <label className="fs12">{t("Service")}</label>
              <input
                type="text"
                name="name"
                className="form_custom"
                placeholder={t("Service")}
              />
            </Col>

            <Col md={12}>
              <label className="fs12">{t("Subservice")}</label>
              <input
                type="text"
                name="name"
                className="form_custom"
                placeholder={t("Subservice")}
              />
            </Col>

            <Col md={2}>
              <label className="fs12">{t("Dater")}</label>
              <input
                type="text"
                name="name"
                className="form_custom"
                placeholder="25/05/2022"
              />
            </Col>

            <Col md={2}>
              <label className="fs12">{t("Time")}</label>
              <input
                type="text"
                name="name"
                className="form_custom"
                placeholder="10:30"
              />
            </Col>
            <Col md={2}>
              <label className="fs12">{t("Duration")}</label>
              <input
                type="text"
                name="name"
                className="form_custom"
                placeholder="30 min"
              />
            </Col>
            <Col md={6}>
              <label className="fs12">{t("Teammembers")}</label>
              <input
                type="text"
                name="name"
                className="form_custom"
                placeholder="Team member"
              />
            </Col>

            <Col md={12}>
              <label className="fs15 opacity-75 lm">{t("timeend")}</label>
            </Col>

            <Col md={12} className="mt10 d-flex justify-content-between">
              <label className="fs15 text-black  lm"><u>{t("Addnote")}</u></label>
              <label className="fs15 text-black  lm">£ 50</label>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ReportsCompleted;
