import React from "react";
import styled from "styled-components";

const GSection = styled.section`
  -webkit-border-radius: 4px;
  border-radius: 4px;
  background: ${(props) => {
    return props.background ? props.background : "#F7F8F9";
  }};
  padding-top: 60px;
  padding-bottom: 60px;
  min-height: ${(props) => {
    return props.minHeight ? props.minHeight : "550px";
  }};
  max-height: ${(props) => {
    return props.maxHeight ? props.maxHeight : "100%";
  }};
`;

export default GSection;
