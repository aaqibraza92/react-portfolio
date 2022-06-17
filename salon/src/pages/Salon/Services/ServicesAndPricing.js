import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import GCheckbox from "../../../components/Layout/GCheckbox";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import GButton from "../../../components/Layout/GButton";
import { notify } from "react-notify-toast";
import { addSalonServices } from '../../../helpers/backend/salon'
import TeamCheckBox from "../../../components/ServiceInputs/TeamCheckBox";
import DiscountDropDown from "../../../components/ServiceInputs/DiscountDropDown";
const ServicesAndPricing = ({services}) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
   const [dataState, setDataState] = useState({});
    var initialFormState = {
        appointmentleadTime : 0,
        cleanUpTime : 0,
        description :'',
        goodToKnow : '',
        serviceid: '',
        name: '',
        discount :'',
        minprice: 0,
        minduration: 0,
        restriction : '',
        pricingOption:[]
      }
    const [selectedService, setSelectedService] = useState(initialFormState);
    useEffect(() => {
        setDataState({
          serviceName : services.serviceName,
          serviceid :services.serviceid,
          name : services.name,
          teams : services.teamInfo,
          discountid : services.discountid,
          pricingOption : services.pricingOption,
          cleanUpTime : services.cleanUpTime,
        })
      }, [services]);
  const [errors, seterrors] = useState({});

  const validate = () => {
    const errors = {};
    if (
      dataState.name.trim() === "" ||
      dataState.name === "" ||
      dataState.name === null ||
      dataState.name === undefined
    ) {
      errors.name = t("Salonnamemsg");
    }
    if (
      dataState.serviceid.trim() === "" ||
      dataState.serviceid === "" ||
      dataState.serviceid === null ||
      dataState.serviceid === undefined
    ) {
      errors.serviceid = t("Firstnamemsg");
    }
    // if (dataState.discountid) {
    //   errors.discount = t("Employeemsg");
    // }
    // if (dataState.cleanUpTime.value.length <= 0) {
    //   errors.cleanUpTime = t("Salontypemsg");
    // }
    seterrors(errors);
    //console.log("errors",errors);
    return errors;
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setDataState({
      ...dataState,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    validate();
  };

  const handleChangeServiceName = async(event, service) => {
    const { name, value } = event.target
    const updatedRowsState = await Promise.all(dataState.map(async (row) => {
        const updatedrowservice = await Promise.all(row.services.map(async (rowservice) => {
            if(rowservice.serviceid === service.serviceid)
            {
                setSelectedService({
                    ...rowservice,
                    name: value,
                })
                return {
                    ...rowservice,
                    name: value,
                };
            }
            return rowservice
        }))
        return {
            ...row,
            services: updatedrowservice,
        };
    }));
    setDataState(updatedRowsState);
}

const handleInputChange = (event) => {
  const { name, value } = event.target
  setDataState({...dataState, [name] : value})
}
const handlePricingChange = async(event, pricingindex) => {
  const { name, value } = event.target
  const updatedRowsState = await Promise.all(dataState.pricingOption && dataState.pricingOption.map(async (pricingrow, priceind) => {
    if(priceind === pricingindex)
    {
    return{
          ...pricingrow,
          [name]: value,
      }
    }
    else{
      return pricingrow
    }
  }));
  setDataState({
    ...dataState,
    pricingOption: updatedRowsState,
}) 
   
}

const deletePricingOptions = async(pricingintex) => {
  const filteredpricingOption = dataState.pricingOption.filter((s,key) => key !== pricingintex);
  setDataState({
      ...dataState,
      pricingOption: filteredpricingOption,
  })
}
const pricingOptionChanged = () => {

  const updatedRowsState = dataState.pricingOption && dataState.pricingOption.map(async(pricingrow, priceind) => {
    return pricingrow
  })
  var addprice = {
        name : "",
        duration : 0,
        saleprice :0,
        price : 0
      }
  updatedRowsState.push(addprice)
  setDataState({
      ...dataState,
      pricingOption: updatedRowsState,
  })
};
const handleFormSubmit = () => {
  let iData = {
    serviceid :dataState.serviceid,
    name : dataState.name,
    teams : dataState.teams,
    discountid : dataState.discountid,
    pricingOption : dataState.pricingOption,
    cleanUpTime : dataState.cleanUpTime,
  }
  addSalonServices(dataState).then((res) => {
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
      <div className="box_s border_radius8">
        <form onSubmit={onSubmitHandler}>
          <div className="card_thank">
            <Row>
              <Col md={6}>
                <label className="fs12"> {t("Servicetitle")}</label>
                <input
                  type="text"
                  name="name"
                  className="form_custom"
                  placeholder={t("Servicetitle")}
                  value={dataState.name}
                  onChange={onChangeHandler}
                />
                {errors.name && (
                  <span className="fs14 colorRed">{errors.name}</span>
                )}
              </Col>

              <Col md={6}>
                <label className="fs12">{t("Treatmenttype")}</label>
                <input
                  type="text"
                  className="form_custom"
                  value={dataState.serviceName}
                  readOnly={true}
                />
                {errors.serviceid && (
                  <span className="fs14 colorRed">{errors.serviceid}</span>
                )}
              </Col>

              <Col md={12} className="mb15">
                <DiscountDropDown key="discountdata" onChange={handleInputChange} discountid={dataState.discountid} />
                {errors.discount && (
                  <span className="fs14 colorRed">{errors.discount}</span>
                )}
              </Col>
            </Row>
          </div>
          <div className="m_bg_footer pt10">
              <TeamCheckBox key="teamdata" onChange={handleInputChange} teamsdata={dataState.teams}  />
            <div className="card_thank">
              <Container>
                <Row>
                <table className="table notablePadding quoteTable">
                  <thead>
                  <tr>
                      <th className="text-capitalize">
                      {/* {dataState && dataState.name ? dataState.name :  ''} */}
                      </th>
                      <th>Duration</th>
                      <th>Price</th>
                      <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                   dataState.pricingOption && dataState.pricingOption.map((prices, pricekey) => {
                        return (<>
                        <tr className="">
                            <td>
                                <input
                                id="quoteitemdescription"
                                type="text"
                                className="inputStyleLine text-capitalize"
                                name="name"
                                placeholder="Name"
                                value={prices.name}
                                onChange={(e) => handlePricingChange(e, pricekey)} 
                                />
                            </td>

                            <td>
                                <input
                                type="number"
                                name="duration"
                                className="inputStyleLine text-capitalize"
                                placeholder="Duration"
                                value={prices.duration}
                                onChange={(e) => handlePricingChange(e, pricekey)} 
                                />
                            </td>
                            <td>
                                <input
                                type="number"
                                name="price"
                                className="inputStyleLine text-capitalize"
                                placeholder="Price"
                                value={prices.price}
                                onChange={(e) => handlePricingChange(e, pricekey)} 
                                />
                            </td>
                            <td>
                                <a onClick={(e) => deletePricingOptions(pricekey)}>delete</a>
                            </td>
                            </tr>
                        </>)
                   })
               }
               <span style={{ marginLeft: "10px" }} onClick={(e) => pricingOptionChanged()}>Add pricing option</span>  
                  </tbody>
                </table>
                </Row>
              </Container>
            </div>
            <div className="card_thank">
              <Container>
                <Row>
                  <Col md={6} className="mt20 ">
                    <label className="mb10">{t("Cleanup")}</label> <br></br>
                    <label className="fs12">{t("Cleanuptime")}</label>
                    <div className="select_border_edit">
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
                    </div>
                    {errors.cleanUpTime && (
                      <span className="fs14 colorRed">{errors.cleanUpTime}</span>
                    )}
                  </Col>
                </Row>
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
            <GButton  onClick={handleFormSubmit}>{t("Save")}</GButton>
          </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default ServicesAndPricing;
