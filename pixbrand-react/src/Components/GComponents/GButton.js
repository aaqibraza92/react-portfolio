import styled from "styled-components";

const GButton = styled.button`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#FF0A2B")};
  -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: ${(props) => {
    return props.shadow ? props.shadow : "none";
  }};
  -webkit-box-shadow: ${(props) => {
    return props.shadow ? props.shadow : "none";
  }};
  padding-top: ${(props) => (props.pt ? props.pt : "8px")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "8px")};
  padding-left: ${(props) => (props.pl ? props.pl : "20px")};
  padding-right: ${(props) => (props.pr ? props.pr : "20px")};

  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "0px")};
  margin-left: ${(props) => (props.ml ? props.ml : "0px")};
  margin-right: ${(props) => (props.mr ? props.mr : "0px")};

  -webkit-border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "3px"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "3px"};
  border: ${(props) => {
    return props.border ? props.border : "none";
  }};
  outline: none;
  color: ${(props) => (props.color ? props.color : "#FFFFFF")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  font-weight: ${(props) => (props.fw ? props.fw : "500")};
  font-size: ${(props) => (props.fs ? props.fs : "16px")};
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  width: ${(props) => {
    return props.width ? props.width : "auto";
  }};

  :hover {
    background-color: ${(props) => (props.hoverBg ? props.hoverBg : "#20272B")};
    color: ${(props) => (props.hoveColor ? props.hoveColor : "#ddd")};
  }
  @media only screen and (max-width: 767px) {
    padding-top: ${(props) => (props.mobpt ? props.mobpt : "8px")};
    padding-bottom: ${(props) => (props.mobpb ? props.mobpb : "8px")};
    padding-left: ${(props) => (props.mobpl ? props.mobpl : "20px")};
    padding-right: ${(props) => (props.mobpr ? props.mobpr : "20px")};
    margin-top: ${(props) => (props.mobmt ? props.mobmt : "0px")};
    margin-bottom: ${(props) => (props.mobmb ? props.mobmb : "0px")};
    margin-left: ${(props) => (props.mobml ? props.mobml : "0px")};
    margin-right: ${(props) => (props.mobmr ? props.mobmr : "0px")};
    font-size: ${(props) => (props.mobfs ? props.mobfs : "16px")};
  }
`;

export default GButton;
