import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import axios from 'axios';
import Svg from "../../../assets/svg/Svg";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import { IMAGE_URL } from "../../../helpers/apiurls";
import {API_URL2} from '../../../helpers/apiurls';
import Auth from "../../../helpers/Auth/Auth";
import toast, { Toaster } from 'react-hot-toast';
import FileUploadWithNameAndImage from "../../../components/FileUploadWithNameAndImage/FileUploadWithNameAndImage";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";

const EditCategories = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  console.log("12321",props);
  const { category } = props

var initialFormState = {
  categoryid: category ? category._id : '',
  name: category ? category.name : '',
  image: category ? category.image : '',
  thumbnail: category ? category.thumbnail : '',
}
const [dataState, setDataState] = useState(initialFormState);

  // For error msg
  const [categoryerr, setcategoryerr] = useState("");

 const onChangeHandler = (e) => {
 
    const { name, value } = e.target;
    setDataState({
      ...dataState,
      [name]: value,
    });
  };

  const CategoryImageadd = (e) => {
    let image_as_files = e.target.files[0];
    setDataState((old) => {
      return { ...old, ['image']: image_as_files }
    })
  }

  const CategoryThumbnailImageadd = (e) => {
    let image_as_files = e.target.files[0];
    setDataState((old) => {
      return { ...old, ['thumbnail']: image_as_files }
    })
  }
  // const CategoryImageadd = (val) => {
  //   setDataState({
  //     ...dataState,
  //     image: val.file,
  //   });
  // };

  // const CategoryThumbnailImageadd = (val) => {
  //   console.log("ee",val);
  //   setDataState({
  //     ...dataState,
  //     thumbnail: val.file,
  //   });
  // };

  const handleFormSubmit = async (e) => {

    e.preventDefault()
  
    const iData = new FormData();
    iData.append("categoryid",props.category._id)
    iData.append("name", dataState.name);
    iData.append("image", dataState.image);
    iData.append("thumbnail", dataState.thumbnail);
    // iData.append("servicecount", dataState.servicecount);

    var API_RRL =  `${API_URL2}admin/categoryUpdate`;
   
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
        <GAlign
          align="between"
          alignV="center"
          className="pt15 pb15 pl15 pr15 mb20 bBottom"
        >
          <h3 className="fs14 lb mb0 text-uppercase">{t("Editcategory")}</h3>
          {/* <UncontrolledDropdown className="noBgonDropDown">
            <DropdownToggle>
              <span className="fm12 colorBlack">{Svg.ellipsiswhitebg}</span>
            </DropdownToggle>
            <DropdownMenu className="radius4 shadow noBorder">
              <DropdownItem>
                <ul className="noBg noUl mb0 pt10 pb10">
                  <li className="fs14"> {t("Delete")}</li>
                </ul>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </GAlign>
      </section>
      <form onSubmit={handleFormSubmit} >
        <div className="pl20 pr20">
          <label htmlFor="name">{t("Categoryname")}</label>
          <input
            id="name"
            type="text"
            className="form_custom"
            placeholder={t("Entercategoryname")}
            name="name"
            value={dataState.name}
            onChange={(e) => {onChangeHandler(e)}}
          />
      
          <div className="mb20">
         
           { props.category.image  ?  <img src={IMAGE_URL + props.category.image}/>  : dataState.image}
           <br/>
           <input type="file" className="form-control" name="image" onChange={e => CategoryImageadd(e)} text={t("Iconsize")}  />
            {/* <FileUploadWithNameAndImage
              name="image"
              value={dataState.image}
              text={t("Iconsize")}
              icontext={t("Uploadiconimage")}
              onChange={(e) => {CategoryImageadd(e)}}
              type="file"
            /> */}
          </div>
          <div className="mb20">
         { props.category.thumbnail  ?  <img src={IMAGE_URL + props.category.thumbnail}/>  : dataState.thumbnail}
         <br/>
          <input type="file" className="form-control d-flex justify-content-between border-bottom align-items-center" name="thumbnail" onChange={e => CategoryThumbnailImageadd(e)} text={t("Iconsize")}  />
          
            {/* <FileUploadWithNameAndImage
            type="file"
              name="thumbnail"
               onChange={CategoryThumbnailImageadd}
              text={t("Bannersize")}
              icontext={t("Uploadiconimage")}
                         /> */}

          </div>

          {/* <input
            id="name"
            type="text"
            className="form_custom"
            placeholder={t("Entercategoryname")}
            name="category"
            value={dataState.servicecount}
            onChange={onChangeHandler}
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
            <GButton transform="capitalize">{t("Save")}</GButton>
          </GAlign>
        </div>
      </form>
    </>
  );
};

export default EditCategories;
