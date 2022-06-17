import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Img from "../../assets/Img/Img";
import Svg from "../../assets/svg/Svg";

const FileUploadWithNameAndImage = ({
  id = "profileimage",
  setImageUrl = null,
  getImage = () => {},
  ...props
}) => {
  const [uploadedImg, setUploadedImg] = useState({file: null,url: null});

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  useEffect(() => {
    setUploadedImg({ file: null, url: setImageUrl,  });
  }, [setImageUrl]);

  const handleOnChange = (e) => {
       console.log("photo",e);
       console.log("photo",e.target.files[0]);
    if (e) {
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
    <div className="browse_box">
      <div className="mb10">
        <span className="fs13">{props.icontext}</span>
      </div>
      <label
        className="d-flex justify-content-between border-bottom align-items-center"
        htmlFor={id}
      >
        <input
          style={{ display: "none" }}
          type="file"
          id={id}
          accept="image/*"
          onChange={(e) => handleOnChange(e)}
        />

        <span
          style={{
            color: "#000",
            padding: "10px 0px",
            cursor: "pointer",
          }}
        >
          {t("Nofilechoosen")}
        </span>
        <span
          className="radius4"
          style={{
            color: "#000",
            padding: "10px 0px",
            cursor: "pointer",
          }}
        >
          <i className="mr10">{Svg.browseupload}</i>
          {uploadedImg === null ? "Upload" : "Browse"}
        </span>
      </label>
      <p className="mt-1 mb-0 fs13 text-end">{props.text}</p>

      {/* {uploadedImg ? ( */}
        <div className="image_h">
          {/* <img
            src={uploadedImg.url ? uploadedImg.url : ""}
            className="w-84 radius100"
            alt=""
          /> */}
  
          <img src={uploadedImg.url ? uploadedImg.url : Img.salon} alt="" srcset="" className="w-84 radius100"/>
        
          
        </div>
      {/* ) : (
        ""
      )} */}
    </div>
  );
};

export default FileUploadWithNameAndImage;
