import React, { useEffect, useState } from "react";
import { Col } from "reactstrap";
import GSpacing from "../Layout/GSpacing";
import GIconInput from "../Layout/GIconInput";
import Select from "react-select";
import Auth from "../../helpers/Auth/Auth";
import { getCountryListApi, getStateListApi, getCityListApi } from '../../helpers/backend/index'
import axios from "axios";
import { API_URL2 } from "../../helpers/apiurls";


const MembershipPlanForm = (props) => {


    const [getmemberplanlist,setmemberplanList] = useState([]);
    const [selectedmemberplanname,setselectedmemberplanList] = useState(null);
    const [errors, seterrors] = useState({});
    const [validations, setValidations] = React.useState({})


  const onChangeMemberplan = (data) => {
 
  
    setselectedmemberplanList(data);
    props.handleInputChange({target:{name : 'interestedmembershipid', value : data.value}});
  }
  
  useEffect(() => {
    getmemberplanAPI()
  }, []);

  


  const getmemberplanAPI = async (type) => {
   
    await axios({ method: 'get',
    url: `${API_URL2}/salon/membershipNameList`,
    Accept: "application/json",
        Authorization: "Bearer " + Auth.getToken(),
    }).then(response => {
     
      let data1 = response.data.data;
   
    let result = data1?.map(o => ({ value: o._id, label: o.planName}));
                
                                setmemberplanList(result);
                    
    })
  } 


  return (

    <>
    
                    <Col md={6}>
                    <div className="select_border">
                      <label className="labelInput">
                        Interested Membership Plan
                        <span className="text-red"> * </span>
                      </label>
                      {/* <Select
                        label="Account type *"
                        className="themeSelect"
                        classNamePrefix="themeSelect"
                       
                        name="membership"
                        value={selectedmemberplanname}
                        onChange={onChangeMemberplan}
                        options={getmemberplanlist}
                      
                      /> */}

                       
        <br/>
          <select className="themeSelect selectbox" name="interestedmembershipid" onChange={(e) => {props.handleInputChange(e)}}  value={props.dataState.interestedmembershipid} >
              <option value="">Select Membership Type</option>
              {getmemberplanlist && getmemberplanlist.map((item, i) =>
              
              <option key={item.value} value={item.value} selected={props.dataState.interestedmembershipid === item.value ? true : false}>{item.label}</option>
              )};
          </select>
          <div style={{color:'red'}}> {props.errors.interestedmembershipid}</div>    
      
                      
                    
                    </div>
                  </Col>
    
    
    </>
  )
}

export default MembershipPlanForm;