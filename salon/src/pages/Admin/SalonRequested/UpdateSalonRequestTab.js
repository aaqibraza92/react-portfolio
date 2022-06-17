import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Select from "react-select";
import { useTranslation } from "react-i18next";

const options = [
  { value: "Verified", label: "Verified" },
  { value: "Scheduled photoshoot", label: "Scheduled photoshoot" },
  { value: "Registered", label: "Registered" },
  { value: "Had first call", label: "Had first call" },
  { value: "Final review & approved", label: "Final review & approved" },
];

const UpdateSalonRequestTab = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div className="bBottom card-body-box radius_left_top">
      <Row className="align-items-center">
        <Col md={9}>
          <div className="salon_services_tab">
            <NavLink
              className="radius_left_top"
              to="/admin/update-salon-request"
            >
              <span className="">{t("SalonDetail")}</span>
            </NavLink>
            <NavLink to="/admin/update-salon-images">
              <span className="">{t("Salon Images")}</span>
            </NavLink>
          </div>
        </Col>
      
        <Col md={3} className="pr46">
          <div>
            <div className="select_border salon_select">
              <Select
                label="Account type *"
                className="themeSelect"
                classNamePrefix="themeSelect"
                options={options}
                // options={Columns}
                // value={columns}
                // onChange={(e) => setcolumns(e)}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UpdateSalonRequestTab;
