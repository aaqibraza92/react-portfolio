import React, { useEffect, useState } from "react";
import {
  CardTitle,
  Col,
  Container,
  Row,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Table,
  Form
} from "reactstrap";
import GIconInput from "../../../components/Layout/GIconInput";
import Svg from "../../../assets/svg/Svg";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "react-notify-toast";
import {  adminUpdateServiceGroup } from '../../../helpers/backend/admin'
import GCheckbox from "../../../components/Layout/GCheckbox";
import { useTranslation } from "react-i18next";
import GButton from "../../../components/Layout/GButton";
import toast, { Toaster } from 'react-hot-toast';
import ImageModalView from "../../../components/ImageModalView/ImageModalView";
import MultiSelect from "react-multiple-select-dropdown-lite";
import GAlign from "../../../components/Layout/GAlign";
import axios from 'axios';
import {API_URL2} from '../../../helpers/apiurls';

const EditServiceGroup = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch();
  console.log("123214567",props.editservicegroup);
  console.log("12321456",props.editservicegroup.servicelist);
  console.log("1232145",props.editservicegroup.groupName);
  const { editservicegroup } = props

  var initialFormState = {
    servicegroupid: editservicegroup ? editservicegroup._id : '',
    name: editservicegroup ? editservicegroup?.groupName : '',
    services: editservicegroup ? editservicegroup.servicelist : [],
                       }
   const [dataState, setDataState] = useState(initialFormState);
   const [ServiceLists,setAllServiceLists] = useState([])
   const [selectedOptions, setSelectedOptions] = useState({services:[]});

   let selectedservicelist = props.editservicegroup.servicelist?.map(o => ({ value: o.serviceId, label: o.name}));
   console.log("listnew",selectedservicelist[0],[1],[2].label);
  useEffect(() => {
    AdminAllServiceLists()
  }, [])

  const handleChange = (e) => {
    setSelectedOptions(Array.isArray(e) ? e.map(x => x.value) : []);
  }

  const AdminAllServiceLists = async () => {
    await axios({
     method: 'get',
     url: `${API_URL2}getAllServiceList`, 
  })
  .then(result => {
  console.log("resultlist123",result.data.data);
   let data1 = result.data.data;
    let results = data1?.map(o => ({ value: o._id, label: o.name}));
    console.log("list123",results);
   setAllServiceLists(results)         
  })
  }
  


  const onSubmitHandler = (e) => {
    alert("123")
   e.prevendefault()
    const functioncall = adminUpdateServiceGroup(dataState)

      functioncall.then((resp) => {
      if (resp.status === 200) {
      //   ImageModalView.hide()
      //   props.closeForm()
      // //   setTimeout(() => {
      //  let myColor = { background: "#4bb543", text: "#FFFFFF" };
      // return notify.show(resp.message, "custom", 5000, myColor);
      // // }, 1000); 
       
      }
      else {
        if (resp.status === 202) {
          let myColor = { background: "#FF385C", text: "#FFFFFF" };
          return notify.show(resp.message[0].param + ' ' + resp.message[0].msg, "custom", 5000, myColor);
        
        }
      }
    }).catch(err => {
    
    })
  
}
  
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setDataState({
      ...dataState,
      [name]: value,
    });
  };

 

  const multihandleChange = (selectedservicelist) => {
    console.log("ServiceLists",selectedservicelist);
    setSelectedOptions(selectedservicelist);
  };
 



 
  
  
  const closeDisplayForm = () => {
    props.toggle()
    setDataState(initialFormState)
  }


    return (
      <>
        <h3 className="fs14 lb pl20 pt20 pb20 mb20 bBottom text-uppercase">
        {t("Edit Service Group")}
      </h3>
      <form  >
        <div className="pr20 pl20">
          <label htmlFor="name">{t("Servicename")}</label>
          <input
            id="name"
            type="text"
            className="form_custom"
            placeholder={t("Enterservicename")}
            name="name"
            value={dataState.name}
            onChange={onChangeHandler}
          />
        

          <div className="mb20 custom_multiselect pointer">
            <h3 className="fs15 colorGrey pointer">{t("Services")}</h3>
            <MultiSelect
              onChange={multihandleChange}
              // value={selectedCountryName}
              value={selectedservicelist?.map((o) => (
                o.label
    ))}
              options={ServiceLists}
              className="pointer"
              // name="servicesid"
              // onChange={onChangeHandler}
              // value={dataState.services}
            />
      
          </div>
        </div>
        <div className="bTop pt15 pb15 pr20 m_bg_footer">
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
            >
              {t("Close")}
            </GButton>
            <GButton transform="capitalize" onClick={onSubmitHandler}>{t("Save")}</GButton>
          </GAlign>
        </div>
      </form>
      </>
    );
  };
  

  export default EditServiceGroup;