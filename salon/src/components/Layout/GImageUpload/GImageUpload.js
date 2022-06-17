import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Img from "../../../assets/Img/Img";
import GImage from "../GImage/GImage";

const GImageUpload = ({
  id = "profileimage",
  setImageUrl = null,
  getImage = () => {},
}) => {
  const [uploadedImg, setUploadedImg] = useState({
    file: null,
    url: null,
  });

  useEffect(() => {
    setUploadedImg({
      file: null,
      url: setImageUrl,
    });
  }, [setImageUrl]);
  const handleOnChange = (e) => {
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
    <div>
      <div style={{ width: "80px", height: "80px", margin: "20px auto" }}>
        <img
          src={uploadedImg.url ? uploadedImg.url : Img.imageupload}
          className="img-fluid cover h-100 radius100"
          alt=""
        />
      </div>
      <label className="w-100 d-block" htmlFor={id}>
        <GImage src="" />
        
        <input
          style={{ display: "none" }}
          type="file"
          id={id}
          accept="image/*"
          onChange={(e) => handleOnChange(e)}
        />
        <span
          className=""
          style={{
            background: "#FF385C",
            color: "#fff",
            padding: "8px 20px",
            cursor: "pointer",
            width: "100%",
            display: "block",
            // borderRadius:"8px"
          }}
        >
          {uploadedImg === null
            ? "Change profile photo"
            : " Upload profile photo"}
        </span>
      </label>
    </div>
  );
};

export default GImageUpload;

