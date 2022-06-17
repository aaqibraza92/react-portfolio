import React, { useEffect, useState } from "react";

import GSpacing from "../Layout/GSpacing";
import GIconInput from "../Layout/GIconInput";
import Select from "react-select";
import Auth from "../../helpers/Auth/Auth";
import GAlign from "../../components/Layout/GAlign";
import GButton from "../../components/Layout/GButton";
import axios from "axios";
import { API_URL2 } from "../../helpers/apiurls";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import {useLocation} from 'react-router-dom';
import { useNavigate, Navigate} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import ImageModalView from "../../components/ImageModalView/ImageModalView";
import GoogleMapForm from "./GoogleMapForm";
import {
    Col,
    Container,
    Row,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
    Table,
  } from "reactstrap";


const GoogleLocationModal = (props,salondata) => {
  console.log("123445",props);
    // const { t, i18n } = useTranslation();
    // document.body.dir = i18n.dir();
    const loc= useLocation();
    const saloniD = loc.hash.replace("#", '');
    const dispatch = useDispatch();
    const salonid = props.location && props.location.state;
    const navigate = useNavigate();
    const [salonRequestedLists, SalonRequestLists] = useState();
    
    const [dataState, setDataState] = useState({
      salonid:props.data._id,
      salonName: props.data.salonName,
      firstName : props.data.firstname,
      lastName : props.data.lastname,
      mobile : props.data.mobile,
      email : props.data.email,
       acceptTermsPolicy :props.data.acceptTermsPolicy ? true : false,
      acceptMarketingEmail: props.data.acceptMarketingEmail ? true: false ,
      employees :props.data.employees,
      businessType: props.data.businessType,
      profileImage :props.data.profileImage ,
      membershipId: props.data.membershipId,
      notes: props.data.notes,
      userType: "Salon",
      source: "google",
      country: props.data.country,
      address:props.data.address,
      state:props.data.state,
      city:props.data.city,
      postalcode:props.data.postalcode,
      status:props.data.status
  });

  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);




  useEffect(() => {
    getCountryAPI()
    }, [])

  useEffect(() => {
    getStateListAPI(dataState.country)
    getCityListAPI()
    }, [dataState.country])

    useEffect(() => {
      getCityListAPI(dataState.state)
    }, [dataState.state])

  const getCountryAPI = async (type) => {
    await axios({ method: 'get',
    url: `${API_URL2}getCountryList`,
    Accept: "application/json",
        Authorization: "Bearer " + Auth.getToken(),
    }).then(response => {
      let data1 = response.data.data;
      let result = data1?.map(o => ({ value: o.country_id, label: o.name}));
     setCountryList(result);                     
    })
  } 
    
  const getStateListAPI = async (selectedCountryName) => {
    await axios({ 
    method: 'post',
    url: `${API_URL2}getStateList`,
    Accept: "application/json",
    Authorization: "Bearer " + Auth.getToken(),
    data: {"country": dataState.country}
    }).then(response => {
      let data2 = response.data.data;
   
    let result = data2.map(o => ({
                                 value: o.country_id, 
                                 label: o.name
    }));
    
    setStateList(result);
        })
      } 
  const getCityListAPI = async (type) => {
    await axios({ 
    method: 'post',
    url: `${API_URL2}getCityList`,
    Accept: "application/json",
    Authorization: "Bearer " + Auth.getToken(),
    data: {"state": dataState.state}
    }).then(response => {
      let data2 = response.data.data;
    
    let result = data2.map(o => ({
                                 value: o.country_id, 
                                 label: o.name
                                }));
                                
                                setCityList(result);                                    
    })
  } 
   

  const handlecoordinates = (resp) => {
   
    setDataState({
      ...dataState,
      googleMap: resp,
    });
   console.log("coordinateslat>>>",resp.lat);
   console.log("coordinateslng>>>",resp.lng);
          }





    const handleInputChange = (e) => {
      const { name, value, type } = e.target;
      console.log("123",e.target.name);
        setDataState({ ...dataState,[e.target.name]: e.target.value });
     
       };

 

    const handleFormSubmit = async (e) => {
 
      e.preventDefault()
 
    
  
      const iData = new FormData();
 
      iData.append("salonName", dataState.salonName);
      iData.append("firstName", dataState.firstName);
      iData.append("lastName", dataState.lastName);
      iData.append("mobile", dataState.mobile);
      iData.append("email", dataState.email);
      iData.append("postalCode", dataState.postalcode);
      // iData.append("password", dataState.password);
      iData.append("acceptTermsPolicy", dataState.acceptTermsPolicy ? true : false );
      iData.append("acceptMarketingEmail", dataState.acceptMarketingEmail ? true: false );
      iData.append("address", dataState.address);
      iData.append("country", dataState.country);
      iData.append("state", dataState.state);
      iData.append("city", dataState.city);
      iData.append("employees", dataState.employees);
      iData.append("businessType", dataState.businessType);
      iData.append("profileImage",dataState.profileImage );
      iData.append("interestedmembershipid", dataState.membershipId);
      iData.append("notes", dataState.notes);
      iData.append("userType", "Salon");
      iData.append("source", "google");
      iData.append("salonid", props.data._id);
      iData.append("status", dataState.status);
      iData.append("coordinates[0]", dataState.googleMap.lat);
      iData.append("coordinates[1]", dataState.googleMap.lng);

      console.log("123",iData);
      var API_RRL = `${API_URL2}admin/salonUserInfoUpdate`;
    
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
          
    //  setTimeout(() => {
    //         navigate('/admin/salon-requested')
    //     }, 1000); 
        
        setTimeout(() => {
          ImageModalView.hide()
          // closecreateCategoriesForm()
         
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
        <GAlign align="between" alignV="center" className="card-body bBottom">
          <Toaster/>
          <h3 className="fs14 lb mb0 text-uppercase">{t("locationModal")}</h3>
        </GAlign>
      {console.log("dataState",dataState)}
  
     
        <GoogleMapForm
             google={props}
             center={{lat: props.data.googleMap[0] ?  props.data.googleMap[0] :18.5204   , lng:props.data.googleMap[1]  ? props.data.googleMap[1] :73.8567}}
             height='300px'
             zoom={15}
             handlecoordinates={handlecoordinates}
            //  value={dataState.googleMap}
                  />
              


        <div className="box_s border_radius8">
       
          <div className="pt15 pb15 pl10 pr10">
            <Container>
              <Row>
                <Col md={12}>
                  <GIconInput
                    label="Address:"
                    onChange={handleInputChange} 
                    value={dataState.address}
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                  />
                </Col>
  
                <Col md={6}>
                  {/* <GIconInput
                     onChange={(e) => handleInputChange(e)} 
                    value={dataState.country}
                    label="Country:"
                    type="text"
                    name="country"
                    placeholder="Country"
                  /> */}
                  <label className="labelInput"> Country :</label><br/>
                     <select className="themeSelect selectbox" name="country" onChange={(e) => {handleInputChange(e)}}  value={dataState.country} required>
              <option value="">Select Country</option>
              {countryList && countryList.map((item, i) =>
              <option key={item.label} value={item.label}>{item.label}</option>
              )};
          </select>
                </Col>
  
                <Col md={6}>
                  {/* <GIconInput
                    onChange={(e) => handleInputChange(e)} 
                    value={dataState.state}
                    label="State:"
                    type="text"
                    name="state"
                    placeholder="State"
                  /> */}
                   <label className="labelInput"> State :</label><br/>
                       <select className="themeSelect selectbox" name="state" onChange={(e) => handleInputChange(e)}  value={dataState.state} required>
              <option value="">Select State</option>
              {stateList && stateList.map((item, i) =>
              <option key={item.label} value={item.label}>{item.label}</option>
              )};
          </select>
                </Col>
  
                <Col md={6}>
                  {/* <GIconInput
                     onChange={(e) => handleInputChange(e)} 
                     value={dataState.city}
                    label="City:"
                    type="text"
                    name="address"
                    placeholder="City"
                  /> */}
                   <label className="labelInput"> City :</label><br/>
                      <select className="themeSelect selectbox" name="city" onChange={(e) => handleInputChange(e)}  value={dataState.city} required>
              <option value="">Select City</option>
              {cityList && cityList.map((item, i) =>
              <option key={item.label} value={item.label}>{item.label}</option>
              )};
          </select>
                </Col>
  
                <Col md={6}>
                  <GIconInput
                     onChange={(e) => handleInputChange(e)} 
                    value={dataState.postalcode}
                    label="Postal Code:"
                    type="Number"
                    name="postalcode"
                    placeholder="Postal Code"
                  />
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
            <GButton onClick={handleFormSubmit}>{t("Save")}</GButton>
          </div>
        </div>
      </>
    );
  };

  export default GoogleLocationModal;