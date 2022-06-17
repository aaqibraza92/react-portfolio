import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import Img from "../../../../assets/Img/Img.js";
import GButton from "../../../../components/Layout/GButton.js";
import ReportsBookingBox from "./ReportsBookingBox.js";
import "./ReportsBox.css";

const ReportsCancelled = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <style jsx="true">{`
        .bg_light_report {
          background-color: #5b5d6b;
        }
        .border_danger {
          border: 1px solid #D50303;
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
          TextColor="#D50303"
          title="Emma Watson"
          backgroundColor="#FBE5E5"
          border="1px solid #FBE5E5"
          phone={Img.dreportphone}
          link="+44 876 543 2100"
          phonenumber="+44 876 543 2100"
          email={Img.dreportmail}
          emailid="emma@email.com"
          booktext={Img.dreporttext}
          alwaystext="Always late"
          Buttontext={Img.reportsuser}
          Buttontext1={Img.reportsedit}
          color="#000"
        />
      </div>
      <div className="heightVh2 bgLightBlue"></div>
   

      <div className="card-body">
        <div className="border_danger position-relative radius pl15 pr15 pt15 pb15">
          <div className="border_button"><GButton  backgroundColor="#D50303" transform="uppercase" hoverBg="#D50303">{t("Cancelled")}</GButton></div> 
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
              <label className="fs15 text-danger  lm">£ 50</label>
            </Col>
          </Row>
        </div>
      </div>

      
    </>
  );
};

export default ReportsCancelled;
