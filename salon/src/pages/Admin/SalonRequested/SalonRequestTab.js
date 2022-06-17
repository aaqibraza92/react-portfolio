import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Col, Row , Label} from "reactstrap";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { adminSalonUpdateStatus } from "../../../helpers/backend/admin";
import { notify } from "react-notify-toast";
import { useNavigate, Navigate} from "react-router-dom";

const options = [
  { value: "Verified", label: "Verified" },
  { value: "Rejected", label: "Rejected" },
  { value: "Scheduled photoshoot", label: "Scheduled photoshoot" },
  { value: "Registered", label: "Registered" },
  { value: "Had first call", label: "Had first call" },
  { value: "Final review & approved", label: "Final review & approved" },
];


const SalonRequestTab = (props) => {
  const loc = useLocation();
  const saloniD = loc.hash.replace("#", "");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const handleSalonStatusChange = (e) => {
    console.log("abc",e);
    if (props.dataState.salonid && e.value) {
      var iData = {
        salonid: props.dataState.salonid,
        status: e.value,
      };

      adminSalonUpdateStatus(iData).then((resp) => {
       
        if (resp.status === 200) {
          // console.log("gett",resp);
          let myColor = { background: "#4bb543", text: "#FFFFFF" };
          notify.show(resp.message, "custom", 5000, myColor);
       
          // setTimeout(() => {
            navigate('/admin/salon-requested')
          //  }, 1000);  
  
        } else {
          let myColor = { background: "#FF385C", text: "#FFFFFF" };
          notify.show(resp.message, "custom", 5000, myColor);
        }
      });
    }
  };


  return (
    <div className="bBottom card-body-box radius_left_top">
      <Row className="align-items-center">
        <Col md={9}>
          <div className="salon_services_tab">
            <NavLink
              className="radius_left_top"
              to={`/admin/create-salon-request/#${saloniD}`}
            >
              <span className="">{t("SalonDetail")}</span>
            </NavLink>
            {saloniD !== "" && (
              <NavLink to={`/admin/salon-images/#${saloniD}`}>
                <span className="">{t("Salon Images")}</span>
              </NavLink>
            )}
          </div>
        </Col>

        <Col md={3} className="pr46">
          <div>
            <div className="select_border salon_select">
          <select className="themeSelect selectbox" name="status" onChange={(e) => {props.handleInputChange(e)}} selected={props.dataState.status}   required>
              <option value="">Select Status</option>
              {options && options.map((item, i) =>

              <option key={item.label} value={item.label} selected={props.dataState.status === item.label ? true : false}>{item.label}</option>
              
              )};
          </select>
   
              {/* <Select
                label="Account type *"
                className="themeSelect"
                classNamePrefix="themeSelect"
                options={options}
                // options={Columns}
                value={columns}
                // onChange={(e) => setcolumns(e)}
              /> */}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SalonRequestTab;
