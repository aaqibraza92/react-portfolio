import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import Svg from "../../../../assets/svg/Svg";
import Select from "react-select";
import CmnRadioBorder from "../../../../components/Layout/CmnRadioBorder/CmnRadioBorder";
import GButton from "../../../../components/Layout/GButton";
// import AlertModal02 from "../../../../components/AlertModal02/AlertModal02";
import AlertModal from "../../../../components/AlertModal/AlertModal";
import SelectServiceFromMenuModal from "./SelectServiceFromMenuModal";
import GIconInput from "../../../../components/Layout/GIconInput";
import { notify } from "react-notify-toast";
import { addSalonPackage, updateSalonPackage } from '../../../../helpers/backend/salon'
import DiscountDropDown from "../../../../components/ServiceInputs/DiscountDropDown";
import {getPackageInfo} from "../../../../store/salon/packageinfo/action"
import { useDispatch, useSelector } from "react-redux";
const CreateNewPackage = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const { packageid } = props ;
  const dispatch = useDispatch();
  const packages = useSelector((state) => {
    return state.packageinfo;
  });

  useEffect(() => {
    if(packageid)
    {
      dispatch(getPackageInfo({packageid :packageid}))
    }
  }, [dispatch])
  const [dataState, setDataState] = useState({});
  useEffect(() => {
    setDataState({
      serviceTitle :packages.serviceTitle,
      discountid : packages.discountid,
      price : packages && packages.price ? packages.price : 0 ,
      servicesgroup: packages && packages.servicesgroup ? packages.servicesgroup : [],
    })
  }, [packages])

const [priceType, setPriceType] = useState(packages && packages.priceType ? packages.priceType : '');
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setDataState({...dataState, [name] : value})
    if(name === "servicesgroup")
    { 
      AlertModal.hide()
    }
}
const finalPriceUpdate = async() => {
  if(priceType === 'ServicePrice')
  {
    var price = 0
    await Promise.all(dataState.servicesgroup && dataState.servicesgroup.map(async (pricing) => {
      price = price + pricing.price
    }));
  }
  else
  {
    price = dataState.price
  }
 return price
}
const handleFormSubmit = async() => {
  var packageprice = await finalPriceUpdate()
  let formSubmitAction = (packageid) ? updateSalonPackage : addSalonPackage ;
  var iData = {
    categoryid : "62501b490f1f149005c4dbd4",
    serviceTitle : dataState.serviceTitle,
    discountid : dataState.discountid,
    priceType : priceType,
    servicesgroup : dataState.servicesgroup,
    price : packageprice
  }
  if(packageid)
  {
    iData.packageid = packageid
  }
  formSubmitAction(iData).then((res) => {
      if (res.status === 200) {
        props.onSuccess(true, res.data._id )
        dispatch(getPackageInfo({packageid : res.data._id}))
        let myColor = { background: "#4bb543", text: "#FFFFFF" };
        notify.show(res.message, "custom", 5000, myColor);
      }
      if (res.status === 201) {
        let myColor = { background: "#ff385c", text: "#FFFFFF" };
        notify.show("Please fill required fields", "custom", 5000, myColor);
      }
  });
}

