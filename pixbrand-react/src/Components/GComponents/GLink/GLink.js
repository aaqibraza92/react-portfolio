import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkWrapper = styled.div`
  display: flex;
  justify-content: ${(props) =>
      props.itemAlign === "center"
        ? "center"
        : props.itemAlign === "left"
        ? "flex-start"
        : props.itemAlign === "right"
        ? "flex-end"
        : props.itemAlign === "between"
        ? "space-between"
        : props.itemAlign === "around"
        ? "space-around"
        : "flex-start"};

  svg {
    position: relative;
  }
  .iconSpan svg{
    top: ${(props)=>{
      return props.top ? props.top : "-1px";
    }}
  }
  a {
    -webkit-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
    align-items: center;
    justify-content: ${(props) =>
      props.align === "center"
        ? "center"
        : props.align === "left"
        ? "flex-start"
        : props.align === "right"
        ? "flex-end"
        : props.align === "between"
        ? "space-between"
        : props.align === "around"
        ? "space-around"
        : "flex-start"};

    margin-bottom: ${(props) => {
      return props.mb ? props.mb : props.margin ? props.margin : "0";
    }};
    margin-top: ${(props) => {
      return props.mt ? props.mt : props.margin ? props.margin : "0";
    }};
    margin-left: ${(props) => {
      return props.ml ? props.ml : props.margin ? props.margin : "0";
    }};
    margin-right: ${(props) => {
      return props.mr ? props.mr : props.margin ? props.margin : "0";
    }};
    padding-bottom: ${(props) => {
      return props.pb ? props.pb : props.padding ? props.padding : "0";
    }};
    padding-top: ${(props) => {
      return props.pt ? props.pt : props.padding ? props.padding : "0";
    }};
    padding-left: ${(props) => {
      return props.pl ? props.pl : props.padding ? props.padding : "0";
    }};
    padding-right: ${(props) => {
      return props.pr ? props.pr : props.padding ? props.padding : "0";
    }};

    -webkit-border-radius: ${(props) => (props.radius ? props.radius : "0px")};
    border-radius: ${(props) => (props.radius ? props.radius : "0px")};

    -webkit-border-radius: ${(props) => (props.radius ? props.radius : "3px")};
    border-radius: ${(props) => (props.radius ? props.radius : "3px")};
    border: ${(props) => {
      return props.border ? props.border : "none";
    }};
    background-color: ${(props) =>
      props.bgColor ? props.bgColor : "transparent"};
    color: ${(props) => {
      return props.color ? props.color : "#47BBD0";
    }};
    width: ${(props) => {
      return props.width ? props.width : "auto";
    }};
    display: ${(props) => {
      return props.display ? props.display : "flex";
    }};

    font-size: ${(props) => {
      return props.fs ? props.fs : "15px";
    }};
    text-decoration: ${(props) => {
      return props.textDecoration ? props.textDecoration : "none";
    }};
    .textSpan{
      // margin-right:10px;
      margin-right: ${(props) => {
        return props.mrtextSpan ? props.mrtextSpan : props.margin ? props.margin : "10px";
      }};
    }
    
  }
  a:hover {
    color: ${(props) => {
      return props.hoverColor ? props.hoverColor : "#000";
    }};
  }
  .buttonView {
    background: #ff0a2b;
    color: #fff;
    text-decoration: none !important;
    font-size: 18px;
    padding: 12px 28px;
  }
  .buttonView:hover span {
    color: #fff !important;
  }
`;

const GLink = ({ to = "#", text = "Link Text", buttonView,id, icon, ...rest }) => {
  return (
    <LinkWrapper {...rest} className={rest.className}>
      <Link id={id} to={to} className={buttonView && "buttonView"}>
        <span className="textSpan">{text}</span> <span className="iconSpan">{icon && icon}</span>{" "}
      </Link>
    </LinkWrapper>
  );
};

export default GLink;
