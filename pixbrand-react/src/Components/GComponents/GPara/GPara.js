import React from "react";
import styled from "styled-components";

const GPara = styled.p`
  color: ${(props) => (props.color ? props.color : "#7D7D7D")};
  font-size: ${(props) => (props.fs ? props.fs : "16px")};
  :last-child {
    margin-bottom: 0px;
  }
  @media only screen and (max-width: 767px) {
    font-size: ${(props) => (props.fsMob ? props.fsMob : "15px")};
  }
  @media only screen and (max-width: 991px) and (min-width: 768px) {
    font-size: ${(props) => (props.fsTab ? props.fsTab : "15px")};
  }
  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    font-size: ${(props) => (props.fsTabLg ? props.fsTabfsTabLg : "15px")};
  }
`;

export default GPara;
