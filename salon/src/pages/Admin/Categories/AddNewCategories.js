import React, { useState } from "react";
import FileUploadWithNameAndImage from "../../../components/FileUploadWithNameAndImage/FileUploadWithNameAndImage";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import { useTranslation } from "react-i18next";
import { adminCreateCategory } from "../../../helpers/backend/admin";
import {API_URL2} from '../../../helpers/apiurls';
import { IMAGE_URL } from "../../../helpers/apiurls";
import axios from 'axios';
import Auth from "../../../helpers/Auth/Auth";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, Navigate} from "react-router-dom";
import ImageModalView from "../../../components/ImageModalView/ImageModalView";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import { notify } from "react-notify-toast";

const AddNewCategories = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();


 const navigate = useNavigate();
  const [dataState, setDataState] = useState({ name: "", servicecount:"",image:"" });
  const [categoryimg, setcategoryimg] = useState(null);
  // For error msg
  const [validations, setValidations] = React.useState({})

    
    const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setDataState({
        ...dataState,
        [name]: value,
      });
    };

    
  const CategoryImageadd = (val) => {
    
    setDataState({
      ...dataState,
      image: val.file,
    });
  };

  // const CategoryImageadd = (e) => {
  //   let image_as_base64 = URL.createObjectURL(e.target.files[0])
  //   let image_as_files = e.target.files[0];

  //   setDataState({
  //     ...dataState,
  //     image: image_as_base64,
  //     image: image_as_files,
  //   })
  // }
  
  const CategoryThumbnailImageadd = (val) => {
    setDataState({
      ...dataState,
      thumbnail: val.file,
    });
  };

  const validateAll = () => {
    const { name, image ,thumbnail} = dataState
   
      const validations =  {name: '', image: '',thumbnail:''}  

   let isValid = true
    
    if (!name) {
      validations.name = 'Category Name is required'
      isValid = false
    }
     
    if (!image) {
      validations.image = 'Icon Image is required'
      isValid = false
    }

    if (!thumbnail) {
      validations.thumbnail = 'Banner Image is required'
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
    setValidations({...validations, [name]: message })
  }

  const { name: nameVal,image: imageVal,thumbnail:thumbnailVal} = validations

  const handleFormSubmit = async (e) => {

    e.preventDefault()
   const isValid = validateAll()
    console.log("is",validations);
    if (!isValid) {
    return false
  }

    const iData = new FormData();
    iData.append("name", dataState.name);
    iData.append("image", dataState.image);
    iData.append("thumbnail", dataState.thumbnail);
    // iData.append("servicecount", dataState.servicecount);

    var API_RRL =  `${API_URL2}admin/categorycreate`;
   
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
        toast.success('Category Change Successfully.', {
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
      <section>
        <Toaster/>
        <h3 className="fs14 lb pl20 pt20 pb20 mb20 bBottom text-uppercase">
          {t("Addnewcatagory")}
        </h3>
        <form   >
          <div className="pl20 pr20">
            <label htmlFor="name">{t("Categoryname")}</label>
            <input
              id="name"
              type="text"
              className="form_custom"
              placeholder={t("Entercategoryname")}
              name="name"
              value={dataState.name}
              onChange={onChangeHandler}
              onBlur={validateOne}
            />
          <div style={{color:'red'}}> {nameVal}</div>     

            <div className="mb20">
              <FileUploadWithNameAndImage
                      label={t("Profilephoto")}
                      // value={dataState.image}
                      msgtopRight="Can upload a photo upto 5MB"
                      id="profilephoto"
                      name="profilephoto"
                      getImage={CategoryImageadd}
                      onBlur={validateOne}
                text={t("Iconsize")}
                // icontext={t("Uploadiconimage")}
              />
                {/* <div style={{color:'red'}}> {imageVal}</div>   */}
            </div>
            <div className="mb20">
              <FileUploadWithNameAndImage
                text={t("Bannersize")}
                getImage={CategoryThumbnailImageadd}
                icontext={t("Uploadiconimage")}
                onBlur={validateOne}
              />
                 {/* <div style={{color:'red'}}> {thumbnailVal}</div>   */}
            </div>
            
          {/* <label htmlFor="name">{t("servicecount")}</label>
            <input
              id="servicecount"
              type="text"
              className="form_custom"
              placeholder={t("Entercategoryname")}
              onKeyPress={(event) => { if (!/^\d*[]?\d{0,1}$/.test(event.key)) { event.preventDefault(); } }}
              name="servicecount"
              value={dataState.servicecount}
              onChange={onChangeHandler}
              onBlur={validateOne}
            /> */}
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
              <GButton onClick={handleFormSubmit}  >Save</GButton>
            </GAlign>
          </div>

         
        </form>
      </section>
    </>
  );
};

export default AddNewCategories;
