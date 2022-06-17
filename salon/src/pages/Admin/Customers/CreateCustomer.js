import React, { useEffect,useState } from "react";

import { useTranslation } from "react-i18next";
import GImageCircleUpload from "../../../components/Layout/GImageCircleUpload/GImageCircleUpload";
import GCheckbox from "../../../components/Layout/GCheckbox";
import { Col, Container, Row } from "reactstrap";
import GIconInput from "../../../components/Layout/GIconInput";
// import CmnRadioBorder from "../../../components/Layout/CmnRadioBorder/CmnRadioBorder";
import GButton from "../../../components/Layout/GButton";
import GAlign from "../../../components/Layout/GAlign";
import Select from "react-select";
import Svg from "../../../assets/svg/Svg";
import DatePicker from "react-datepicker";
import {API_URL2} from '../../../helpers/apiurls';
import { HOME_URL } from "../../../helpers/apiurls";
import { IMAGE_URL } from "../../../helpers/apiurls";
import axios from 'axios';
import Auth from "../../../helpers/Auth/Auth";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, Navigate, } from "react-router-dom";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";

const CustomerModal = (props) => {
    const { t, i18n } = useTranslation();
    document.body.dir = i18n.dir();
    const navigate = useNavigate();
    const [customerInfo, setcustomerInfo] = useState({});
    var initialFormState = {
        
        firstName: customerInfo ? customerInfo.firstName : "",
        lastName: customerInfo ? customerInfo.lastName : "",
        mobile: customerInfo ? customerInfo.mobile : "",
        email: customerInfo ? customerInfo.email : "",
        gender: customerInfo ? customerInfo.gender : "",
        postalCode: customerInfo ? customerInfo.postalCode : "",
        dateOfBirth: customerInfo ? customerInfo.dateOfBirth : "",
        acceptTermsPolicy: customerInfo ? customerInfo.acceptTermsPolicy : false,
        acceptMarketingEmail: customerInfo ? customerInfo.acceptMarketingEmail : false,
        profileImage: customerInfo ? customerInfo.profileImage: "",
        notes: customerInfo ? customerInfo.notes: "",
      };
    
        const [dataState, setDataState] = useState(initialFormState);
        const [validations, setValidations] = React.useState({})
        const [show, setShow] = useState(true);

        const handleClose = () => setShow(false);

        const validateAll = () => {
            const { salonName, email ,firstName,lastName,mobile,password,address,employees,country,businessType,interestedmembershipid,acceptTermsPolicy,acceptMarketingEmail} = dataState
           
              const validations = { salonName: '', email: '', firstName: '',lastName:'',mobile:'',password:'' ,acceptTermsPolicy:'',acceptMarketingEmail:'' }
        
              let isValid = true
             if (!email) {
              validations.email = 'Email is required'
              isValid = false
            }
        
            if (!firstName) {
              validations.firstName = 'First Name is required'
              isValid = false
            }
        
            if (!lastName) {
              validations.lastName = 'Last Name is required'
              isValid = false
            }
        
            if (!mobile) {
              validations.mobile = 'Mobile No. is required'
              isValid = false
            }
            
           if (!dataState.postalCode) {
              validations.postalCode = 'Postal Code is required'
              isValid = false
            }
        
            if (!dataState.gender) {
                validations.gender = 'Gender is required'
                isValid = false
              }
        

         
        
            if (email && !/\S+@\S+\.\S+/.test(email)) {
              validations.email = 'Email format must be as example@mail.com'
              isValid = false
            }
              
            if (!isValid) {
              setValidations(validations)
            }
            
            return isValid
          }
 

          
  const validateOne = (e) => {
    const { name } = e.target
    const value = dataState[name]
    let message = ''
    
    if (!value) {
      message = `${name} is required`
    }
    
    if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
      message = 'Name must contain between 3 and 50 characters'
    }

    if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      message = 'Email format must be as example@mail.com'
    }
    
    setValidations({...validations, [name]: message })
  }

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        if (type === "checkbox") {
          setDataState({ ...dataState, [name]: value === "on" ? true : false });
        } else {
          setDataState({ ...dataState, [name]: value });
        }
     
      };

  
      const createcustomerImage = (val) => {
        setDataState({
          ...dataState,
          profileImage: val.file,
        });
      };

      const textExpression = (evt) => {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57)) {
            evt.preventDefault();
        }
       if (evt.target.value.indexOf('.') > -1 && evt.which == 46) {
            evt.preventDefault();
                           }
                            }
  
   const {firstName: firstnameVal,lastName: lastnameVal , email: emailVal,mobile: mobileVal,dateOfBirth:dobVal,prepaymentRequired:prepaymentRequiredVal,acceptMarketingEmail:acceptMarketingEmailVal,gender:genderVal,postalCode:postalCodeVal} = validations

    const handleFormSubmit = async (e) => {
 
        e.preventDefault()
     const isValid = validateAll()

      if (!isValid) {
        return false
      }
    
        const iData = new FormData();
        iData.append("firstName", dataState.firstName);
        iData.append("lastName", dataState.lastName);
        iData.append("mobile", dataState.mobile);
        iData.append("email", dataState.email);
        iData.append("dateOfBirth", dataState.dateOfBirth);
        iData.append("postalCode", dataState.postalCode);
        iData.append("gender", dataState.gender);
        iData.append("prepaymentRequired", dataState.prepaymentRequired ? true : false );
        iData.append("acceptMarketingEmail", dataState.acceptMarketingEmail ? true: false );
        iData.append("profileImage",dataState.profileImage );
        iData.append("notes", dataState.notes);
   
       var API_RRL = `${API_URL2}admin/customerRegistration`;
    
        await axios({
          method: "POST",
          url:API_RRL, 
          headers: {
            // "Content-Type": "multipart/form-data",
            Accept: "application/json",
            Authorization: "Bearer " + Auth.getToken(),
          },
          data: iData,
        })
     
        .then((resp) => {
           
          if (resp.data.status === 200){
            toast.success('Updated Successfully.', {
              style: {
                      border: '1px solid #4bb543',
                      padding: '10px',
                      color: 'green',
              },
              iconTheme: {
                      primary: 'green',
                      secondary: '#FFF',
              },
            });
            setTimeout(() => {
              AlertModal02.hide()
              props.closeForm()
             
                }, 1000);            
           } 
           else{
            if(resp.data.status === 202){
               toast.error(resp.data.message[0].param+' '+resp.data.message[0].msg, {
       });
      }
         }
         }).catch(err => {
        toast.error('Something Went Wrong!',
        );
      })
    };
    
  
    return (
      <>
        <Container className="p-0">
            <Toaster/>
          <section className="">
          <div className="card-body bBottom">
        <h3 className="fs14 lb mb0 text-uppercase">{t("Add Client Details")}</h3>
      </div>
            <div className="card-body">
              <Row>
                <Col md={2} className="text-center">
                  <GImageCircleUpload
                    //  value={dataState.profileImage}
                    // setImageUrl={IMAGE_URL + dataState.profileImage } 
                    getImage={createcustomerImage}
                  />
                </Col>
                <Col md={10}>
                  <div>
                    <Row>
                      <Col lg={6}>
                        <label>
                          {t("Firstname")}
                          <span className="giconinput_required">*</span>
                        </label>
                        <input
                          type="text"
                          className="form_custom"
                          placeholder={t("Firstname")}
                          name="firstName"
                          onBlur={validateOne}
                          value={dataState.firstName}
                          onChange={(e) => handleInputChange(e)}
                        />
                             <div style={{color:'red'}}> {firstnameVal}</div>   
                      </Col>
                      <Col lg={6}>
                        <label>
                          {t("Lastname")}{" "}
                          <span className="giconinput_required">*</span>{" "}
                        </label>
                        <input
                          type="email"
                          className="form_custom"
                          placeholder={t("Lastname")}
                          name="lastName"
                          onBlur={validateOne}
                          value={dataState.lastName}
                          onChange={(e) => handleInputChange(e)}
                        />
                         <div style={{color:'red'}}> {lastnameVal}</div>  
                      </Col>
                      <Col lg={6}>
                        <label>{t("Phone")}</label>
                        <input
                          type="number"
                          className="form_custom"
                          placeholder={t("Phone")}
                          name="mobile"
                          value={ dataState.mobile}
                          onBlur={validateOne}
                          onKeyPress={textExpression}
                          onChange={(e) => handleInputChange(e)}
                        />
                          <div style={{color:'red'}}> {mobileVal}</div>  
                      </Col>
                      <Col lg={6}>
                        <label>{t("Email")}</label>
                        <input
                          type="email"
                          className="form_custom"
                          placeholder={t("Email")}
                          name="email"
                          value={dataState.email}
                          onBlur={validateOne}
                          onChange={(e) => handleInputChange(e)}
                        />
                            <div style={{color:'red'}}> {emailVal}</div>  
                      </Col>
                    </Row>
                  </div>
                </Col>
  
                <Col md="12" className="mb-3">
                  <div className="border radius pt15 pb15 pl15 pr15 bgLightBlue">
                    <GCheckbox
                     id="provide"
                     label={t("MarketingCommunication")} 
                     name="acceptMarketingEmail"
                   
                     checked={dataState.acceptMarketingEmail}
                     
                     onChange={(e) =>
                       setDataState({
                         ...dataState,acceptMarketingEmail: !dataState.acceptMarketingEmail,
                       })
                     }
                     />
                     
                    <p className="fs14 pl28 mb-0">
                      {t("MarketingCommunicationSubText")}
                    </p>
                  
                  </div>
                  <div style={{color:'red'}}> {acceptMarketingEmailVal}</div>  
                </Col>
  
                <Col md="12" className="mb-3">
                  <div className="border radius pt15 pb15 pl15 pr15 bgLightBlue">
                    <GCheckbox
                     id="provides"
                      label={t("Prepaymentrequireds")}
                      name="prepaymentRequired"
                      checked={dataState.prepaymentRequired}
                      onChange={(e) =>
                        setDataState({
                          ...dataState,prepaymentRequired: !dataState.prepaymentRequired,
                        })
                      }
                      />
                    <p className="fs14 pl28 mb-0">
                      {t("Prepaymentrequiredsubtext")}
                    </p>
                  </div>
                  <div style={{color:'red'}}> {prepaymentRequiredVal}</div>  
                </Col>
              </Row>
            </div>
  
            <div></div>
            <div className="card-body pt-0">
              <Row>
             
                <Col lg={6} className="mb8">
                  <div className="select_border_edit">
                    <label>{t("Gender")}</label>
                    {/* <Select
                      label="Account type *"
                      className="themeSelect"
                      classNamePrefix="themeSelect"
                    /> */}
                      
          <select className="themeSelect selectbox" name="gender"   onBlur={validateOne}  onChange={(e) => handleInputChange(e)}  value={dataState.gender} >
              <option value="">Select Gender</option>
              <option  value='Male'>Male</option>
              <option  value='Female'>Female</option>
              <option  value='Others'>Other/Not Specified</option>
              </select>
                  </div>
                  <div style={{color:'red'}}> {genderVal}</div>    
                </Col>
  
              
                <Col className="date_picker" md={6}>
                <label className="labelInput">Date of birth</label>
                <DatePicker
                  className="w-100"
                  selected={dataState.dateOfBirth}
                  placeholderText="dd-mm-yyyy"
                  dateFormat="yyyy-MM-dd"
                  onBlur={validateOne}
                  showYearDropdown
                  onChange={(date) => setDataState({  ...dataState, dateOfBirth: date,})}
                />
             <span style={{color:'red'}}> {dobVal}</span>   
              </Col>

              <Col lg={6} className="mb8">
                  <label>{t("Postalcode")}</label>
                  <GIconInput
               className="form_custom"
               placeholder={t("Postalcode")}
               type="number"
               name="postalCode"
               value={dataState.postalCode}
               onBlur={validateOne}
               onChange={(e) => handleInputChange(e)}
                 />
              <span style={{color:'red'}}> {postalCodeVal}</span>   
                </Col>
  
                <Col lg={12} className="mb8">
                  <div className="salon_note position-relative">
                    <label>{t("Notes")}</label>
                    <span className="icon_note">{Svg.book}</span>
                    <textarea
                      className="h_130"
                      placeholder="Add note here"
                      name="notes"
                      value={dataState.notes}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </Col>
              </Row>
            </div>
  
            <div className="card-body bTop">
              <GAlign align="right">
                <GButton
                  mr="15px"
                  backgroundColor="#fff"
                  color="#000"
                  border="1px solid #707070"
                  hoverBg="#fff"
                  hoveColor="#000"
                  hoverBorder="1px solid #000"
                  transform="capitalize"

                  onClose={()=>setShow(false)}
                >
                  {t("Close")}
                </GButton>
                <GButton transform="capitalize" onClick={handleFormSubmit} >{t("Save")}</GButton>
              </GAlign>
            </div>
          </section>
        </Container>
      </>
    );
  };

  export default CustomerModal;