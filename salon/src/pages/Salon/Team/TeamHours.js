import React, { useState, useEffect } from "react";
import TimePicker from "react-time-picker";
import { Col, Row } from "reactstrap";
import GButton from "../../../components/Layout/GButton";
import "../Setting/VenueDetails/VenueDetails.css";

const TeamHours = (props) => {
  return (
    <>
      <div className="bBottom pt15 pb10 mb30">
        <h4 className="fs14 text-uppercase colorBlack fw700">Working Hours</h4>
      </div>
      <div className="mb20">
        <Row>
          <Col lg={4}>
            <div className="fs13 colorMedGrey fw700 text-capitalize">
              START DATE
            </div>
            <div className="fs15 colorBlack fw700 text-capitalize">
              28 March 2022
            </div>
          </Col>
          <Col lg={8}>
            <div className="fs13 colorMedGrey fw700 text-uppercase">Total</div>
            <div className="fs15 colorBlack fw700 text-capitalize">
              60.0 hrs / week
            </div>
          </Col>
        </Row>
      </div>

      {[0, 1, 2, 3, 4, 5, 7].map((e, i) => {
        return <TimeTable />;
      })}
      <div className="mt15">
      <GButton>Save</GButton>
      </div>
    </>
  );
};

export default TeamHours;

const TimeTable = (props) => {
  return (
    <>
      <div className="mb10">
        <Row className="align-items-center">
          <Col lg={4}>
            <div className="d-flex align-items-center">
              <div className="openfirst">
                <span>Monday</span>
              </div>
              <div className="opensecond">
                <label htmlFor="serviceLists" className="switch">
                  <input
                    id="serviceLists"
                    onChange={(e) => {}}
                    type="checkbox"
                    name="monCheck"
                    defaultChecked={true}
                  />
                  <span className="slider round"></span>
                </label>

                <span className="ml10">Opened</span>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="d-flex align-items-center">
              <div className="openthird">
                <div className="time_picker">
                  <TimePicker onChange={() => {}} value="9:00" />
                </div>
              </div>
              <div className="openfourth ml15 mr15">
                <span>To</span>
              </div>

              <div className="openfive">
                <div className="time_picker">
                  <TimePicker onChange={() => {}} value="20:00" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
