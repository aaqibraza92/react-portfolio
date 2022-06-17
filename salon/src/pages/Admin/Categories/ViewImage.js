
import React, { useState } from "react";
import FileUploadWithNameAndImage from "../../../components/FileUploadWithNameAndImage/FileUploadWithNameAndImage";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import { useTranslation } from "react-i18next";
import { adminCreateCategory } from "../../../helpers/backend/admin";
import {API_URL2} from '../../../helpers/apiurls';
import { IMAGE_URL } from "../../../helpers/apiurls";
import Svg from "../../../assets/svg/Svg";


const AddNewCategories = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const { category } = props

  return (
    <>
      <section>
       
        <h3 className="fs14 lb pl20 pt20 pb20 mb20 bBottom text-uppercase">
          {t("Banner Image")}
        </h3>
        <form   >
          <div className="pl20 pr20">
         

            <div className="mb20">
            {props.category.thumbnail === ""  ?  Svg.greynails :<img src={IMAGE_URL + props.category.thumbnail} />}
            {/* <img src={IMAGE_URL +props.category.image}
              /> */}
           
            </div>
          
            
     
          </div>
     

         
        </form>
      </section>
    </>
  );
};

export default AddNewCategories;
