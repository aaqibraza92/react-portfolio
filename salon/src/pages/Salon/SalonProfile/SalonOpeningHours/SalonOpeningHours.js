import React, { useState } from "react";
import { CardText, CardTitle, Col, Container, Label, Row } from "reactstrap";
import "./SalonOpeningHours.css";
import TimePicker from "react-time-picker";
import SalonProfileNavigation from "../SalonProfileNavigation/SalonProfileNavigation";
import { useTranslation } from "react-i18next";
import Svg from "../../../../assets/svg/Svg";

const SalonOpeningHours = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [value, onChange] = useState("10:00");
  return (
    <>
      <section className="pt40 pb40 bgLightBlue">
        <Container>
          <h2 className="fs24 mobFs18 lb mb20 mobMb10"><span className="mr15">{Svg.backarrow}</span>{t("Setup")}</h2>
          <SalonProfileNavigation />
          <section className="bgWhite pt20 pb20 pl30 pr30">
            <Row>
              <Col md={12}>
                <CardTitle tag="h2" className="lb fs32">
                  Set standard opening hours
                </CardTitle>
                <CardText>
                  Configure the standard hours of operation for this location.
                </CardText>
              </Col>
              <Col md={12} className="pt20">
                <div>
                  <span>Sunday</span>
                  <Label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </Label>
                  <span>Closed</span>

                  <div className="time_picker">
                    <TimePicker onChange={onChange} value={value} />
                  </div>

                  <div className="time_picker">
                    <TimePicker onChange={onChange} value={value} />
                  </div>

                  <div className="time_picker">
                    <TimePicker onChange={onChange} value={value} />
                  </div>

                  <div className="time_picker">
                    <TimePicker onChange={onChange} value={value} />
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </section>
    </>
  );
};

export default SalonOpeningHours;
