import React, { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import {API_URL2} from '../../../helpers/apiurls';
import { IMAGE_URL } from "../../../helpers/apiurls";
import axios from 'axios';
import Auth from "../../../helpers/Auth/Auth";
import ImageModalView from "../../../components/ImageModalView/ImageModalView";
import toast, { Toaster } from 'react-hot-toast';
import { AdminServiceLists } from "../../../store/admin/service/action";
import { connect, useDispatch, useSelector } from "react-redux";

const options = [
  { label: "Option 1", value: "option_1" },
  { label: "Option 2", value: "option_2" },
  { label: "Option 3", value: "option_3" },
  { label: "Option 4", value: "option_4" },
];

const Createservicegroup = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  //   For the Multiple select box
  // const { servicegroup } = props
  const dispatch = useDispatch()
  const servicegroup = useSelector(state => state.service && state.service.service )
  const [servicegroupInfo, setMembershipInfo] = useState(servicegroup);
  var initialFormState = {
    // servicegroupid: servicegroupInfo ? servicegroupInfo._id : '',
    name: servicegroupInfo ? servicegroupInfo.name : '',
    services: servicegroupInfo ? servicegroupInfo.services : [],
                          }
  const [dataState, setDataState] = useState(initialFormState);
  const [multiselect, setmultiselect] = useState("");
  const [validations, setValidations] = useState("");
 const [ServiceLists,setAllServiceLists] = useState([])
 const [selectedOptions, setSelectedOptions] = useState([]);

   //   For the Multiple select box handle change
   const handleOnchange = (val) => {
    setmultiselect(val);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setDataState({
      ...dataState,
      [name]: value,
    });
  };

 

  const multihandleChange = (ServiceLists) => {
    console.log("ServiceLists",ServiceLists);
    setSelectedOptions(ServiceLists);
  };
 


  useEffect(() => {
    
    AdminAllServiceLists()
  }, [])

  
 const validateAll = () => {
  const validations = { name: '', services: [] }

let isValid = true
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
setValidations({...validations, [name]: message })
}


console.log("AZQ",typeof(selectedOptions));

const onSubmitHandler = async (e) => {

e.preventDefault()
const isValid = validateAll()
if (!isValid) {
return false
}
const myArray = selectedOptions.split(",");
const changedata = {"name": dataState.name,"services": myArray}

var API_RRL =  `${API_URL2}admin/addServiceGroup`;

await axios({
  method: "POST",
  url:API_RRL, 
  headers: {
    
    Accept: "application/json",
    Authorization: "Bearer " + Auth.getToken(),
  },

  data: changedata
}).then((resp) => {
   
  if (resp.data.status === 200){
    toast.success('Category Added Successfully.', {
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
ImageModalView.hide()
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

const { name: nameVal,image: imageVal,categoryName: categoryNameVal} = validations




  return (
    <>
      <h3 className="fs14 lb pl20 pt20 pb20 mb20 bBottom text-uppercase">
        {t("Addnewservice")}
      </h3>
      <form  >
        <Toaster/>
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
              value={dataState.services}
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

export default Createservicegroup;
