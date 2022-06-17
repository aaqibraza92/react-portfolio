import React, { useState } from "react";
import styled from "styled-components";
const GheroWrapper=styled.div`
background: ${(props)=>{
    return props.bgColor ? props.bgColor : "#293F4F"
}}
height: 250px;
`
const GHeroSection = (props) => {
  return <GheroWrapper>

  </GheroWrapper>;
};

export default GHeroSection;
