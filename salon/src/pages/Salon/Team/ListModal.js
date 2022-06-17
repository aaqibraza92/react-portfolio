import React, { useState } from "react";
import Svg from "../../../assets/svg/Svg";
import AlertModal from "../../../components/AlertModal/AlertModal";
import GAlign from "../../../components/Layout/GAlign";
import GImage from "../../../components/Layout/GImage/GImage";
import { IMAGE_URL } from "../../../helpers/apiurls";
import EditDay from "./EditDay";
import TeamHours from './TeamHours';
const ListModal = (props) => {
  const [addremoveday, setaddremoveday] = useState(false);
  return (
    <div className="wrapperListModal">
      <GAlign className="bBottom pb15">
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
          <div className="fs13 colorMedGrey fw700 text-capitalize">
            Wednesday 16 march
          </div>
        </div>
      </GAlign>

      <div className="bBottom pb15 pt15">
        <h4 className="fs15 fw700 colorBlack">Schedule type: Weekly</h4>
        <div className="fs13 colorMedGrey fw700 text-capitalize">
          From: 1 November 2021 · 46.0 hrs/week
        </div>
      </div>

      <div className="bBottom pb15 pt15">
        <button onClick={()=>AlertModal.show(<EditDay data={props.data}/>)} className="noBtn d-flex justify-content-between w-100">
          <div>Edit Day</div>
          <div>{Svg.rightArrow}</div>
        </button>
      </div>

      <div className="bBottom pb15 pt15">
        <button className="noBtn d-flex justify-content-between w-100">
          <div>Add Day Off/ Remove Day Off</div>
          <div>
            <label htmlFor="serviceLists" className="switch">
              <input
                id="serviceLists"
                onChange={(e) => setaddremoveday(!addremoveday)}
                type="checkbox"
                name="monCheck"
                defaultChecked={addremoveday && addremoveday}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </button>
      </div>

      <div className="pt15">
        <button onClick={()=>AlertModal.show(<TeamHours/>,"",()=>{},"lg")} className="noBtn d-flex justify-content-between w-100">
          <div>Working Hours</div>
          <div>{Svg.rightArrow}</div>
        </button>
      </div>
    </div>
  );
};

export default ListModal;
