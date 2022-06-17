import React, { useState ,useEffect,useRef } from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import GImageCircleUpload from "../../../components/Layout/GImageCircleUpload/GImageCircleUpload";
import WysiwygEditor1 from "../../../components/WysiwygEditor/WysiwygEditor_description";
import WysiwygEditor2 from "../../../components/WysiwygEditor/WysiwygEditor_restrictions";
import WysiwygEditor3 from "../../../components/WysiwygEditor/WysiwygEditor_goodtoknow";
import toast, { Toaster } from 'react-hot-toast';
import {useLocation} from 'react-router-dom';
import { useNavigate, Navigate} from "react-router-dom";
import {API_URL2} from '../../../helpers/apiurls';
import { IMAGE_URL } from "../../../helpers/apiurls";
import axios from 'axios';
import Auth from "../../../helpers/Auth/Auth";
import ImageModalView from "../../../components/ImageModalView/ImageModalView";
import { headerNavItems } from "../../../store/navitems/actions";
import { connect, useDispatch, useSelector } from "react-redux";
import { notify } from "react-notify-toast";
import { EditorState,ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

const EditService = (props) => {
  
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const loc= useLocation();
  const categoryId = loc.hash.replace("#", '');
  const categoryid = props.location && props.location.state;
  const navigate = useNavigate();
  console.log("1232145",props);
  const { editservice } = props

  var initialFormState = {
    serviceid: editservice ? editservice._id : '',
    name: editservice ? editservice.name : '',
    categoryName: editservice ? editservice.categoryName : '',
    image: editservice ? editservice.image : '',
    description: editservice ? editservice.description : '',
    restriction: editservice ? editservice.restriction : '',
    goodToKnow: editservice ? editservice.goodToKnow : '',
  }
  const [dataState, setDataState] = useState(initialFormState);

//   const [dataState, setDataState] = useState({name:"",image:"",categoryName:"",description:"",restriction:"",goodToKnow:""});
  const [getCategoryLists, setCategoryLists] = useState([]);
  // For error msg
  const [validations, setValidations] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const[getallcategorylist,setAllCategoryLists]=useState([])
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
  };
  
 const onChangeHandler1 = (e) => {
     console.log("QQQ",e.target);
      const { name, value } = e.target;
      setDataState({...dataState,[name]: value,});
               };

               const onChangeHandler = event => {
                console.log("QQQ",event.target.value);
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
  
 const newContent = (value) => {
                console.log(value);
                // alert('333')
                localStorage.setItem('description',value)
                    }  
const newContent1 = (value) => {
                      console.log(value);
                     
                      localStorage.setItem('restriction',value)
                          }  
                          const newContent2 = (value) => {
                            console.log(value);
                           
                            localStorage.setItem('goodToKnow',value)
                                }                          


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
                
           
  const onSubmitHandler = async (e) => {

    e.preventDefault()
//    const isValid = validateAll()
//     console.log("is",validations);
//     if (!isValid) {
//     return false
//   }

    const iData = new FormData();
    iData.append("serviceid", props.editservice._id);
    iData.append("name", dataState.name);
    iData.append("categoryid", dataState.categoryName);
    iData.append("image", dataState.image);
    iData.append("description", localStorage.getItem('description'));
    iData.append("restriction", localStorage.getItem('restriction'));
    iData.append("goodToKnow", localStorage.getItem('goodToKnow'));

    var API_RRL =  `${API_URL2}admin/updateService`;
   
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
       
      if (resp.data.status === 200){
        let myColor = { background: "#4bb543", text: "#FFFFFF" };
        notify.show(resp.data.message, "custom", 5000, myColor);
        
   setTimeout(() => {
    ImageModalView.hide()
    props.closeForm()
   
      }, 1000);  
       } 
       else{
        if(resp.data.status === 202){
          let myColor = { background: "#FF385C", text: "#FFFFFF" };
          notify.show(resp.data.message, "custom", 5000, myColor);
  }
     }
     }).catch(err => {
    toast.error('Something Went Wrong!',
    );
  })
};

const { name: nameVal,image: imageVal,categoryName: categoryNameVal} = validations
  return (
    <>
      <h3 className="fs14 lb pl20 pt20 pb20 bBottom text-uppercase">
        {t("Editnewservice")}
      </h3>
      <Container className="p-0">
        <Toaster/>
        <form >
          <div className="card-body">
            <div className="text-center mb30">

              <GImageCircleUpload
               
                 setImageUrl={IMAGE_URL +dataState.image } 
                //  value={dataState.image}
                 getImage={ServiceImageadd}
              />
          
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
                            />
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
                    >
                      <option  value={dataState.categoryName}>Select Category Name</option>
                      {getallcategorylist.map((item) =>(
                      <option key={item._id} value={item._id}>{item.name}</option>
             
                   ))}
                    </select>
               
                  </div>
               
                </div>
              </Col>
            </Row>

            <div className="mb20">
              <h3 className="fs14 mb10">{t("Description")}</h3>
                      <JoditEditor
                     	ref={editor}
                      value={dataState.description}
                      onChange={newContent}
            />
            </div>
            <div className="mb20">
              <h3 className="fs14 mb10">{t("Restrictions")}</h3>
             
              <JoditEditor
                     	ref={editor}
                      value={dataState.restriction}
                      onChange={newContent1}
            />
            </div>
            <div>
              <h3 className="fs14 mb10">{t("Goodtoknow")}</h3>
              <JoditEditor
                     	ref={editor}
                      value={dataState.goodToKnow}
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

export default EditService;
