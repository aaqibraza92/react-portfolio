import React, { useState ,useEffect,useRef } from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import GImageCircleUpload from "../../../components/Layout/GImageCircleUpload/GImageCircleUpload";

import toast, { Toaster } from 'react-hot-toast';
import {useLocation} from 'react-router-dom';
import { useNavigate, Navigate} from "react-router-dom";
import {API_URL2} from '../../../helpers/apiurls';
import { IMAGE_URL } from "../../../helpers/apiurls";
import axios from 'axios';
import Auth from "../../../helpers/Auth/Auth";
import ImageModalView from "../../../components/ImageModalView/ImageModalView";
import { headerNavItems } from "../../../store/navitems/actions";
import { adminallcategorylist, adminUpdateMembership } from '../../../helpers/backend/admin'
import { connect, useDispatch, useSelector } from "react-redux";
import { notify } from "react-notify-toast";
import { EditorState,ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

const Addnewservice = (props) => {
  
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const loc= useLocation();
  const categoryId = loc.hash.replace("#", '');
  const categoryid = props.location && props.location.state;
  const navigate = useNavigate();

  const [dataState, setDataState] = useState({name:"",image:"",categoryName:"",description:"",restriction:"",goodToKnow:""});
  const [getallcategorylist,setAllCategoryLists]=useState([])
  const [getCategoryLists, setCategoryLists] = useState([]);
  // For error msg
  const [validations, setValidations] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [inserted, setinserted] = useState(false);
  const editor = useRef(null)

  const config1 = {
    readonly: false   // all options from https://xdsoft.net/jodit/doc/
                }

  useEffect(() => {
    const fetchData = async () => {
       await dispatch(headerNavItems())
    }
    fetchData()
  }, [])

  const menuList = useSelector(
    (state) => state.navitems && state.navitems.navitems
  );

  useEffect(() => {
    setCategoryLists(menuList)
  }, [menuList])

  
  useEffect(() => {
    AdminAllCategoryLists()
  }, [])

 
  const ServiceImageadd = (val) => {
    setDataState({
      ...dataState,
      image: val.file,
    });
  }

 
  
 const onChangeHandler = (event) => {
  
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
               };

  
 const newContent = (value) => {
               localStorage.setItem('description',value)
                        }  

   const newContent1 = (value) => {
    console.log("dfgdf",value);
                     localStorage.setItem('restriction',value)
                          }  

    const newContent2 = (value) => {
                        localStorage.setItem('goodToKnow',value)
                                }                          

 
  

  
 const validateAll = () => {
      const validations = { name: '', categoryName: '',image:'' , }

   let isValid = true

  //  if(dataState.image ==""){
  //   let myColor = { background: "#FF385C", text: "#FFFFFF" };
  //  return  notify.show("Please Upload Service Image ", "custom", 5000, myColor);
  // }
    
    if (!dataState.name) {
      validations.name = 'Service Name is required'
      isValid = false
    }

    if (!dataState.categoryName) {
      validations.categoryName = 'Category Name is required'
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
      message = `${name} is required!`
    }
    
    if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
      message = 'Name must contain between 3 and 50 characters'
    }

    setValidations({...validations, [name]: message })
  }

  

  const onSubmitHandler = async (e) => {

    e.preventDefault()
  //  const isValid = validateAll()
  //   console.log("is",validations);
  //   if (!isValid) {
  //   return false
  // }

    const iData = new FormData();
   
    iData.append("name", dataState.name);
    iData.append("categoryid", dataState.categoryName);
    iData.append("image", dataState.image);
    iData.append("description", localStorage.getItem('description'));
    iData.append("restriction", localStorage.getItem('restriction'));
    iData.append("goodToKnow", localStorage.getItem('goodToKnow'));

    var API_RRL =  `${API_URL2}admin/addService`;
   
    await axios({
      method: "POST",
      url:API_RRL, 
      headers: {
        // "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: "Bearer " + Auth.getToken(),
      },
      data: iData,
    }).then((resp) => {
         console.log("serv",resp.data.message[0].param);
      if (resp.data.status === 200){
        let myColor = { background: "#4bb543", text: "#FFFFFF" };
        notify.show(resp.data.message, "custom", 5000, myColor);
        
  //  setTimeout(() => {
  //   ImageModalView.hide()
  //   props.closeForm()
   
  //     }, 1000);  
       } 
       else{
        if(resp.data.status === 202){
          let myColor = { background: "#FF385C", text: "#FFFFFF" };
          notify.show(resp.data.message[0].param+' '+resp.data.message[0].msg, "custom", 5000, myColor);
  }
     }
     }).catch(err => {
    toast.error('Something Went Wrong!',
    );
  })
};



const AdminAllCategoryLists = async () => {
     await axios({
      method: 'get',
      url: `${API_URL2}getAllCategoryList`, 
   })
  .then(result => {
   console.log("resultlist",result.data.data);
   if (result.data.status === 200) {
    setAllCategoryLists(result.data.data)
              }
   else {
   }
}).catch(err => {

});
}

// const { name: nameVal,image: imageVal,categoryName: categoryNameVal} = validations
  return (
    <>
      <h3 className="fs14 lb pl20 pt20 pb20 bBottom text-uppercase">
        {t("Addnewservice")}
      </h3>
      <Container className="p-0">
        <Toaster/>
        <form >
          <div className="card-body">
            <div className="text-center mb30">
         
              <GImageCircleUpload
                 name="image"
                 getImage={ServiceImageadd}
              />
              {/* <div style={{color:'red'}}> {imageVal}</div>    */}
            </div>

            <Row className="mb20">
              <Col md={6}>
                <label htmlFor="name" className="fs14 colorGrey">
                  {t("Servicename")}
                </label>
                <input
                  id="name"
                  type="text"
                  className="form_custom"
                  placeholder={t("Enterservicename")}
                  name="name"
                  value={dataState.name}
                  onChange={onChangeHandler}
                  // onBlur={validateOne}
                />
                         {/* <div style={{color:'red'}}> {nameVal}</div>    */}
     
              </Col>
              <Col md={6}>
                <div>
                  <label htmlFor="service" className="fs14 colorGrey">
                    {t("Categoryname")}
                  </label>
                  <div className="form_custom">
                    <select
                      id="categoryName "
                      className="w-100 pt10 pb13"
                      name="categoryName"
                     value={dataState.categoryName}
                      onChange={onChangeHandler}
                      // onBlur={validateOne}
                    >
                      <option value="">Select Category Name</option>
                      {getallcategorylist.map((item) =>(
                      <option key={item.name} value={item._id}>{item.name}</option>
                      // <option value="3">Hair Wash</option>
                   ))}
                    </select>
                    {/* <div style={{color:'red'}}> {categoryNameVal}</div>    */}
                  </div>
               
                </div>
              </Col>
            </Row>

            <div className="mb20">
              <h3 className="fs14 mb10">{t("Description")}</h3>
            
                      <JoditEditor
                     	ref={editor}
                       name="description"
                      // value={dataState.description}
                        onChange={newContent}
            />
            </div>
            <div className="mb20">
              <h3 className="fs14 mb10">{t("Restrictions")}</h3>
              <JoditEditor
                     	ref={editor}
                       name="restriction"
                      // value={dataState.restriction}
                       onChange={newContent1}
            />
            </div>
            <div>
              <h3 className="fs14 mb10">{t("Goodtoknow")}</h3>
              <JoditEditor
                     	ref={editor}
                      // value={dataState.goodToKnow}
                       onChange={newContent2}
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
      </Container>
    </>
  );
};

export default Addnewservice;
