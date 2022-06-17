import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import GCheckbox from "../../../components/Layout/GCheckbox";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import { notify } from "react-notify-toast";
import { updateSalonServicesDistribution } from '../../../helpers/backend/salon'
import GButton from "../../../components/Layout/GButton";
const Distribution = ({services}) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
    var initialFormState = {
      salonserviceid : services.serviceid,
      isFeatured : services.isFeatured ? services.isFeatured :false,
      sellServiceOnline : services.sellServiceOnline ? services.sellServiceOnline :false,
      appointmentleadTime : services.appointmentleadTime ? services.appointmentleadTime :0,
      monday:  services.monday ? services.monday : false,
      tuesday: services.tuesday ? services.tuesday : false,
      wednesday : services.wednesday ? services.wednesday : false,
      thursday: services.thursday ? services.thursday : false,
      friday: services.friday ? services.friday : false,
      saturday : services.saturday ? services.saturday : false,
      sunday: services.sunday ? services.sunday : false,
    }

    const [selectedService, setSelectedService] = useState(initialFormState);
    const handleInputChange = (event) => {
      const { name, value, type } = event.target;
      if (type === "checkbox") {
        setSelectedService({ ...selectedService, [name]: value === "on" ? true : false });
      } else {
        setSelectedService({ ...selectedService, [name]: value });
      }
   
  }
  const handleFormSubmit = () => {
    updateSalonServicesDistribution(selectedService).then((res) => {
        if (res.status === 200) {
          let myColor = { background: "#4bb543", text: "#FFFFFF" };
          notify.show(res.message, "custom", 5000, myColor);
        }
        if (res.status === 201) {
          let myColor = { background: "#ff385c", text: "#FFFFFF" };
          notify.show("Please fill required fields", "custom", 5000, myColor);
        }
    });
  }

  return (
    <>
      <div className="card_thank mb10">
        <Container>
          <Row>
            <Col md={12} className="mt20 ">
              <label className="mb10">{t("Howwould")}</label>
            </Col>
            <Col md={12}>
              <div>
                <GCheckbox
                  name="isFeatured"
                  id="isFeatured"
                  label="Feature service (max 5 per venue)"
                  defaultChecked={selectedService.isFeatured}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </Col>

            <Col md={12}>
              <div>
                <GCheckbox
                  name="sellServiceOnline"
                  id="sellServiceOnline"
                  label="Sell service online"
                  defaultChecked={selectedService.sellServiceOnline}
                  onChange={(e) => handleInputChange(e)}
                />
                <p className="pl25 fs12">{t("Unticking")}</p>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center mb20">
            <Col md={3}>
              <p className="mb0">{t("Appointmentleadtime")}</p>
            </Col>
            <Col md={5} className="mt20">
              <div className="checkbox_green">
                <GCheckbox
                  name="monday"
                  id="monday"
                  label="M"
                  className="checkboxgreen"
                  defaultChecked={selectedService.monday}
                  onChange={(e) => handleInputChange(e)}
                />
                <GCheckbox
                  name="tuesday"
                  id="tuesday"
                  label="T"
                  className="checkboxgreen"
                  defaultChecked={selectedService.tuesday}
                  onChange={(e) => handleInputChange(e)}
                />
                <GCheckbox
                  name="wednesday"
                  id="wednesday"
                  label="W"
                  className="checkboxgreen"
                  defaultChecked={selectedService.wednesday}
                  onChange={(e) => handleInputChange(e)}
                />
                <GCheckbox
                  name="thursday"
                  id="thursday"
                  label="T"
                  className="checkboxgreen"
                  defaultChecked={selectedService.thursday}
                  onChange={(e) => handleInputChange(e)}
                />
                <GCheckbox
                  name="friday"
                  id="friday"
                  label="F"
                  className="checkboxgreen"
                  defaultChecked={selectedService.friday}
                  onChange={(e) => handleInputChange(e)}
                />
                <GCheckbox
                  name="saturday"
                  id="saturday"
                  label="S"
                  className="checkboxgreen"
                  defaultChecked={selectedService.saturday}
                  onChange={(e) => handleInputChange(e)}
                />
                <GCheckbox
                  name="sunday"
                  id="sunday"
                  label="S"
                  className="checkboxgreen"
                  defaultChecked={selectedService.sunday}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={3}>
              <p className="mb0">{t("Appointmentleadtime")}</p>
            </Col>
            <Col md={4} className="mt20 ">
              <div className="select_border_edit">
                <select className="themeSelect selectbox" name="appointmentleadTime" onChange={handleInputChange} value={selectedService.appointmentleadTime} required>
                  <option value="0" disabled>Select {t("Appointmentleadtime")}</option>
                  <option key="5" value='5'>5 Min</option>
                  <option key="10" value='10'>10 Min</option>
                  <option key="15" value='15'>15 Min</option>
                  <option key="20" value='20'>20 Min</option>
                  <option key="25" value='25'>25 Min</option>
                  <option key="30" value='30'>30 Min</option>
                  <option key="35" value='35'>35 Min</option>
                  <option key="40" value='40'>40 Min</option>
                </select>
              </div>
            </Col>
            <div className="border-top card_thank m_bg_footer">
          <div className="d-flex align-items-center justify-content-end">
            <GButton
              mr="15px"
              backgroundColor="#fff"
              color="#000"
              border="1px solid #707070"
              hoverBg="#fff"
              hoveColor="#000"
              hoverBorder="1px solid #000"
            >
              {t("Close")}
            </GButton>
            <GButton  onClick={handleFormSubmit}>{t("Save")}</GButton>
          </div>
        </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Distribution;
