import React, { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CardTitle, Col, Row } from "reactstrap";
import GButton from "../../../components/Layout/GButton";
import GImageCircleUpload from "../../../components/Layout/GImageCircleUpload/GImageCircleUpload";
import {API_URL2} from '../../../helpers/apiurls';
import { IMAGE_URL } from "../../../helpers/apiurls";
import axios from 'axios';
import Auth from "../../../helpers/Auth/Auth";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, Navigate} from "react-router-dom";
import ImageModalView from "../../../components/ImageModalView/ImageModalView";

const EditAward = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const navigate = useNavigate();
  const [awardname, setawardname] = useState("");
    console.log("editawards",props);
  const { editawards } = props
  const [editcustomerInfo, setMembershipInfo] = useState(editawards);
  
 
  useEffect(() => {
    
  }, [])

    var initialFormState = {
      awardid: editawards ? editawards._id : '',
      name: editawards ? editawards.name : "",
      image: editawards ? editawards.image : "",
     

      };
    
        const [dataState, setDataState] = useState(initialFormState);
        const [validations, setValidations] = React.useState({})

       
          const handleFormSubmit = async (e) => {
 
            e.preventDefault()
   
            const iData = new FormData();
            iData.append("awardid", props.editawards._id);
            iData.append("name", dataState.name);
            iData.append("image", dataState.image);
            console.log("123",iData);
            var API_RRL = `${API_URL2}admin/updateAward`;
        
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

          const handleInputChange = event => {
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

          const createawardImage = (val) => {
            console.log("namesaward",val);
                      setDataState({
                        ...dataState,
                        image: val.file,
                      });
                    };     

          const textExpression = (evt) => {
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode != 46 && charCode > 31
                && (charCode < 48 || charCode > 57)) {
                evt.preventDefault();
            }
           if (evt.target.value.indexOf('.') > -1 && evt.which == 46) {
                evt.preventDefault();
                               }
                                }

  return (
    <>
      <div className="box_s border_radius8">
        <Toaster/>
        <div className="border-bottom card_thank">
          <CardTitle className="text-dark text-uppercase lb mb-0" tag="h6">
            {t("Editaward")}
          </CardTitle>
        </div>
        <div className="card_thank">
          <div className="text-center">
            <GImageCircleUpload
             setImageUrl ={IMAGE_URL + dataState.image}
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
                  onChange={(e) => handleInputChange(e)}
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
            <GButton  onClick={handleFormSubmit}>{t("Save")}</GButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAward;
