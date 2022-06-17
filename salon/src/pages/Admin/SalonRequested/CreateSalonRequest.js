import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import GIconInput from "../../../components/Layout/GIconInput";
import GPasswordInput from "../../../components/Layout/GPasswordInput";
import GSpacing from "../../../components/Layout/GSpacing";
import BreadCrum from "../BreadCrum/BreadCrum";
import "./CreateSalonRequest.css";
import Select from "react-select";
import GCheckbox from "../../../components/Layout/GCheckbox";
import GTextarea from "../../../components/Layout/GTextarea";
import { useTranslation } from "react-i18next";
import { adminGetSalonProfileInfo,adminGetSalonUserInfo } from "../../../helpers/backend/admin";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "react-notify-toast";
import Auth from "../../../helpers/Auth/Auth";
import AddressForm from "../../../components/AddressForm/AddressForm";
import MembershipPlanForm from "../../../components/AddressForm/MembershipPlanForm";
import SalonRequestTab from "./SalonRequestTab";
import GImageUpload from "../../../components/Layout/GImageUpload/GImageUpload"
import axios from 'axios';
import {Link, useLocation} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import {API_URL2} from '../../../helpers/apiurls';
import { HOME_URL } from "../../../helpers/apiurls";
import { IMAGE_URL } from "../../../helpers/apiurls";
import SalonRequest from "./SalonRequest";
import { useNavigate, Navigate} from "react-router-dom";
import Cookies from 'js-cookie';


