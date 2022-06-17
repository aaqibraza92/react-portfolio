import React, { useState, useEffect, useRef } from "react";
import {
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Label,
  Row,
  Table,
  UncontrolledDropdown,
} from "reactstrap";
import GButton from "../../../components/Layout/GButton";
import GCheckbox from "../../../components/Layout/GCheckbox";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import Svg from "../../../assets/svg/Svg";
import DiscountsServices from "./DiscountsServices";
import GAlign from "../../../components/Layout/GAlign";
import { useDispatch, useSelector } from "react-redux";
import {getSalonDiscountServiceInfo, updateSalonDiscount} from "../../../helpers/backend/salon"
import { notify } from "react-notify-toast";
const options = [{ value: "Full price", label: "Full price" }];
const AssignedService = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const { discountid } = props ;
  const [dataState, setDataState] = useState([])
  const [toSubmitData, setToSubmitData] = useState({
    discountid : discountid,
    services : []
  })
  useEffect(() => {
    fetchMyAPI()
  }, [discountid])

  const fetchMyAPI = async() => {
    let response = await getSalonDiscountServiceInfo({params: {
      discountid: discountid
    }})
    if(response.status === 200)
    {
      setDataState(response.data)

    }
  }
  const handleInputChange = async(event) => {
    const { name, value, type } = event.target;
    var filteredservices = toSubmitData.services
    if(value === "on")
    {
      filteredservices.push({serviceid: name})
    }
    else
    {
      filteredservices = filteredservices.filter((s,key) => s.serviceid !== name);
    }
    setToSubmitData({
      ...toSubmitData,
      services: filteredservices,
    })
}

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    // await setToSubmitData({
    //   ...toSubmitData,
    //   discountid: discountid,
    // })
    // console.log(toSubmitData)
    updateSalonDiscount(toSubmitData).then((res) => {
      if (res.status === 200) {
        let myColor = { background: "#4bb543", text: "#FFFFFF" };
        notify.show(res.message, "custom", 5000, myColor);
      }
      if (res.status === 201) {
        let myColor = { background: "#ff385c", text: "#FFFFFF" };
        notify.show("Please fill required fields", "custom", 5000, myColor);
      }
    });
  };


  return (
    <>
      <div className="box_s border_radius8">
        <div className="card_thank ">
          <Container>
            { Array.isArray(dataState) && dataState.map((group, grpindex)=> {
              return (<>
              <Row className="align-items-center" key={'group'+grpindex}>
                <Col md={12} className="mb10 border-bottom pb10">
                  <GCheckbox
                    name="remember"
                    id="remember"
                    label={group.name}
                    className="black_border"
                  />
                </Col>
              </Row>
              <Row className="align-items-center ml-3">
              <Col md={12} className="mb10 border-bottom pb10">
                {
                  Array.isArray(group.servicelist) && group.servicelist.map((service, serviceindex) => {
                    return (<>
                          <Row>
                          <Col>
                            <GCheckbox
                              name={service.serviceid}
                              id={serviceindex + service.serviceid}
                              label={service.name}
                              className="black_border"
                              defaultChecked={service.has_service}
                              onChange={(e) => handleInputChange(e)}
                            />
                            {/* <GButton
                              borderRadius="30px"
                              pt="3px"
                              pb="3px"
                              transform="uppercase"
                              backgroundColor="#5CB84B"
                              ml="10px"
                            >
                              Featured
                            </GButton> */}
                          </Col>
                          <Col className="text-end">
                            <GButton
                              borderRadius="30px"
                              pt="3px"
                              pb="3px"
                              transform="uppercase"
                              backgroundColor="#37A3D229"
                              ml="10px"
                              color="#37A3D2"
                              border="1px solid #37A3D2"
                            >
                              <span className="mr8">{Svg.BlueDivision}</span>
                              PRESENT
                            </GButton>
                          </Col>
                        </Row>
                    </>)
                  })
                }
              </Col>
            </Row>
              </>)
            })}
          </Container>
        </div>
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
            {t("Close")}
          </GButton>
          <GButton onClick={handleFormSubmit}>{t("Save")}</GButton>
        </div>
      </div>
    </>
  );
};

export default AssignedService;
