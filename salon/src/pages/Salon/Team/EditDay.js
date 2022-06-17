import React, { useState } from "react";
import Svg from "../../../assets/svg/Svg";
import AlertModal from "../../../components/AlertModal/AlertModal";
import CmnRadioBorder from "../../../components/Layout/CmnRadioBorder/CmnRadioBorder";
import GAlign from "../../../components/Layout/GAlign";
import GImage from "../../../components/Layout/GImage/GImage";
import { IMAGE_URL } from "../../../helpers/apiurls";
import TeamHours from "./TeamHours";
import TimePicker from "react-time-picker";
import { Col, Row } from "reactstrap";
import GButton from "../../../components/Layout/GButton";

const EditDay = (props) => {
  const [addremoveday, setaddremoveday] = useState(false);
  const [timeSchedule, settimeSchedule] = useState("");
  return (
    <div className="wrapperListModal">
      <div className="bBottom pb15 pt15 mb15">
        <h4 className="fs15 fw700 colorBlack text-uppercase">Edit duty time</h4>
      </div>
      <GAlign alignV="center" className="bBottom pb15">
        <div className="imgWrapperRota">
          <GImage
            width="100%"
            height="100%"
            radius="100%"
            src={IMAGE_URL + props.data.profileImage}
          />
        </div>
        <div className="ml10">
          <div className="fs15 colorBlack fw700 text-capitalize">
            {props.data.employeeName && props.data.employeeName}
          </div>
        </div>
      </GAlign>

      <div className="pb15 pt15">
        <h4 className="fs15 fw700 colorBlack">Tue. 15 March 2022</h4>

        <div className="mb0Radio">
          <CmnRadioBorder
            onChange={(e) => settimeSchedule(e.target.value)}
            value="Use standard times"
            name="time"
            label="Use standard times"
            id="time1"
          />
        </div>
        <div className="mb0Radio mb30">
          <CmnRadioBorder
            onChange={(e) => settimeSchedule(e.target.value)}
            name="time"
            value="Custom hours"
            label="Custom hours"
            id="time2"
          />
        </div>
        {timeSchedule === "Custom hours" && (
          <Row>
            <Col lg={6}>
              <div className="fs14 mb3 colorMedgrey">From</div>
              <div className="time_picker">
                <TimePicker
                  className="w-100"
                  onChange={() => {}}
                  value="9:00"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="fs14 mb3 colorMedgrey">To</div>
              <div className="time_picker">
                <TimePicker
                  className="w-100"
                  onChange={() => {}}
                  value="20:00"
                />
              </div>
            </Col>
          </Row>
        )}

        <div className="mt20">
          <GButton>Save</GButton>
        </div>
      </div>
    </div>
  );
};

export default EditDay;
