import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import GImage from "../GImage/GImage";

const GNameFileUpload = ({
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
    <div className="d-flex align-items-center">
      <div style={{ width: "80px", height: "80px", marginRight: "15px" }}>
        <img
          src={
            uploadedImg.url
              ? uploadedImg.url
              : "https://via.placeholder.com/150"
          }
          className="img-fluid cover h-100 radius100"
          alt=""
        />
      </div>
      <label htmlFor={id}>
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
            background: "rgb(77 187 208)",
            color: "#fff",
            padding: "10px 30px",
            cursor: "pointer",
          }}
        >
          {uploadedImg === null ? "Upload" : "Change"}
        </span>
      </label>
    </div>
  );
};

export default GNameFileUpload;
