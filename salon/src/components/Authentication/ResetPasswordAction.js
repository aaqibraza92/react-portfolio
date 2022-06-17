import React, { useEffect, useState } from "react";
import {
    CardTitle,
    Col,
    Container,
    Row,
  } from "reactstrap";
import GButton from "../Layout/GButton";
import GImage from "../Layout/GImage/GImage";
import Img from "../../assets/Img/Img";
import GPasswordInput from "../Layout/GPasswordInput";
import Auth from '../../helpers/Auth/Auth';
import { Route, useParams } from "react-router-dom";
import { postResetPassword } from '../../helpers/backend/index'
import { notify } from "react-notify-toast";
import {useNavigate, Navigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { authUserProfile } from "../../store/auth/profile/actions";
const ResetPasswordAction = (props) =>  {
  const dispatch = useDispatch();
    let { id } = useParams(); 
    Auth.setToken(id);
    useEffect(()=>{
      dispatch(authUserProfile());
    },[])

    let userInfo = useSelector(
      (state) => state.authInfo && state.authInfo.authInfo.email
    );


    const [inputField , setInputField] = useState({ password: '', confirmPassword: ''})
    const navigate = useNavigate();
    const inputsHandler = (e) =>{
        setInputField({...inputField , [e.target.name]: e.target.value} )
    }
    const handleValidSubmit = () => {
        let myColor = { background: "red", text: "#FFFFFF" };
        if(inputField.password !== inputField.confirmPassword)
        {
            notify.show("Oops! Password and confirePassword not Match", "custom", 4000, myColor);
        }
        else if(inputField.password === ''){
            notify.show("Oops! Password Required", "custom", 4000, myColor);
        }
        else
        {
            postResetPassword(inputField).then((res) => {
                if (res && res.status && res.status===200) {
                  let myColor = { background: "#4bb543", text: "#FFFFFF" };
                  notify.show(res.message, "custom", 4000, myColor);
                  setInputField({ password: ''})
                  setTimeout(() => {
                    navigate('/thankyou')
                  }, 1000);
                }
                if (res && res.status && res.status===202) {
                    let myColor = { background: "red", text: "#FFFFFF" };
                    notify.show("Oops! This account already in use, Please check email or mobile fields", "custom", 4000, myColor);
                }
                else
                {
                  notify.show("Oops! "+res.message, "custom", 4000, myColor);
                }
              });
        }
    }
  return (
    <><Container className="pt_45 pb_45">
    <Row>
      <Col className="m-auto" md="4">
        <div className="card_thank box_s border_radius8">
          <div className=" text-center">
            <GImage src={Img.lock} />
          </div>
          <CardTitle tag="h3" className="pt25 pb15 text-center">
            Set new password
          </CardTitle>
          <div className=" text-center">
            <span> Change password for </span>
          </div>

          <p className="lm text-center"> {userInfo}</p>

          <GPasswordInput
            label="New password"
            name="password"
            placeholder="Enter Password"
            required="true"
            onChange={inputsHandler} 
          />
          <GPasswordInput
            label="Re-Enter new password"
            name="confirmPassword"
            placeholder="Enter Confirm Password"
            required="true"
            onChange={inputsHandler} 
          />
          <GButton className="w-100 text-center mt-2" onClick={handleValidSubmit}>
            Change Password
          </GButton>
        </div>
      </Col>
    </Row>
  </Container>
    </>
  )
}

export default ResetPasswordAction