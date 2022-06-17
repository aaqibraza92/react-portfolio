import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  img {
    max-width: 100%;
    border-radius: ${(props) => {
      return props.radius ? props.radius : "0px";
    }};
    width: ${(props) => {
      return props.width ? props.width : "auto";
    }};
    height: ${(props) => {
      return props.height ? props.height : "auto";
    }};
    -webkit-object-fit: ${(props) => {
      return props.cover ? "cover" : "auto";
    }};
    object-fit: ${(props) => {
      return props.cover ? "cover" : "auto";
    }};
    filter: ${(props) => {
      return props.blur ? `blur(${props.blur})` : "none";
    }};
    -webkit-filter: ${(props) => {
      return props.blur ? `blur(${props.blur})` : "none";
    }};
  }
  .imgWrap {
    margin-bottom: 10px;
  }
  p {
    text-align: ${(props) => {
      return props.align ? props.align : "left";
    }};
    color: ${(props) => {
      return props.color ? props.color : "#000";
    }};
    font-size: ${(props) => {
      return props.fontSize ? props.fontSize : "16px";
    }};
  }
`;
const GImageCard = (props) => {
  return (
    <Wrapper {...props}>
      {props.src && (
        <div className="imgWrap">
          <img src={props.src} alt="title" />
        </div>
      )}
      {props.title && <p>{props.title}</p>}
    </Wrapper>
  );
};

export default GImageCard;
