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
import { adminPostMembership, adminUpdateMembership } from '../../../helpers/backend/admin'
import GCheckbox from "../../../components/Layout/GCheckbox";
import { useTranslation } from "react-i18next";
import GButton from "../../../components/Layout/GButton";
import toast, { Toaster } from 'react-hot-toast';
import ImageModalView from "../../../components/ImageModalView/ImageModalView";


const CreateMembership = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch();
  const { membership } = props
 
  const [membershipInfo, setMembershipInfo] = useState(membership);
  useEffect(() => {
    // adminGetSalonProfileInfo().then(res => {
    //   setMembershipInfo(res.data)
    // });
  }, [])
  var initialFormState = {
    membershipid: membershipInfo ? membershipInfo._id : '',
    planName: membershipInfo ? membershipInfo.planName : '',
    staffLimit: membershipInfo ? membershipInfo.staffLimit : 0,
    commisionPercent: membershipInfo ? membershipInfo.commisionPercent : 0,
    planType: membershipInfo ? membershipInfo.planType : 'Both',
    monthlyPrice: membershipInfo ? membershipInfo.monthlyPrice : 0,
    yearlyPrice: membershipInfo ? membershipInfo.yearlyPrice : 0,
    bookingWidget: membershipInfo ? membershipInfo.bookingWidget : false,
    subDomain: membershipInfo ? membershipInfo.subDomain : true,
    uniqueDomain: membershipInfo ? membershipInfo.uniqueDomain : true,
    discount: membershipInfo ? membershipInfo.discount : 0,
  }
  const [dataState, setDataState] = useState(initialFormState);
  const [errors, seterrors] = useState({});


  const handleFormSubmit = () => {
    try {
      const functioncall = (!dataState.membershipid) ? adminPostMembership(dataState) : adminUpdateMembership(dataState)
      // adminPostMembership(dataState).then((resp) => {
        functioncall.then((resp) => {
        if (resp.status === 200) {
         let myColor = { background: "#4bb543", text: "#FFFFFF" };
     return notify.show(resp.message, "custom", 5000, myColor);
  
          props.toggle(false)
          setDataState(initialFormState)
          setTimeout(() => {
            ImageModalView.hide()
            props.closeForm()
           
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
  return (
    <>
      <div className="box_s border_radius8">
        <div className="border-bottom card_thank">
          <CardTitle className="text-dark text-uppercase lb mb-0" tag="h6">
            {t("Membershipplan")}
          </CardTitle>
  
        </div>
        <Form autoComplete="off" 
                  >
        <div className="card_thank">

          <Row>
            <Col md={12}>
              <GIconInput
                label="Membership plan Name"
                type="text"
                name="planName"
                placeholder="Enter plan name"
                value={dataState.planName}
                onChange={(e) => handleInputChange(e)}
              />
            </Col>

            <Col md={6}>
              <GIconInput
                label="Staff Limit"
                type="text"
                name="staffLimit"
                placeholder="Enter staff limit"
                value={dataState.staffLimit}
                iconRight={Svg.arrow}
                onChange={(e) => handleInputChange(e)}
              />
            </Col>

            <Col md={6}>
              <GIconInput
                label="Commision (%)"
                type="number"
                name="commisionPercent"
                value={dataState.commisionPercent}
                placeholder="Enter Commision Percent"
                onChange={(e) => handleInputChange(e)}
              />
            </Col>
            <Col md={12} className="d-flex mb15">
              <div className="mr15">
                <GCheckbox
                  name="planType"
                  id="Monthly"
                  checked={dataState.planType === "Monthly" ? true : false}
                  onChange={(e) => handleInputChange(e)}
                  label="Monthly"
                  value="Monthly"
                />
              </div>
              <div className="">
                <GCheckbox name="planType" id="Yearly" label="Yearly" value={"Yearly"} onChange={(e) => handleInputChange(e)} checked={dataState.planType === "Yearly" ? true : false} />
              </div>
            </Col>
            <Col md={12}>
              <GIconInput
                type="number"
                name="monthlyPrice"
                value={dataState.monthlyPrice}
                placeholder="Enter amount"
                onChange={(e) => handleInputChange(e)}
              />
              <GIconInput
                type="text"
                name="yearlyPrice"
                value={dataState.yearlyPrice}
                placeholder="Enter amount"
                onChange={(e) => handleInputChange(e)}
              />
            </Col>
            <Col md={12} className="d-flex mb15">
              <div className="mr15">
                <GCheckbox
                  name="bookingWidget"
                  id="bookingWidget"
                  value={dataState.bookingWidget}
                  checked={dataState.bookingWidget ? true : false}
                  onChange={(e) => handleInputChange(e)}
                  label="Booking Widget"
                />
              </div>
              <div className="mr15">
                <GCheckbox name="subDomain" id="remember4" label="Subdomain" value={dataState.subDomain} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="mr15">
                <GCheckbox
                  name="uniqueDomain"
                  id="uniqueDomain"
                  label="Unique domain"
                  checked={dataState.uniqueDomain ? true : false}
                  value={dataState.uniqueDomain}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              {/* <div className="mr15">
                <GCheckbox
                  name="remember1"
                  id="remember6"
                  label="Auto Renewal"
                  onChange={(e) => handleInputChange(e) }
                />
              </div> */}
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
            <GButton onClick={event => {
                    event.preventDefault()
                    handleFormSubmit()
                  }}>{t("Save")}</GButton>
          </div>
        </div>
        </Form>
      </div>
    </>

  )
}

export default CreateMembership