const CreateSalonRequest = (props) => {

  const loc= useLocation();
  const saloniD = loc.hash.replace("#", '');
  const dispatch = useDispatch();
  const salonid = props.location && props.location.state;
  const navigate = useNavigate();


  const [salonInfo, setSalonInfo] = useState({});


  // const typesalon = [
  //   { value: 'Shop', label: 'Shop' },
  //   { value: 'Mobile', label: 'Mobile' },
  //   { value: 'Home', label: 'Home' },
  // ];

  if (Cookies.get('loginSuccess')) {
    const loginData = (Cookies.get('loginsuccess'))
     
   } else {
     window.location.href = '/admin/login'
   }
  

  useEffect(() => {
    getsalonRequestedLists(saloniD)
    adminGetSalonProfileInfo().then((res) => {
      setSalonInfo(res.data);

    });
  }, []);

  var initialFormState = {
    salonName: salonInfo ? salonInfo.salonName : "",
    firstName: salonInfo ? salonInfo.firstName : "",
    lastName: salonInfo ? salonInfo.lastName : "",
    mobile: salonInfo ? salonInfo.mobile : "",
    email: salonInfo ? salonInfo.email : "",
    gender: salonInfo ? salonInfo.gender : "",
    postalCode: salonInfo ? salonInfo.postalCode : "",
    dateOfBirth: salonInfo ? salonInfo.dateOfBirth : "",
    password: salonInfo ? salonInfo.password : "",
    acceptTermsPolicy: salonInfo ? salonInfo.acceptTermsPolicy : false,
    acceptMarketingEmail: salonInfo ? salonInfo.acceptMarketingEmail : false,
    address: salonInfo ? salonInfo.address : "",
    country: salonInfo ? salonInfo.country : "",
    state: salonInfo ? salonInfo.state : "",
    city: salonInfo ? salonInfo.city : "",
    userType: "Salon",
    employees: salonInfo ? salonInfo.employees : "",
    profileImage: salonInfo ? salonInfo.profileImage: "",
    interestedmembershipid: salonInfo ? salonInfo.interestedmembershipid: "",
    notes: salonInfo ? salonInfo.notes: "",
    status: salonInfo ? salonInfo.status: "Registered",
  };

  
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [dataState, setDataState] = useState(initialFormState);
  const [errors, seterrors] = useState({});
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [employee, setemployee] = useState({ errorMsg: '', inputError: 0 });
  const [getselectedsalontype, setselectedSalonType] = useState(null);
  const [countryList, setCountryList] = useState([]);
  const [selectedCountryName, setselectedCountryName] = useState(null);
  const [validations, setValidations] = React.useState({})
  
  const validateAll = () => {
    const { salonName, email ,firstName,lastName,mobile,password,address,employees,country,businessType,interestedmembershipid,acceptTermsPolicy,acceptMarketingEmail} = dataState
   
      const validations = { salonName: '', email: '', firstName: '',lastName:'',mobile:'',password:'',address:'',employees:'',businessType:'',membership:'',country:'' ,state:'' ,city:'' ,acceptTermsPolicy:'',acceptMarketingEmail:'' }


    
    
    let isValid = true
    
    if (!salonName) {
      validations.salonName = 'Name is required'
      isValid = false
    }
     
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
    
    if (!password) {
      validations.password = 'Password is required'
      isValid = false
    }

    if (!address) {
      validations.address = 'Address is required'
      isValid = false
    }
    
    if (!country) {
      validations.country = 'Country is required'
      isValid = false
    }
    if (!dataState.state) {
      validations.state = 'State is required'
      isValid = false
    }
    if (!dataState.city) {
      validations.city = 'City is required'
      isValid = false
    }

    if (!dataState.postalCode) {
      validations.postalCode = 'Postal Code is required'
      isValid = false
    }

    if (!dataState.businessType) {
      validations.businessType = 'Salon Type is required'
      isValid = false
    }
     if (!employees) {
      validations.employees = 'Employee is required'
      isValid = false
    }

    if (!dataState.interestedmembershipid) {
      validations.interestedmembershipid = 'membership is required'
      isValid = false
    }

    if (!saloniD && !acceptTermsPolicy) {
      validations.acceptTermsPolicy = 'Please Select Terms And Policy'
      isValid = false
    }

    if (!saloniD && !acceptMarketingEmail) {
      validations.acceptMarketingEmail = 'Please Select Accept Marketing Email'
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

  
  
   const onChanger1 = (data) => {
   // e.persist();
    setselectedSalonType(data);
    setDataState({ ...dataState,"salontype":data.value });
                             }
  

  const profileImageadd = (val) => {
    setDataState({
      ...dataState,
      profileImage: val.file,
    });
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "checkbox") {
      setDataState({ ...dataState, [name]: value === "on" ? true : false });
    } else {
      setDataState({ ...dataState, [name]: value });
    }
 
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

 //  const { salonName,firstName ,lastName, email,  } = dataState

     const { salonName: nameVal,firstName: firstnameVal,lastName: lastnameVal , email: emailVal,mobile: mobileVal,password: passwordVal,address:addressVal,country:countryVal,state:stateVal,employees:employeesVal,businessType:salontypeVal,interestedmembershipid:membershipVal,acceptTermsPolicy:acceptTermsPolicyVal,acceptMarketingEmail:acceptMarketingEmailVal} = validations
 
  const handleFormSubmit = async (e) => {
 
      e.preventDefault()
   const isValid = validateAll()
   console.log("is",validations);
    if (!isValid) {
      return false
    }
  
      const iData = new FormData();
 
      iData.append("salonName", dataState.salonName);
      iData.append("firstName", dataState.firstName);
      iData.append("lastName", dataState.lastName);
      iData.append("mobile", dataState.mobile);
      iData.append("email", dataState.email);
      iData.append("postalCode", dataState.postalCode);
      iData.append("password", dataState.password);
      iData.append("acceptTermsPolicy", dataState.acceptTermsPolicy ? true : false );
      iData.append("acceptMarketingEmail", dataState.acceptMarketingEmail ? true: false );
      iData.append("address", dataState.address);
      iData.append("country", dataState.country);
      iData.append("state", dataState.state);
      iData.append("city", dataState.city);
      iData.append("employees", dataState.employees);
      iData.append("businessType", dataState.businessType);
      iData.append("profileImage",dataState.profileImage );
      iData.append("interestedmembershipid", dataState.interestedmembershipid);
      iData.append("notes", dataState.notes);
      iData.append("userType", "Salon");
      iData.append("source", "google");
     
      console.log("123",iData);
      var API_RRL = (!saloniD) ? `${API_URL2}admin/salonRegistration` : `${API_URL2}admin/salonUserInfoUpdate`;
     if(saloniD){
       iData.append("salonid", saloniD);
       iData.append("status", dataState.status);
      }
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
            navigate('/admin/salon-requested')
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




const getsalonRequestedLists = async (salonid) => {
      
    adminGetSalonUserInfo({salonid : salonid}).then(result => {
  
     if (result.status === 200) {
      setDataState(result.data)
    }
 }).catch(err => {

 });
}


 return (
    <div className="p_30 mb30">

      <GSpacing>
      {!saloniD ?
       <>
      <span>{Svg.web}</span>
      <span className="colorRed fs14 ml10 mr10">{t("Breadcrum")}</span>
      <span>{Svg.rightArrow}</span>

     
      <Link to="#" className="colorLightGrey fs14 ml10 mr10" name={t("Salonrequestlist")} >
      {t("Createsalonrequest")}
      </Link>
      </>
      :
      <>
      <span>{Svg.web}</span>
      <span className="colorRed fs14 ml10 mr10">{t("Breadcrum")}</span>
      <span>{Svg.rightArrow}</span>

     
      <Link to="#" className="colorLightGrey fs14 ml10 mr10" name={t("Salonrequestlist")} >
      {t("Editsalonrequest")}
      </Link>
      </>
}
      </GSpacing>
      <section className="bgWhite radius">
      {saloniD ?  <SalonRequestTab
         dataState={dataState}
         handleInputChange={handleInputChange}
        
      />: ''}  
        <div className="card-body">
        <Toaster/>
          <Row>
            <Col md={3}>
              <div className="border radius4 pt20 text-center">
           
                 <GImageUpload 
                 
                  setImageUrl={IMAGE_URL + dataState.profileImage } 
                   value={dataState.profileImage}
                getImage={profileImageadd}
                />
              </div>
          
              <div className="mt15 salon_note position-relative">
               
                <label>{t("Notes")}</label>
                <span className="icon_note">{Svg.book}</span>
                <textarea
                  className="h_130"
                  name="notes"
                  value={dataState.notes}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Add note here"
                />

              </div>
            </Col>
            <Col md={9}>
              <div>
                <Row className="">
                  <Col md={6}>
                    <GIconInput
                      label="Salon name"
                      placeholder="Enter salon name"
                      type="text"
                     
                      name="salonName"
                      value={dataState.salonName}
                      onChange={(e) => handleInputChange(e)}
                      onBlur={validateOne}
                    />
                     <div style={{color:'red'}}> {nameVal}</div>      
                  </Col>

                  <Col md={3}>
                    <GIconInput
                      label="First Name"
                      placeholder="Enter first name"
                      type="text"
                      name="firstName"
                      onBlur={validateOne}
                      value={dataState.firstName}
                      onChange={(e) => handleInputChange(e)}
                    />
                   <div style={{color:'red'}}> {firstnameVal}</div>        
                  </Col>

                  <Col md={3}>
                    <GIconInput
                      label="Last Name"
                      placeholder="Enter last name"
                      type="text"
                      name="lastName"
                      onBlur={validateOne}
                      value={dataState.lastName}
                      onChange={(e) => handleInputChange(e)}
                    />
                       <div style={{color:'red'}}> {lastnameVal}</div>  
                  </Col>

                  <Col md={6}>
                    <GIconInput
                      label="Mobile Number"
                      placeholder="Enter mobile number"
                      type="tel"
                      name="mobile"
                      value={ dataState.mobile}
                      onBlur={validateOne}
                      onKeyPress={textExpression}
                      onChange={(e) => handleInputChange(e)}
                      
                    />
                     <div style={{color:'red'}}> {mobileVal}</div>  
                  </Col>

                  <Col md={6}>
                    <GIconInput
                      label="Email"
                      placeholder="Enter email address"
                      type="email"
                      name="email"
                      value={dataState.email}
                      onBlur={validateOne}
                      onChange={(e) => handleInputChange(e)}
                    />
                     <div style={{color:'red'}}> {emailVal}</div>  
                  </Col>
                  {!saloniD ?
                  <Col md={6}>
                     <GSpacing>
                      <GPasswordInput
                        label={t("Password")}
                        name="password"
                        placeholder={t("Password")}
                        value={!saloniD ? dataState.password : <span disabled>{dataState.password} </span> }
                        onChange={(e) => handleInputChange(e)}
                        onBlur={validateOne} 
                      />
                      
                      <div style={{color:'red'}}> {passwordVal}</div>  
                    </GSpacing>
                    </Col>
                      : ''}

                  <Col md={6}>
                    <GIconInput
                      label="Address "
                      placeholder="Enter address"
                      type="text"
                      name="address"
                      value={dataState.address}
                      onBlur={validateOne} 
                      onChange={(e) => handleInputChange(e)}
                    />
                    
                    <div style={{color:'red'}}> {addressVal}</div>  
                  </Col>

                  <AddressForm
                    dataState={dataState}
                    handleInputChange={handleInputChange}
                    errors={validations}
                  />

                  <Col md={6}>
                    <div className="select_border">
                      <label className="labelInput">
                        Employee Working<span className="text-red"> * </span>
                      </label>
                   

                        <GIconInput
                 
                      name="employees"
                      onBlur={validateOne} 
                      value={dataState.employees}
                      onKeyPress={(event) => { if (!/^\d*[]?\d{0,1}$/.test(event.key)) { event.preventDefault(); } }}
                      onChange={(e) => handleInputChange(e)}

                    />
                    <div style={{color:'red'}}> {employeesVal}</div>  
                   </div>
                   
                  </Col>

                  <Col md={6}>
                    <div className="select_border">
                      <label className="labelInput">
                        What type of salon do you have?
                        <span className="text-red"> * </span>
                      </label>

                      <div className="mb-3 select_border">
        
          <select className="themeSelect selectbox" name="businessType" onChange={(e) =>handleInputChange(e)}  value={dataState.businessType} >
              <option value="">Select Salon Type</option>
              
              <option  value='Shop'>Shop</option>
              <option  value='Mobile'>Mobile</option>
              <option  value='Home'>Home</option>
              
          </select>
          <div style={{color:'red'}}> {salontypeVal}</div>    
      </div>
                                     
                    </div>
                
                  </Col>

                  <MembershipPlanForm
                    dataState={dataState}
                    handleInputChange={handleInputChange}
                    errors={validations}
                  />
             

                  <Col md={12}>
                  {!saloniD ?
                    <GSpacing marginTop="10px">
                      <GCheckbox
                        name="agreeTerms"
                        id="agreeTerms"
                        checked={dataState.acceptTermsPolicy}
                        
                        onChange={(e) =>
                          setDataState({
                            ...dataState,acceptTermsPolicy: !dataState.acceptTermsPolicy,
                          })
                        }
                        label={t("AgreePolicy")}
                      />
                             <div style={{color:'red'}}> {acceptTermsPolicyVal}</div>  
                    
                    </GSpacing>
                :''}

             {!saloniD ?
                    <GSpacing marginBottom="10px">
                  
                      <GCheckbox
                        name="offersAccepted"
                        id="offersAccepted"
                        checked={dataState.acceptMarketingEmail}
                        onChange={(e) =>
                          setDataState({
                            ...dataState,acceptMarketingEmail: !dataState.acceptMarketingEmail,
                          })
                        }
                        label={t("Agree")}
                      />
                      <div style={{color:'red'}}> {acceptMarketingEmailVal}</div>  
                       
                    </GSpacing>
                    : ''}
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>

        <div className="bTop card-body">
          <Container fluid className="">
            <Row>
              <Col>
                <div className="card-body-box">
                  <GAlign align="right">
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
                    <GButton onClick={handleFormSubmit}>Save</GButton>
                  </GAlign>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default CreateSalonRequest;
