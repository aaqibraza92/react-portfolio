import React, { useState } from "react";
import { notify } from "react-notify-toast";
import styled from "styled-components";
import GPosition from "../Layout/GPosition";
import GSpacing from "../Layout/GSpacing";

const FileWrapper = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#FFF"};
  width: auto;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  margin: ${(props) => (props.margin ? props.margin : "0rem")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "3px"};
  display: block;
  border: 1px solid #e8e9e9;
  outline: none;
  color: ${(props) => (props.color ? props.color : "#000")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  font-size: 11pt;
  min-width: 100px;
  max-height: 45px;

  .file_input {
    width: 11px;
    padding: 7px;
    opacity: 0;
  }

  .fileuploadwithname_absolute {
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    top: 0px;
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
  }
  .fileuploadwithname_absolute svg {
    width: 18px;
  }
  .fileuploadwithname_absolute:hover {
    opacity: 0.8;
  }
  .fileuploadwithname_iconRight {
    right: 15px;
    cursor: pointer;
    top: -25px;
  }
  .fileuploadwithname_msgtopRight {
    position: absolute;
    top: -26px;
    right: 0;
    font-size: 14px;
    color: #5b5d6b;
  }
`;

const FileUploadWithName = (props) => {
  const [imagename, setimagename] = useState(null);

  const iconClick = (e) => {};

  const onChangeHandler = (e) => {
    setimagename(e.target.files[0].name);
    if (e.target.files[0].type !== "image/jpeg" && e.target.files[0].type !== "image/jpg" && e.target.files[0].type !== "image/png") {
      let myColor = { background: "#ff385c", text: "#FFFFFF" };
      return notify.show('Invalid image format, please select "*.jpeg, *.jpg, *.png" format.', "custom", 5000, myColor);
    }

    if(e.target.files[0].size > 460800){
      let myColor = { background: "#ff385c", text: "#FFFFFF" };
      return notify.show("Image size allowed upto 500KB, Please select image under 500KB", "custom", 5000, myColor);
    }
   
    props.callback(e.target.files);
  };

  return (
    <>
      <style jsx="true">{`
        .file_label {
          display: block;
          //   padding: 20px 0;
        }
      `}</style>
      <GSpacing>
        <label htmlFor={props.id} className="file_label">
          {props.label}
          <FileWrapper className="test">
            {props.msgtopRight && (
              <GPosition>
                <span className="fileuploadwithname_msgtopRight">
                  {props.msgtopRight}
                </span>
              </GPosition>
            )}
            <input
              type="file"
              name={props.name}
              id={props.id}
              onChange={onChangeHandler}
              iconright={props.iconright}
              className="file_input"
            />

            {imagename && imagename}
            {props.iconright && (
              <GPosition>
                <span
                  className="fileuploadwithname_iconRight fileuploadwithname_absolute"
                  onClick={props.iconClick || iconClick}
                >
                  {props.iconright}
                </span>
              </GPosition>
            )}
          </FileWrapper>
        </label>
      </GSpacing>
    </>
  );
};

export default FileUploadWithName;

// import { useState } from 'react';
// import axios from "axios";

// const Carrier_UseForm = validate =>{

// // const history = useHistory();
// const [selectedFile, setSelectedFile] = useState(null);
// const[errors, setErrors] = useState({});
// const[values, setValues] = useState({
// name: '',
// company: '',
// mobile: '',
// email: '',
// project_description: '',
// });

// const onFIleChangeHandler = (e) => {
// console.log("File Change",e.target.files[0]);
// setSelectedFile(e.target.files[0]);
// };

// const handleChange = (e) => {
// const { name, value } = e.target;
// setValues({
// ...values,
// [name]: value,
// });
// };

// const handleSubmit = e => {
// let data = {
// name: values.name,
// company: values.company,
// mobile: values.mobile,
// email: values.email,
// file: selectedFile,
// project_description: values.project_description,
// }
// e.preventDefault();
// const formdata = new FormData();
// formdata.append("name", data.name);
// formdata.append("company", data.company);
// formdata.append("mobile", data.mobile);
// formdata.append("email", data.email);
// formdata.append("file", data.file);
// formdata.append("project_description", data.project_description);
// axios.post("http://localhost:4000/user/product/", formdata)
// .then((res) => {
// console.log({res});
// alert('you Have Successfully connected.');
// setErrors(validate(formdata));
// })
// // history.push('./home');
// console.log(formdata);
// }
// return {handleChange, values, handleSubmit, errors, onFIleChangeHandler};
// }

// export default Carrier_UseForm;
