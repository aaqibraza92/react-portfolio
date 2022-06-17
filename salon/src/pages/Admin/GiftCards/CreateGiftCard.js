import React, { useState,useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Svg from "../../../assets/svg/Svg";
import GButton from "../../../components/Layout/GButton";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "react-notify-toast";
import { adminPostgiftcard } from '../../../helpers/backend/admin'
import GCheckbox from "../../../components/Layout/GCheckbox";
import toast, { Toaster } from 'react-hot-toast';
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";

const CreateGiftCard = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const { giftcard } = props
 
  const [giftcardInfo, setgiftcardInfo] = useState(giftcard);

  useEffect(() => {
    // adminGetSalonProfileInfo().then(res => {
    //   setgiftcardInfo(res.data)
    // });
  }, [])

  var initialFormState = {
    name: giftcardInfo ? giftcardInfo.name : '',
    code: giftcardInfo ? giftcardInfo.code : '',
    quantity: giftcardInfo ? giftcardInfo.quantity : 0,
    price: giftcardInfo ? giftcardInfo.price : 0,
    benifit: giftcardInfo ? giftcardInfo.benifit : 0,
    expirtDate: giftcardInfo ? giftcardInfo.expirtDate : '',
  
  }
  const [dataState, setDataState] = useState(initialFormState);
  const [errors, seterrors] = useState({});


  const handleFormSubmit = () => {
    try {
      const functioncall = adminPostgiftcard(dataState) 
      // adminPostgiftcard(dataState).then((resp) => {
        functioncall.then((resp) => {
        if (resp.status === 200) {
         let myColor = { background: "#4bb543", text: "#FFFFFF" };
         notify.show(resp.message, "custom", 5000, myColor)
   
          props.toggle(false)
          setDataState(initialFormState)
          setTimeout(() => {
            AlertModal02.hide()
            props.closeForm()
           
              }, 1000); 
              // window.location.href = '/'
        }
        
        else {
          if (resp.status === 202) {
            let myColor = { background: "#FF385C", text: "#FFFFFF" };
            return notify.show(resp.message[0].param + ' ' + resp.message[0].msg, "custom", 5000, myColor);
          
          }
        }
      }).catch(err => {
      
      })
    } catch (e) {

    }
  }

  const handleInputChange = event => {
    const { name, value, type, id } = event.target
    if (type === "checkbox") {
      if (name === 'planType') {
        setDataState({ ...dataState, [name]: id })
      }
      else {
        setDataState({ ...dataState, [name]: value === "on" ? true : false })
      }
    }
    else {

      setDataState({ ...dataState, [name]: value })
    }
    }
    
  const closeDisplayForm = () => {
    props.toggle()
    setDataState(initialFormState)
  }


  return (
    <>
      <div className="card-body bBottom">
        <h3 className="fs14 lb mb0 text-uppercase">{t("Creategiftcard")}</h3>
      </div>
      <div className="border_radius8">
        <div className="card_thank">
          <Container>
            <Row>
              <Col md={12}>
                <label className="fs12">{t("Giftcardname")}</label>
                <input
                  type="text"
                  className="form_custom"
                  placeholder={t("Entername")}
                  name="name"
                  value={dataState.name}
                  onChange={(e) => handleInputChange(e)}
                />
              </Col>
              <Col md={8} className="position-relative">
                <label className="fs12">{t("Giftcardcode")}</label>
                <input
                  type="text"
                  className="form_custom"
                  placeholder={t("Entercode")}
                  name="code"
                  value={dataState.code}
                  onChange={(e) => handleInputChange(e)}
                />
                <span className="voucher_from">{Svg.currency}</span>
              </Col>
              <Col md={4}>
                <label className="fs12">{t("Quantity")}</label>
                <input
                  type="number"
                  className="form_custom"
                  placeholder={t("Quantity")}
                  name="quantity"
                  value={dataState.quantity}
                  onChange={(e) => handleInputChange(e)}
                />
              </Col>
              <Col md={6} className="position-relative">
                <label className="fs12">{t("Giftcardprice")}</label>
                <input
                  type="number"
                  className="form_custom"
                  placeholder={t("Enterprice")}
                  name="price"
                  value={dataState.price}
                  onChange={(e) => handleInputChange(e)}
                />
                <span className="voucher_from">{Svg.currency}</span>
              </Col>
              <Col md={6} className="position-relative">
                <label className="fs12">{t("Benefitamount")}</label>
                <input
                  type="number"
                  className="form_custom"
                  placeholder={t("Enterbenefitamount")}
                  name="benifit"
                  value={dataState.benifit}
                  onChange={(e) => handleInputChange(e)}
                />
                <span className="voucher_from">{Svg.currency}</span>
              </Col>
              <Col md={12} className="mb15 tab_date tab_voucher_box">
                <label className="fs12">{t("Expirydate")}</label>
                {/* <DatePicker
                  showYearDropdown
                  selected={startDate}
                  name="expirtDate"
                  value={dataState.expirtDate}
                  onChange={(date) => setStartDate(date)}
                  
                /> */}
                   <input 
                   type="date"
                    className="form-control"
                     name="expirtDate" 
                       value={dataState.expirtDate}
                         onChange={(e) => handleInputChange(e)}
                          placeholder="Date" />
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
          <GButton onClick={event => {
                    event.preventDefault()
                    handleFormSubmit()
                  }}>{t("Save")}</GButton>
        </div>
      </div>
    </>
  );
};

export default CreateGiftCard;
