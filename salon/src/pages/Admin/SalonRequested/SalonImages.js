import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import GSpacing from "../../../components/Layout/GSpacing";
import BreadCrum from "../BreadCrum/BreadCrum";
import GMultiImageUpload from "../../../components/Layout/GMultiImageUpload/GMultiImageUpload";
import GImageUploadSalon from "../../../components/Layout/GImageUploadSalon/GImageUploadSalon";
import { adminGetSalonProfileInfo,adminGetSalonUserInfo } from "../../../helpers/backend/admin";
import SalonRequestTab from "./SalonRequestTab";
import axios from "axios";
import { notify } from "react-notify-toast";
import { HOME_URL } from "../../../helpers/apiurls";
import { IMAGE_URL } from "../../../helpers/apiurls";
import Auth from "../../../helpers/Auth/Auth";
import { useLocation } from "react-router-dom";
import CreateSalonRequest from "./CreateSalonRequest";
import UpdateSalonRequestTab from "./UpdateSalonRequestTab";

const SalonImages = (props) => {
  const loc= useLocation();
  const saloniD = loc.hash.replace("#", '');
  const [salonData, setsalonData] = useState({ photos: [],profile: null, salonid: saloniD });

  console.log("salon123",saloniD);

  useEffect(() => {
    getsalonRequestedLists(saloniD)
  
  }, []);

  const callbackSingleImage = (val) => {
    console.log("aww",val);
    setsalonData({
      ...salonData,
      profile: val.file,
    });
  };

  const callbackMultiImage = (val) => {
    var multiImages = [];
    val.forEach((element, idnex) => {
     multiImages.push(element.file);
    });
    setsalonData({ ...salonData,photos: val, });
  };


  
  const getsalonRequestedLists = async (salonid) => {
      
    adminGetSalonUserInfo({salonid : salonid}).then(result => {
  
     if (result.status === 200) {
       //console.log("11111",result.data);
      setsalonData(result.data)
      setsalonData({
        ...salonData,
        profile: result.data.profileImage,
        photos: result.data.verifiedShopImages
      })
    }
 }).catch(err => {

 });
}



  const onSubmitHandler = (e) => {

    if(salonData.profile===null){
      let myColor = { background: "#FF385C", text: "#FFFFFF" };
     return  notify.show("Please upload profile ", "custom", 5000, myColor);
    }
    if(salonData.photos===null){
      let myColor = { background: "#FF385C", text: "#FFFFFF" };
     return  notify.show("Please upload profile ", "custom", 5000, myColor);
    }
    const iData = new FormData();
       
    if (salonData.photos.length > 0) {
      salonData.photos.forEach((f, i) => {
        iData.append("photos", f.file);
      });
    } else {
      iData.append("photos", []);
    }
    iData.append("profile", salonData.profile);
    iData.append("salonid", saloniD);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        //Accept: "application/json",
        Authorization: "Bearer " + Auth.getToken(), //for token
      },
    };
   axios
      .post(HOME_URL + "admin/salonPhotoUpload", iData, options)
      .then((res) => {
        console.log("on upload",res.data.message);
        if (res && res.data.status && res.data.status === 200) {
          let myColor = { background: "#4bb543", text: "#FFFFFF" };
          notify.show(res.data.message, "custom", 5000, myColor);
        }
      });
  }




  return (
    <div className="p_30 mb30">
      {
        console.log("multi for",salonData.photos)
      }
      {
        console.log("single for",salonData.profile)
      }
      <GSpacing>
        <BreadCrum />
      </GSpacing>

   

      <section className="bgWhite radius box_shabow">
      

        <Container fluid>
          <div>
            <Row className=" mb30 align-items-center card-body-box">
              <Col md={12}>
                <div className="card-body1">
                  <div className="">
                    <GImageUploadSalon 
                    setImageUrl={IMAGE_URL + salonData.profile } 
                    getImage={callbackSingleImage} />
                  </div>

                  <div>
               
                    <GMultiImageUpload data={salonData.photos}
                     getAllImages={callbackMultiImage} />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        <Container fluid className="pt15 pt15">
          <Row>
            <Col>
              <div className="bTop card-body-box pt15 pb15">
                <GAlign align="right">
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
                  <GButton onClick={onSubmitHandler}>Save</GButton>
                </GAlign>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SalonImages;
