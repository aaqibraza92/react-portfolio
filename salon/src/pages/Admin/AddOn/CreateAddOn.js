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
import { adminMembershipAddonsCreate, adminUpdateMembership } from '../../../helpers/backend/admin'
import GCheckbox from "../../../components/Layout/GCheckbox";
import { useTranslation } from "react-i18next";
import GButton from "../../../components/Layout/GButton";
import toast, { Toaster } from 'react-hot-toast';
import ImageModalView from "../../../components/ImageModalView/ImageModalView";






const AddonPlan = (props) => {

    const { t, i18n } = useTranslation();
    document.body.dir = i18n.dir();
    const dispatch = useDispatch();
    const { membershipaddon } = props
   
    const [membershipaddonInfo, setMembershipInfo] = useState(membershipaddon);
    useEffect(() => {
      // adminGetSalonProfileInfo().then(res => {
      //   setMembershipInfo(res.data)
      // });
    }, [])
    var initialFormState = {
    //   membershipid: membershipaddonInfo ? membershipaddonInfo._id : '',
      planAddonName: membershipaddonInfo ? membershipaddonInfo.planAddonName : '',
      staffLimit: membershipaddonInfo ? membershipaddonInfo.staffLimit : 0,
      price: membershipaddonInfo ? membershipaddonInfo.price : 0,
      subDomain: membershipaddonInfo ? membershipaddonInfo.subDomain : false,
      uniqueDomain: membershipaddonInfo ? membershipaddonInfo.uniqueDomain : false  ,
      discount: membershipaddonInfo ? membershipaddonInfo.discount : 0,
    }
    const [dataState, setDataState] = useState(initialFormState);
    const [errors, seterrors] = useState({});
  
  
    const handleFormSubmit = () => {
      try {
        const functioncall = adminMembershipAddonsCreate(dataState)
        // adminPostMembership(dataState).then((resp) => {
          functioncall.then((resp) => {
          if (resp.status === 200) {
            ImageModalView.hide()
            props.closeForm()
            setTimeout(() => {
           let myColor = { background: "#4bb543", text: "#FFFFFF" };
          return notify.show(resp.message, "custom", 5000, myColor);
        }, 1000); 
                    }
           else {
            if (resp.status === 202) {
              let myColor = { background: "#FF385C", text: "#FFFFFF" };
              return notify.show(resp.message[0].param + ' ' + resp.message[0].msg, "custom", 5000, myColor);
            
            }
          }
     
        }).catch(err => {
        
        })
      } catch (e) {
  
      }
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
    const closeDisplayForm = () => {
      props.toggle()
      setDataState(initialFormState)
    }


    // adminMembershipAddonsCreate
  
    return (
      <>
        <div className="box_s border_radius8">
          <div className="border-bottom card_thank ">
            <CardTitle className="text-dark text-uppercase lb mb-0" tag="h6">
              Create Add-on plan
            </CardTitle>
          </div>
          <div className="card_thank">
            <Row>
              <Col md={12}>
                <GIconInput
                  label="Plan name"
                  type="text"
                  name="planAddonName"
                  placeholder="Enter plan name"
                  value={dataState.planAddonName}
                  onChange={(e) => handleInputChange(e)}
                />
              </Col>
  
              <Col md={6}>
                <GIconInput
                  label="Additional Staff count"
                  type="text"
                  name="staffLimit"
                  placeholder="20"
                  value={dataState.staffLimit}
                  onChange={(e) => handleInputChange(e)}
                />
              </Col>
  
              <Col md={6}>
                <GIconInput
                  label="Price"
                  type="text"
                  name="price"
                  placeholder="99"
                  value={dataState.price}
                  onChange={(e) => handleInputChange(e)}
                />
              </Col>
              <Col md={12} className="d-flex mb15">
                <div className="mr15">
                  <GCheckbox 
                  name="subDomain"
                   id="remember1"
                    label="Subdomain"
                    checked={dataState.subDomain}
                    onChange={(e) =>
                        setDataState({
                          ...dataState,subDomain: !dataState.subDomain,
                        })
                      } />
                </div>
                <div className="">
                  <GCheckbox
                    name="uniqueDomain"
                    id="remember2"
                    label="Unique domain"
                    checked={dataState.uniqueDomain}
                    onChange={(e) =>
                        setDataState({
                          ...dataState,uniqueDomain: !dataState.uniqueDomain,
                        })
                      }
              
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
                Close
              </GButton>
              <GButton onClick={event => {
                    event.preventDefault()
                    handleFormSubmit()
                  }}>Save</GButton>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default AddonPlan