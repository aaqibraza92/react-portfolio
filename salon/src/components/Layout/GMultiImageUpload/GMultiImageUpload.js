import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import AlertModal02 from "../../AlertModal02/AlertModal02";
import { useTranslation } from "react-i18next";
import "./GMultiImageUpload.css";
import { notify } from "react-notify-toast";
import { IMAGE_URL } from "../../../helpers/apiurls";
import { array } from "prop-types";
import Img from "../../../assets/Img/Img";

const GMultiImageUpload = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [uploadedFile, setUploadedFile] = useState([]);
  const [previewImage, setpreviewImage] = useState([]);

  console.log("props.data.image", props.data);

  useEffect(() => {
    let defaultImages = [];
    props.data &&
      props.data.forEach((el, ind) => {
        console.log("foreach", el);
        defaultImages.push({
          imgages: IMAGE_URL + el.image,
        });
      });
    setpreviewImage(defaultImages);
    // console.log("defaultImages",defaultImages);
  }, [props.data]);
  //setUploadedFile(props.data && props.data.image);
  const FileUpload = (e) => {
    let dataarray = uploadedFile;
    if (dataarray.length < 10) {
      // check file size
      if (e.target.files[0].size <= 2000000) {
        for (let i = 0; i < e.target.files.length; i++) {
          dataarray.push({
            bloburl: URL.createObjectURL(e.target.files[i]),
            file: e.target.files[i],
            id: i,
          });
          // console.log(i)
        }
        //console.log("aa: ",dataarray);
        let updatedarray = [];
        for (let u = 0; u < dataarray.length; u++) {
          dataarray[u].id = u;

          updatedarray.push(dataarray[u]);
        }
        setUploadedFile(updatedarray);
        props.getAllImages(updatedarray);
      } else if (
        e.target.files[0].type !== "image/jpeg" &&
        e.target.files[0].type !== "image/jpg" &&
        e.target.files[0].type !== "image/png"
      ) {
        let myColor = { background: "#ff385c", text: "#FFFFFF" };
        return notify.show(
          'Invalid image format, please select "*.jpeg, *.jpg, *.png" format.',
          "custom",
          5000,
          myColor
        );
      } else {
        let myColor = { background: "#ff385c", text: "#FFFFFF" };
        return notify.show(
          "Image size allowed upto 2000KB, Please select image under 2000KB",
          "custom",
          5000,
          myColor
        );
      }
    } else {
      let myColor = { background: "#ff385c", text: "#FFFFFF" };
      return notify.show(
        "Only 10 images are allowed.",
        "custom",
        5000,
        myColor
      );
    }

    //console.log("file: ",uploadedFile);
  };

  const deleteUploadedImg = (e) => {
    console.log("ind", e);
    let initData = [];
    initData = [...uploadedFile];
    initData.splice(e, 1);
    setUploadedFile(initData);
  };

  const deletePreviewImg = (e) => {
    //e is index
    let initData = [];
    initData = [...previewImage];
    initData.splice(e, 1);
    setpreviewImage(initData);
  };

  return (
    <>
      <style jsx="true">
        {`
          .images_container_upload {
            background-color: #fff1f4;
            padding: 8px;
            width: 388px;
            height: 215px;
            -webkit-border-radius: 7px;
            border-radius: 7px;
            background-repeat: no-repeat;
            background-size: 100%;
            .btn_delete_icon {
              display: block !important;
              width: 25px !important;
              height: 25px !important;
              border: none !important;
              background: var(--colorRed) !important;
              position: absolute !important;
              right: -10px !important;
              top: -10px !important;
            }
          }
        `}
      </style>
      <Container fluid className="pt-4">
        <Row className="align-items-center">
          <Col md={4}>
            {console.log("uploadedFile11", previewImage)}
            <div className="images_container_upload">
              <div className="innerBorder">
                {previewImage && previewImage.length <= 0 && uploadedFile.length <=0 && (
                  <div className="img_upload">
                    <img className="img-fluid" src={Img.upload_img} alt="" />
                  </div>
                )}

                <Row>
                  {previewImage &&
                    previewImage.map((el, index) => {
                      return (
                        <Col md={3} key={"aa" + index}>
                          <div className="d-flex justify-content-center align-items-center img_alignn position-relative">
                            <img
                              className="w-100 radius4 mb8"
                              id={index}
                              src={el.imgages}
                              alt=""
                            />
                            <button
                              className="btn_delete_icon btnBgBlack radius100"
                              onClick={(e) => deletePreviewImg(index)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 13.465 13.465"
                              >
                                <g
                                  id="Group_58294"
                                  data-name="Group 58294"
                                  transform="translate(0.707 0.707)"
                                >
                                  <line
                                    id="Line_248"
                                    data-name="Line 248"
                                    x2="12.051"
                                    y2="12.051"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-width="2"
                                  />
                                  <line
                                    id="Line_249"
                                    data-name="Line 249"
                                    x1="12.051"
                                    y2="12.051"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-width="2"
                                  />
                                </g>
                              </svg>
                            </button>
                          </div>
                        </Col>
                      );
                    })}
                </Row>

                <Row>
                  {uploadedFile &&
                    uploadedFile.map((obj, ind) => {
                      return (
                        <Col md={3} key={"aa" + ind}>
                          <div className="d-flex img_alignn position-relative">
                            <img
                              className="w-100 radius4 mb8"
                              id={ind}
                              src={obj.bloburl}
                              alt=""
                            />
                            <button
                              className="btn_delete_icon radius100"
                              onClick={(e) => deleteUploadedImg(ind)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 13.426 13.423"
                              >
                                <path
                                  id="Icon_ionic-ios-close"
                                  data-name="Icon ionic-ios-close"
                                  d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z"
                                  transform="translate(-11.285 -11.289)"
                                  fill="#fff"
                                />
                              </svg>
                            </button>
                          </div>
                        </Col>
                      );
                    })}
                </Row>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <h5 className="lm mb20">{t("UploadAllphoto")}</h5>

            <label htmlFor={props.id} className="cmnFileUpload radius">
              <span
                className=""
                style={{
                  background: "#FF385C",
                  color: "#fff",
                  padding: "8px 20px",
                  cursor: "pointer",
                  width: "100%",
                  display: "block",
                  borderRadius: "4px",
                }}
              >
                Upload Image
              </span>
              <input
                type="file"
                name={props.name}
                onChange={(e) => FileUpload(e)}
                className={`d-none ${props.className}`}
                id={props.id}
                accept="image/*"
              />
            </label>
            <p className="mt20">{t("Uploadsalonsubtext")}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GMultiImageUpload;
