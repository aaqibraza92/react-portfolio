import React, { useEffect, useState } from "react";
import { Col, Container, Label, Row, Table } from "reactstrap";
import GButton from "../../../components/Layout/GButton";
import GCheckbox from "../../../components/Layout/GCheckbox";
import { useTranslation } from "react-i18next";
import Svg from "../../../assets/svg/Svg";
import GSpacing from "../../../components/Layout/GSpacing";
import { addSalonDiscount, updateSalonDiscount } from "../../../helpers/backend/salon"
import { notify } from "react-notify-toast";
import { useDispatch, useSelector } from "react-redux";
import {getDiscountInfo} from "../../../store/salon/discountinfo/action"
const DiscountsServices = (props) => {
  const { discountid } = props ;
  const dispatch = useDispatch();
  const discounts = useSelector((state) => {
    return state.discountinfo;
  });
  useEffect(() => {
    if(discountid)
    {
      dispatch(getDiscountInfo({params: {
        discountid: discountid
      } }))
    }
  }, [dispatch])
  const [dataState, setDataState] = useState({});
  useEffect(() => {
    setDataState({
      discountid: discountid,
      name :discounts.name ? discounts.name :'' ,
      active :discounts.active ? discounts.active :false ,
      general :{
        discount : discounts.general ? discounts.general.discount : 0 ,
        enableDiscount : discounts.general ? discounts.general.enableDiscount : true ,
      },
      lastMinute :{
        discount : discounts.lastMinute ? discounts.lastMinute.discount : 0 ,
        enableDiscount : discounts.lastMinute ? discounts.lastMinute.enableDiscount : true ,
        beforeActive : discounts.lastMinute ? discounts.lastMinute.beforeActive : 0 ,
      },
      offPic : {
        enableDiscount : discounts.offPic ? discounts.offPic.enableDiscount : true 
      },
      monday :{
        morning : discounts.monday ? discounts.monday.morning : 0 ,
        evening : discounts.monday ? discounts.monday.evening : 0 ,
        afternoon : discounts.monday ? discounts.monday.afternoon : 0 ,
        venueStatus : discounts.monday ? discounts.monday.venueStatus : false ,
      },
      tuesday :{
        morning : discounts.tuesday ? discounts.tuesday.morning : 0 ,
        evening : discounts.tuesday ? discounts.tuesday.evening : 0 ,
        afternoon : discounts.tuesday ? discounts.tuesday.afternoon : 0 ,
        venueStatus : discounts.tuesday ? discounts.tuesday.venueStatus : false ,
      },
      wednesday :{
        morning : discounts.wednesday ? discounts.wednesday.morning : 0 ,
        evening : discounts.wednesday ? discounts.wednesday.evening : 0 ,
        afternoon : discounts.wednesday ? discounts.wednesday.afternoon : 0 ,
        venueStatus : discounts.wednesday ? discounts.wednesday.venueStatus : false ,
      },
      thursday :{
        morning : discounts.thursday ? discounts.thursday.morning : 0 ,
        evening : discounts.thursday ? discounts.thursday.evening : 0 ,
        afternoon : discounts.thursday ? discounts.thursday.afternoon : 0 ,
        venueStatus : discounts.thursday ? discounts.thursday.venueStatus : false ,
      },
      friday :{
        morning : discounts.friday ? discounts.friday.morning : 0 ,
        evening : discounts.friday ? discounts.friday.evening : 0 ,
        afternoon : discounts.friday ? discounts.friday.afternoon : 0 ,
        venueStatus : discounts.friday ? discounts.friday.venueStatus : false ,
      },
      saturday :{
        morning : discounts.saturday ? discounts.saturday.morning : 0 ,
        evening : discounts.saturday ? discounts.saturday.evening : 0 ,
        afternoon : discounts.saturday ? discounts.saturday.afternoon : 0 ,
        venueStatus : discounts.saturday ? discounts.saturday.venueStatus : false ,
      },
      sunday :{
        morning : discounts.sunday ? discounts.sunday.morning : 0 ,
        evening : discounts.sunday ? discounts.sunday.evening : 0 ,
        afternoon : discounts.sunday ? discounts.sunday.afternoon : 0 ,
        venueStatus : discounts.sunday ? discounts.sunday.venueStatus : false ,
      }
    })
  }, [discountid])

  const [generalDiscount, setGeneralDiscount] = useState(discounts.general && discounts.general ? discounts.general.enableDiscount : false);
  const [lastMinuteDiscount, setLastMinuteDiscount] = useState(discounts.lastMinute && discounts.lastMinute ? discounts.lastMinute.enableDiscount : false);
  const [offPicDiscount, setOffPicDiscount] = useState(discounts.offPic && discounts.offPic ? discounts.offPic.enableDiscount : false);

  const [data, setdata] = useState({
    name: "",
    active : true,
    generalDiscount: 0,
    lastDiscount: 0,
    activateTime: 0,
    mondayMorning: 0,
    tuesdayMorning: 0,
    wednesdayMorning: 0,
    thursdayMorning: 0,
    fridayMorning: 0,
    saturdayMorning: 0,
    sundayMorning: 0,
    mondayAfternoon: 0,
    tuesdayAfternoon: 0,
    wednesdayAfternoon: 0,
    thursdayAfternoon: 0,
    fridayAfternoon: 0,
    saturdayAfternoon: 0,
    sundayAfternoon: 0,
    mondayEvening: 0,
    tuesdayEvening: 0,
    wednesdayEvening: 0,
    thursdayEvening: 0,
    fridayEvening: 0,
    saturdayEvening: 0,
    sundayEvening: 0,
  });

  const onChangeHandler = (e) => {
    const { name, value, type } = e.target;
    console.log('name', name)
    console.log('value', value)
    if (type === "checkbox") {
      setDataState({ ...dataState, [name]: value === "on" ? true : false });
    } else {
      setDataState({ ...dataState, [name]: value });
    }
  };

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    var formSubmitURL = (discountid) ? updateSalonDiscount : addSalonDiscount ;
    formSubmitURL(dataState).then((res) => {
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

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="box_s border_radius8">
          <div className="card_thank">
            <Container>
              <Row>
                <Col md={9}>
                  <label className="fs12">
                    {t("Discountname")} <span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    className="form_custom"
                    placeholder={t("Discountname")}
                    value={dataState.name}
                    onChange={(e) => 
                        setDataState({
                          ...dataState,
                          name: e.target.value,
                        })
                    }
                  />
                </Col>
                <Col
                  md={3}
                  className="d-flex justify-content-end align-items-center"
                >
                  <label className="mr10"> {t("Activatediscount")}</label>
                  <Label className="switch">
                    <input type="checkbox" name="active" value={dataState.active}
                        onChange={(e) => onChangeHandler(e)}/>
                    <span className="slider round"></span>
                  </Label>
                </Col>

                <Col md={12} className="mb15">
                  <div className="bg_alert radius">
                    <Row>
                      <Col md={1} className="text-center">
                        {Svg.not_circle}
                      </Col>
                      <Col md={11} className="">
                        <p className="color_dark_alert">{t("Alertbox")}</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="m_bg_footer pt10">
            <div className="card_thank ">
              <Container>
                <Row className="align-items-center">
                  <Col md={6} className="mb25">
                    <p className="mb10">{t("Generaldiscount")}</p>
                    <GSpacing>
                      <GCheckbox
                        name="[general][discount]"
                        id="generalenableDiscount"
                        label={t("Enablegeneraldiscount")}
                        onChange={() => setGeneralDiscount(!generalDiscount)}
                        defaultChecked={generalDiscount}
                      />
                    </GSpacing>
                    <div>
                    { (generalDiscount) ? <><label className="fs12">
                        {t("DiscountPercentage")}
                        <span className="text-red">*</span>
                      </label>
                      <input
                        type="number"
                        className="form_custom"
                        placeholder={t("DiscountPercentage")}
                        value={dataState.general && dataState.general.discount}
                        onChange={(e) => 
                          setDataState({
                            ...dataState,
                            general: { discount: e.target.value , enableDiscount : generalDiscount },
                          })
                        }
                      /></>  : null}
                      
                    </div>
                  </Col>
                  <Col md={12} className="mb15">
                    <p className="mb10">{t("Lastminutediscounts")}</p>
                    <GCheckbox
                      name="remember"
                      id="remember"
                      label="Discount last minute appointments"
                      onChange={() => setLastMinuteDiscount(!lastMinuteDiscount)}
                      defaultChecked={lastMinuteDiscount}
                    />
                  </Col>
                  { (lastMinuteDiscount) ? <>
                  <Col md={6} className="mb15">
                    <label className="fs12">{t("DiscountPercentage")}</label>
                    <input
                      type="number"
                      className="form_custom"
                      placeholder={t("DiscountPercentage")}
                      value={dataState.lastMinute && dataState.lastMinute.discount}
                      onChange={(e) => 
                        setDataState({
                          ...dataState,
                          lastMinute: {...dataState.lastMinute, discount: e.target.value },
                        })
                      }
                    />
                  </Col>
                  <Col md={6} className="mb15">
                    <label className="fs12">{t("ActivateBefore")}</label>
                    <input
                      type="number"
                      className="form_custom"
                      placeholder={t("ActivateBefore")}
                      value={dataState.lastMinute && dataState.lastMinute.beforeActive}
                      onChange={(e) => 
                        setDataState({
                          ...dataState,
                          lastMinute: { ...dataState.lastMinute, beforeActive: e.target.value },
                        })
                      }
                    />
                  </Col></>  : null}
                </Row>
              </Container>
            </div>
          </div>

          <div className="m_bg_footer pt10">
            <div className="card_thank ">
              <Container>
                <Row className="align-items-center">
                  <Col md={12} className="mb15">
                    <p className="mb10">{t("Offpeakdiscounts")}</p>
                    <GCheckbox
                      name="remember"
                      id="remember1"
                      label="Enable time based discount for appointments"
                      onChange={() => setOffPicDiscount(!offPicDiscount)}
                      defaultChecked={offPicDiscount}
                    />
                  </Col>
                </Row>
                { (offPicDiscount) ? <><Row>
                  <Table className="table_border_none align-middle" responsive>
                    <thead>
                      <tr>
                        <th></th>
                        <th>{t("Monday")}</th>
                        <th>{t("Tuesday")}</th>
                        <th>{t("Wednesday")}</th>
                        <th>{t("Thursday")}</th>
                        <th>{t("Friday")}</th>
                        <th>{t("Saturday")}</th>
                        <th>{t("Sunday")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p className="fs12 mb-0">
                            Morning
                            <span className="opacity-75">(until 12:00)</span>
                          </p>
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={dataState.monday && dataState.monday.morning}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                monday: { ...dataState.monday, morning: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={ dataState.tuesday && dataState.tuesday.morning}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                tuesday: { ...dataState.tuesday, morning: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={ dataState.wednesday&& dataState.wednesday.morning}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                wednesday: {...dataState.wednesday, morning: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={ dataState.thursday&& dataState.thursday.morning}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                thursday: { ...dataState.thursday, morning: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={ dataState.friday&& dataState.friday.morning}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                friday: {...dataState.friday, morning: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={ dataState.saturday && dataState.saturday.morning}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                saturday: { ...dataState.saturday, morning: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <GButton
                            backgroundColor="#F5F7F9"
                            border="1px solid #E2E3E9"
                            color="#A7A9B1"
                          >
                            Venue close
                          </GButton>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="fs12 mb-0">
                            Afternoon
                            <span className="opacity-75">(12:00 - 17:00)</span>
                          </p>
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={dataState.monday && dataState.monday.afternoon}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                monday: {...dataState.monday, afternoon: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={ dataState.tuesday && dataState.tuesday.afternoon}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                tuesday: {...dataState.tuesday, afternoon: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={ dataState.wednesday && dataState.wednesday.afternoon}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                wednesday: {...dataState.wednesday, afternoon: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={ dataState.thursday && dataState.thursday.afternoon}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                thursday: { ...dataState.thursday, afternoon: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={ dataState.friday && dataState.friday.afternoon}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                friday: { ...dataState.friday, afternoon: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={ dataState.saturday && dataState.saturday.afternoon}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                saturday: {...dataState.saturday, afternoon: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <GButton
                            backgroundColor="#F5F7F9"
                            border="1px solid #E2E3E9"
                            color="#A7A9B1"
                          >
                            Venue close
                          </GButton>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="fs12 mb-0">
                            Evening
                            <span className="opacity-75">(12:00 - 17:00)</span>
                          </p>
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={dataState.monday && dataState.monday.evening}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                monday: {...dataState.monday, evening: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={ dataState.tuesday && dataState.tuesday.evening}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                tuesday: { ...dataState.tuesday, evening: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={ dataState.wednesday && dataState.wednesday.evening}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                wednesday: { ...dataState.wednesday, evening: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={ dataState.thursday && dataState.thursday.evening}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                thursday: { ...dataState.thursday, evening: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={ dataState.friday&& dataState.friday.evening}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                friday: { ...dataState.friday, evening: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form_custom"
                            placeholder={t("Fullprice")}
                            value={ dataState.saturday && dataState.saturday.evening}
                            onChange={(e) => 
                              setDataState({
                                ...dataState,
                                saturday: { ...dataState.saturday, evening: e.target.value },
                              })
                            }
                          />
                        </td>
                        <td>
                          <GButton
                            backgroundColor="#F5F7F9"
                            border="1px solid #E2E3E9"
                            color="#A7A9B1"
                          >
                            Venue close
                          </GButton>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Row> </> : null }
                
              </Container>
            </div>
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
            <GButton>{t("Save")}</GButton>
          </div>
        </div>
      </form>
    </>
  );
};

export default DiscountsServices;
