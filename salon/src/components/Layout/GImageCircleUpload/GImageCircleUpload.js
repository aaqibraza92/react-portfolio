import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { notify } from "react-notify-toast";
import Img from "../../../assets/Img/Img";
import { HOME_URL, IMAGE_URL } from "../../../helpers/apiurls";

const GImageCircleUpload = ({
  id = "profileimage",
  setImageUrl = null,
  getImage = () => {},
  ...rest
}) => {
  const [uploadedImg, setUploadedImg] = useState({
    file: null,
    url: null,
  });

  console.log("rest.previewImage", rest.previewImage);

  useEffect(() => {
    setUploadedImg({
      file: null,
      url: setImageUrl,
    });
  }, [setImageUrl]);

  const handleOnChange = (e) => {
    if (
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
    }

    if (e.target.files[0].size > 10485760) {
      let myColor = { background: "#ff385c", text: "#FFFFFF" };
      return notify.show(
        "Image size allowed upto 10mb, Please select image under 10mb",
        "custom",
        5000,
        myColor
      );
    }

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
    <>
      <div>
        <label className="d-block" htmlFor={id}>
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
              cursor: "pointer",
            }}
          >
            {uploadedImg === null ? (
              "Change profile photo"
            ) : (
              <img
                src={
                  uploadedImg.url
                    ? uploadedImg.url
                    : rest.previewImage !== ""
                    ? IMAGE_URL + rest.previewImage
                    : Img.imageupload
                }
                className="img-fluid radius100 object-fit"
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#ffeaec",
                  objectFit: "cover",
                }}
              />
            )}
          </span>
        </label>
      </div>
    </>
  );
};

export default GImageCircleUpload;
