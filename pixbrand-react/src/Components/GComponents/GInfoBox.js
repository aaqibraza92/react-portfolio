import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: ${(props) => {
    return props.align ? props.align : "center";
  }};
  .leftSection {
    margin-right: 12px;
  }
  .icon svg {
    width: ${(props) => {
      return props.iconWidth ? props.iconWidth + "px" : 48 + "px";
    }};
    height: ${(props) => {
      return props.iconHeight ? props.iconHeight + "px" : 48 + "px";
    }};
  }
  img {
    width: ${(props) => {
      return props.imgWidth ? props.imgWidth + "px" : 48 + "px";
    }};
    height: ${(props) => {
      return props.imgHeight ? props.imgHeight + "px" : 48 + "px";
    }};
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    -webkit-object-fit: cover;
    -moz-object-fit: cover;
    object-fit: cover;
  }
  .label{
    color: ${(props) => {
      return props.labelColor ? props.labelColor : "#1F1F1F";
    }};
    font-size: ${(props) => {
      return props.labelfs ? props.labelfs : "16px";
    }};
  }
  .text{
    color: ${(props) => {
      return props.textColor ? props.textColor : "#7D7D7D";
    }};
  }
`;
const GInfoBox = ({
  imageURL = "",
  icon = "",
  label = "Lorem Ipsum",
  align = "center",
  iconWidth = 48,
  iconHeight = 48,
  imgWidth = 48,
  imgHeight = 48,
  text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <div className="leftSection">
        {imageURL && <img src={imageURL} alt="" />}
        {icon && <span className="icon">{icon}</span>}
      </div>
      <div>
        <div className="label"> {label ? label : "Lorem Ipsum"}</div>
        <div className="text">{text && text}</div>
      </div>
    </Wrapper>
  );
};

export default GInfoBox;

const Icon = {
  dummy: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <path
          id="Path_26668"
          data-name="Path 26668"
          d="M24,0A24,24,0,1,1,0,24,24,24,0,0,1,24,0Z"
          fill="#47bbd0"
        />
      </svg>
    </>
  ),
};
