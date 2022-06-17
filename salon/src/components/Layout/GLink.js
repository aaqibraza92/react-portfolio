import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkWrapper = styled.div`
display: inline-block;
background: ${props=>{
  return props.bg ? props.bg : "transparent"
}};
color: ${props=>{
  return props.color ? props.color : "#fff"
}};
-webkit-border-radius: ${props=>{
  return props.borderRadius ? props.borderRadius : "3px"
}};
border : ${(props)=>{
  return  props.border ? props.border : "none";
}};
margin-bottom: ${props=>{
    return props.marginBottom ? props.marginBottom : props.margin ? props.margin : '0'
}};
margin-top: ${props=>{
    return props.marginTop ? props.marginTop :  props.margin ? props.margin : '0'
}};
margin-left: ${props=>{
    return props.marginLeft ? props.marginLeft :  props.margin ? props.margin : '0'
}};
margin-right: ${props=>{
    return props.marginRight ? props.marginRight :  props.margin ? props.margin : '0'
}};
padding-bottom: ${props=>{
    return props.paddingBottom ? props.paddingBottom : props.padding ? props.padding : '0'
}};
padding-top: ${props=>{
    return props.paddingTop ? props.paddingTop :  props.padding ? props.padding : '0'
}};
padding-left: ${props=>{
    return props.paddingLeft ? props.paddingLeft :  props.padding ? props.padding : '0'
}};
padding-right: ${props=>{
    return props.paddingRight ? props.paddingRight :  props.padding ? props.padding : '0'
}};

a{
color: ${(props) => {
  return props.color ? props.color : "#FF385C";
}};
width: ${(props) => {
  return props.width ? props.width : "auto";
}};
display: ${(props) => {
  return props.display ? props.display : "inline-block";
}};


text-decoration: ${(props)=>{
    return props.textDecoration ? props.textDecoration : 'none'
}};
};
a:hover{
    color: ${(props) => {
      return props.hoverColor ? props.hoverColor : "#000";
}};
}
`;

const GLink = ({ to = "#", text = "Link Text", className="", ...rest }) => {
  return (
    <LinkWrapper {...rest}>
      <Link  className={className} to={to}>{text}</Link>
    </LinkWrapper>
  );
};

export default GLink;
