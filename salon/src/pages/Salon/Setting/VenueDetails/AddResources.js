import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import Svg from "../../../../assets/svg/Svg";
import CmnSalonServicesLists from "../../../../components/CmnSalonServicesLists/CmnSalonServicesLists";
import GButton from "../../../../components/Layout/GButton";
import { addSalonResources } from "../../../../helpers/backend";
import { notify } from "react-notify-toast";
import AlertModal02 from "../../../../components/AlertModal02/AlertModal02";


let myColor = { background: '#4bb543', text: "#FFFFFF" };
let redColor = { background: '#ff385c', text: "#FFFFFF" };

const AddResources = (props) => {
  props.callbackIfSuccess(false);
  //const [success,setsuccess]=useState(false);

  

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [data, setData] = useState({
    name: "",
    quantity: "",
    services: [],
  });

  const [serviceID, setserviceID] = useState([]);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getCallbackval = (val) => {
    var temp = [];
    val.forEach((elem) => {
      temp.push({
        serviceid: elem._id,
      });
    });
    setserviceID(temp);
  };

  const onSubmit = () => {
    const iData = {
      name: data.name,
      quantity: data.quantity,
      services: serviceID,
    };

    const regex = new RegExp(
      "^[0-9]*$"
    );

    if(data.name==="" || data.name===null || data.name===undefined){
      return notify.show("Please insert Device or cabin name", "custom", 5000, redColor);
    }
    if(data.quantity==="" || data.quantity===null || data.quantity===undefined){
      return notify.show("Please insert quantity", "custom", 5000, redColor);
    }
    if (regex.test(data.quantity) === false) {
      return notify.show("Please insert number only", "custom", 5000, redColor);
    }
    addSalonResources(iData).then((res) => {
      console.log("res",res);
      if(res && res.status===200){
        notify.show(res.message, "custom", 5000, myColor);
        //setsuccess(true);
        props.callbackIfSuccess(true);
        AlertModal02.hide();
      }
    });
  };

  return (
    <div>
      <style jsx="true">
        {`
          .form_custom {
            border: none;
            border-bottom-color: currentcolor;
            border-bottom-style: none;
            border-bottom-width: medium;
            border-bottom: 1px solid #ddd;
            width: 100%;
            padding: 0px;
            margin-bottom: 15px;
          }
        `}
      </style>

      <div className="box_s border_radius8">
        {console.log("serviceID", serviceID)}
        <div className="border-bottom card_thank d-flex justify-content-between align-items-center">
          <CardTitle className="text-dark text-uppercase lb mb-0" tag="h6">
            {t("Editresources")}
          </CardTitle>
          <UncontrolledDropdown className="noBgonDropDown">
            <DropdownToggle>
              <span className="fm12 colorBlack">{Svg.ellipsiswhitebg}</span>
            </DropdownToggle>
            <DropdownMenu className="radius4 shadow noBorder">
              <DropdownItem>
                <ul className="noBg noUl mb0 pt5 pb5">
                  <li className="fs14"> {t("Delete")}</li>
                </ul>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <div className="card_thank">
          <Row>
            <p className="fs14">{t("Treatments")}</p>

            <Col md={6}>
              <label>Device or cabin name</label>
              <input
                type="text"
                className="form_custom"
                name="name"
                placeholder="Device or cabin name"
                onChange={changeHandler}
              />
            </Col>

            <Col md={6}>
              <label>Quantity</label>
              <input
                type="text"
                className="form_custom"
                name="quantity"
                placeholder="Quantity"
                onChange={changeHandler}
              />
            </Col>

            <Col md={12}>
              <h5 className="lm">Assigned Services</h5>
            </Col>

            <Col md={12}>
              <div className="border radius pt15 pl15 pr15 pb15">
                <Row>
                  <Col md={12} className=" mb15">
                    <CmnSalonServicesLists callbackvalue={getCallbackval} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
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
              Close
            </GButton>
            <GButton onClick={onSubmit}>Save</GButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddResources;
