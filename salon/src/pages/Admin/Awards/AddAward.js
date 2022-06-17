import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CardTitle, Col, Row } from "reactstrap";
import GButton from "../../../components/Layout/GButton";
import GImageCircleUpload from "../../../components/Layout/GImageCircleUpload/GImageCircleUpload";
import {API_URL2} from '../../../helpers/apiurls';
import { IMAGE_URL } from "../../../helpers/apiurls";
import axios from 'axios';
import Auth from "../../../helpers/Auth/Auth";
import toast, { Toaster } from 'react-hot-toast';
import ImageModalView from "../../../components/ImageModalView/ImageModalView";

const AddAward = (props) => {
  console.log("addaward",props);
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
 const [dataState, setDataState] = useState({name:'',image:''}); 

    const onChangeHandler = (e) => {
    console.log("namesaward",e.target.name);
      const { name, value } = e.target;
      setDataState({...dataState,[name]: value,});
               };

    
     const createawardImage = (val) => {
      console.log("namesaward",val);
                setDataState({
                  ...dataState,
                  image: val.file,
                });
              };          

  const handleFormSubmit = async (e) => {
 
        e.preventDefault()
         const iData = new FormData();
        iData.append("name", dataState.name);
        iData.append("image", dataState.image);
      
       var API_RRL = `${API_URL2}admin/createAward`;
    
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

 


  return (
    <>
      <div className="box_s border_radius8">
        <Toaster/>
        <div className="border-bottom card_thank">
          <CardTitle className="text-dark text-uppercase lb mb-0" tag="h6">
            {t("Addaward")}
          </CardTitle>
        </div>
        <div className="card_thank">
          <div className="text-center">
            <GImageCircleUpload
               name="image"
               getImage={createawardImage}
         
            />
          </div>
          <Row>
            <Col md={12}>
              <div>
                <label htmlFor="awardname">{t("Awardname")}</label>
                <input
                  type="text"
                  id="awardname"
                  className="form_custom"
                  name="name"
                  placeholder={t("Enterawardname")}
                  value={dataState.name}
                  onChange={onChangeHandler}
                />
              </div>
            </Col>
          </Row>
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
            <GButton onClick={(e)=>handleFormSubmit(e)}>{t("Save")}</GButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAward;