const deletePricingOptions = async(pricingOptionid) => {
  const filteredpricingOption = dataState.servicesgroup.filter((s,key) => s.pricingOptionid !== pricingOptionid);
  setDataState({
      ...dataState,
      servicesgroup: filteredpricingOption,
  })
}


  return (
    <>
      <div className="box_s border_radius8">
        <div className="card_thank">
          <Container>
            <Row>
              <Col md={12}>
                <label className="fs12">{t("Servicetitle")}</label>
                <input
                  type="text"
                  name="serviceTitle"
                  className="form_custom"
                  placeholder="Service title"
                  value={dataState.serviceTitle}
                  onChange={(e) => handleInputChange(e)}
                />
              </Col>
              <Col md={12} className="mb15">
              <DiscountDropDown key="discountdata" onChange={handleInputChange} discountid={dataState.discountid} />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="m_bg_footer pt10">
          <div className="card_thank ">
            <Container>
              <Row>
                <p className="mb10">{t("Packageservices")}</p>
              </Row>
              { Array.isArray(dataState.servicesgroup) && dataState.servicesgroup.map((servicesrows) => { 
                return (<>
                      <div className="services_border_box mb10">
                        <Row className="align-items-center pt10 pb10  all_services_tab_active">
                          <Col md={6} className="pointer">
                            <span className="mr10">{Svg.ServicesCutingIcon}</span>
                            <span className="mr15">{servicesrows.servicename}</span>
                            {/* <GButton
                              backgroundColor="#5CB84B"
                              borderRadius="30px"
                              transform="uppercase"
                              hoverBg="#5CB84B"
                              pt="3px"
                              pb="3px"
                              mr="15px"
                            >
                              {t("MasterService")}
                            </GButton> */}
                          </Col>

                          <Col md={6} className="pointer text-end">
                            <GButton
                              backgroundColor="#F5F7F9"
                              borderRadius="5px"
                              border="1px solid #E2E3E9"
                              hoverBg="redF"
                              color="#5B5D6B"
                              pt="3px"
                              pb="3px"
                              mr="15px"
                              onClick={(e) =>deletePricingOptions(servicesrows.pricingOptionid)}
                            >
                              {t("Remove")}
                            </GButton>
                            <span>{Svg.HumbermenuModal}</span>
                          </Col>
                        </Row>
                      </div>
                </>)
              }) }
              

              {/* <div className="services_border_box mb10">
                <Row className="align-items-center pt10 pb10  all_services_tab_active">
                  <Col md={6} className="pointer">
                    <span className="mr10">{Svg.ServicesCutingIcon}</span>
                    <span className="mr15">Ladies - Haircut & Blow Dry</span>
                  </Col>

                  <Col md={6} className="pointer text-end">
                    <GButton
                      backgroundColor="#F5F7F9"
                      borderRadius="5px"
                      border="1px solid #E2E3E9"
                      hoverBg="#5CB84B"
                      color="#5B5D6B"
                      pt="3px"
                      pb="3px"
                      mr="15px"
                    >
                      {t("SetasMasterService")}
                    </GButton>
                    <GButton
                      backgroundColor="#F5F7F9"
                      borderRadius="5px"
                      border="1px solid #E2E3E9"
                      hoverBg="red"
                      color="#5B5D6B"
                      pt="3px"
                      pb="3px"
                      mr="15px"
                    >
                      {t("Remove")}
                    </GButton>

                    <span>{Svg.HumbermenuModal}</span>
                  </Col>
                </Row>
              </div> */}

              <Row className="align-items-center">
                <Col md={12}>
                  <GButton
                    onClick={() =>
                      AlertModal.show(
                        <SelectServiceFromMenuModal servicesgroup={dataState.servicesgroup} onChange={handleInputChange}/>,
                        "",
                        () => {},
                        "lg"
                      )
                    }
                    mr="15px"
                    backgroundColor="#fff"
                    color="#37A3D2"
                    border="1px solid #37A3D2"
                  >
                    {Svg.blueplus} {t("Selectservicesfrommenu")}
                  </GButton>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="m_bg_footer pt10">
          <div className="card_thank ">
            <Container>
              <Row className="align-items-center">
                <Col md={10}>
                  <p className="mb10">{t("Saleprice")}</p>
                  <div className="d-flex">
                    <CmnRadioBorder
                      id="priceType2"
                      value="ServicePrice"
                      name="priceType"
                      label="Use service prices"
                      onChange={(e) => setPriceType('ServicePrice')}
                      checked={(priceType ==='ServicePrice') ? true  : false}
                    />
                    <CmnRadioBorder
                      id="priceType"
                      value="CustomePrice"
                      name="priceType"
                      label="Set custom price"
                      onChange={(e) => setPriceType('CustomePrice')}
                      checked={(priceType ==='CustomePrice') ? true  : false  }
                    />
                  </div>
                </Col>

                <Col md={2}>
                  <GIconInput
                    name="price"
                    placeholder="50"
                    iconLeft={Svg.currency}
                    value={dataState.price}
                    onChange={(e) => handleInputChange(e)}
                    readOnly={(priceType ==='ServicePrice') ? true  : false}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        {/* <div className="m_bg_footer pt10">
          <div className="card_thank ">
            <Container>
              <Row className="align-items-center">
                <Col md={12}>
                  <p className="mb5">{t("Cleanup")}</p>
                </Col>
                <Col md={5} className="mb15"> */}
                  {/* <label className="fs12">{t("Cleanuptime")}</label> */}
                  {/* <div className="select_border_edit">
                    <select className="themeSelect selectbox" name="cleanUpTime" onChange={handleInputChange} value={dataState.cleanUpTime} required>
                      <option value="0" selected disabled>Select {t("Cleanuptime")}</option>
                      <option key="5" value='5'>5 Min</option>
                      <option key="10" value='10'>10 Min</option>
                      <option key="15" value='15'>15 Min</option>
                      <option key="20" value='20'>20 Min</option>
                      <option key="25" value='25'>25 Min</option>
                      <option key="30" value='30'>30 Min</option>
                      <option key="35" value='35'>35 Min</option>
                      <option key="40" value='40'>40 Min</option>
                    </select>
                  </div> */}
                {/* </Col>
              </Row>
            </Container>
          </div>
        </div> */}
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
      </div>
    </>
  );
};

export default CreateNewPackage;
