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
import {  adminMembershipAddonsUpdate } from '../../../helpers/backend/admin'
import GCheckbox from "../../../components/Layout/GCheckbox";
import { useTranslation } from "react-i18next";
import GButton from "../../../components/Layout/GButton";
import toast, { Toaster } from 'react-hot-toast';
import ImageModalView from "../../../components/ImageModalView/ImageModalView";


const EditAddOn = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch();
  console.log("1232145",props);
  const { editmembershipaddon } = props
 
  const [membershipInfo, setMembershipInfo] = useState(editmembershipaddon);
  useEffect(() => {
    // adminGetSalonProfileInfo().then(res => {
    //   setMembershipInfo(res.data)
    // });
  }, [])

  var initialFormState = {
    membershipaddonid: editmembershipaddon ? editmembershipaddon._id : '',
    planAddonName: editmembershipaddon ? editmembershipaddon.planAddonName : '',
    price: editmembershipaddon ? editmembershipaddon.price : 0,
    staffLimit: editmembershipaddon ? editmembershipaddon.staffLimit : 0, 
    // commisionPercent: editmembershipaddon ? editmembershipaddon.commisionPercent : 0,
     subDomain:editmembershipaddon? editmembershipaddon.subDomain:'' ,
    uniqueDomain: editmembershipaddon?  editmembershipaddon.uniqueDomain :'',
    discount: editmembershipaddon ? editmembershipaddon.discount : 0,
  }
  const [dataState, setDataState] = useState(initialFormState);
  const [errors, seterrors] = useState({});


  const handleFormSubmit = () => {
    try {
      const functioncall = adminMembershipAddonsUpdate(dataState)
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
      console.log("abc",event.target);
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


    return (
      <>
        <div className="box_s border_radius8">
          <div className="border-bottom card_thank d-flex justify-content-between align-items-center">
            <CardTitle className="text-dark text-uppercase lb mb-0" tag="h6">
              Edit Add-on plan
            </CardTitle>
  
            <UncontrolledDropdown className="noBgonDropDown">
              <DropdownToggle className="p-0">
                <span>{Svg.popupelips}</span>
              </DropdownToggle>
              <DropdownMenu className="radius4 shadow noBorder">
                <DropdownItem>
                  <ul className="noBg noUl mb0">
                    <li className="pt10 pb10">
                      <span>Delete</span>
                    </li>
                  </ul>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
                  type="number"
                  name="staffLimit"
                  placeholder="20"
                  onKeyPress={(event) => { if (!/^\d*[]?\d{0,1}$/.test(event.key)) { event.preventDefault(); } }}
                  value={dataState.staffLimit}
                  onChange={(e) => handleInputChange(e)}
                />
              </Col>
  
              <Col md={6}>
                <GIconInput
                  label="Price"
                  type="number"
                  name="price"
                  placeholder="99"
                  onKeyPress={(event) => { if (!/^\d*[]?\d{0,1}$/.test(event.key)) { event.preventDefault(); } }}
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
  

  export default EditAddOn;