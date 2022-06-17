import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import GImage from "../GImage/GImage";
import Img from "../../../assets/Img/Img";
import { useTranslation } from "react-i18next";
import { notify } from "react-notify-toast";

const GImageUploadSalon = ({
  id = "profileimage",
  setImageUrl = null,
  getImage = () => {},
}) => {
  const [uploadedImg, setUploadedImg] = useState({
    file: null,
    url: null,
  });
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  console.log("setImageUrl",setImageUrl);

  // useEffect(() => {
  //   setUploadedImg({
  //     file: null,
  //     url: setImageUrl,
  //   });
  // }, [setImageUrl]);
  const handleOnChange = (e) => {
    if (e.target.files[0].type !== "image/jpeg" && e.target.files[0].type !== "image/jpg" && e.target.files[0].type !== "image/png") {
      let myColor = { background: "#ff385c", text: "#FFFFFF" };
      return notify.show('Invalid image format, please select "*.jpeg, *.jpg, *.png" format.', "custom", 5000, myColor);
    }

    if(e.target.files[0].size > 1000000){
      let myColor = { background: "#ff385c", text: "#FFFFFF" };
      return notify.show("Image size allowed upto 1000KB, Please select image under 1000KB", "custom", 5000, myColor);
    }

    if (e) {
      console.log("here",URL.createObjectURL(e.target.files[0]));
      setUploadedImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
      getImage({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  return (
    <>
      <Container fluid>
        {
          console.log("sUploaded",uploadedImg)
        }
        <Row className="align-items-center border-bottom pt30 pb30">
          <Col md={4}>
            <div
              style={{ width: "388px", height: "213px", marginRight: "15px" }}
            >
              <img
                src={uploadedImg.url ? uploadedImg.url : setImageUrl!==null ? setImageUrl : Img.dummyimage}
                className="img-fluid h-100"
                alt=""
              />
            </div>
          </Col>
          <Col md={8}>
            <div className="d-flex align-items-center">
              <div>
                <h5 className="lm mb20">{t("UploadsalonprofileImage")}</h5>
                <label htmlFor={id}>
                  <GImage src="" />
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id={id}
                    accept="image/*"
                    onChange={(e) => handleOnChange(e)}
                  />
                  <span
                    className="radius4"
                    style={{
                      background: "#ff385c",
                      color: "#fff",
                      padding: "10px 30px",
                      cursor: "pointer",
                    }}
                  >
                    {uploadedImg === null ? "Upload" : "Upload Image"}
                  </span>
                </label>
                <p className="mt20">{t("Uploadsalonsubtext")}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GImageUploadSalon;
