import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import Img from "../../../../assets/Img/Img.js";
import GAlign from "../../../../components/Layout/GAlign.js";
import GButton from "../../../../components/Layout/GButton.js";
import ReportsBookingBox from "./ReportsBookingBox.js";
import "./ReportsBox.css";
import Select from "react-select";


const ReportsAppointmentRequested = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <style jsx="true">{`
        .bg_light_report {
          background-color: #5b5d6b;
        }
        .border_ap {
          border: 1px solid #522472;
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
          TextColor="#522472"
          title="Emma Watson"
          backgroundColor="#FBF1FE"
          border="1px solid #FBF1FE"
          phone={Img.treportphone}
          link="+44 876 543 2100"
          phonenumber="+44 876 543 2100"
          email={Img.treportmail}
          emailid="emma@email.com"
          booktext={Img.treporttext}
          alwaystext="Always late"
          Buttontext={Img.reportsuser}
          Buttontext1={Img.reportsedit}
          color="#000"
        />
      </div>
      <div className="heightVh2 bgLightBlue"></div>
   

      <div className="card-body">
        <div className="border_ap position-relative radius pl15 pr15 pt15 pb15">
          <div className="border_button"><GButton  backgroundColor="#522472" transform="uppercase" hoverBg="#522472">{t("Requested")}</GButton></div> 
          <Row className="align-items-center">
            <Col md={12} className="mb-3">
              <label className="fs12">{t("Service")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>

            <Col md={12} className="mb-3">
              <label className="fs12">{t("Subservice")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>

            <Col md={2} className="mb-3">
              <label className="fs12">{t("Dater")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>

            <Col md={2} className="mb-3">
              <label className="fs12">{t("Time")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>
            <Col md={2} className="mb-3">
              <label className="fs12">{t("Duration")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>
            <Col md={6} className="mb-3">
              <label className="fs12">{t("Teammembers")}</label>
              <div className="select_border_edit">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  // options={options}
                />
              </div>
            </Col>

            <Col md={12} className="mb-3">
              <label className="fs15 opacity-75 lm">{t("timeend")}</label>
            </Col>

           
            <Col md={12} className="mt10 text-end">
              <label className="fs15 text-danger  lm"> £ 50</label>
            </Col>
          </Row>
        </div>
      </div>

      <div className="bTop pt20 pb20 pr35 mt10">
            <GAlign align="right">
              <GButton
                mr="15px"
                backgroundColor="#D50303"
                color="#fff"
                border="1px solid #D50303"
                hoverBg="#D50303"
                hoveColor="#fff"
                hoverBorder="1px solid #000"
                transform="capitalize"
              >
                {t("Reject")}
              </GButton>
              <GButton backgroundColor="#5CB84B" transform="capitalize">{t("Accept")}</GButton>
            </GAlign>
          </div>

      
    </>
  );
};

export default ReportsAppointmentRequested;
