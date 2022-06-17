import styled from "styled-components";

const GInput = styled.input`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#1F1F1F"};
  width: 100%;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: ${(props) => (props.padding ? props.padding : ".5rem .8rem")};
  margin: ${(props) => (props.margin ? props.margin : "0rem")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "3px"};
  display: block;
  border: 1px solid #1f1f1f;
  outline: none;
  color: ${(props) => (props.color ? props.color : "#3f3f3f")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  font-size: 14px;
  min-width: 100px;
  max-height: 45px;
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
  padding-left: ${(props) => (props.iconLeft ? "38px" : "10px")};

  :focus {
    background-color: ${(props) =>
      props.hoverBgColor ? props.hoverBgColor : "#1F1F1F"};
    border: 1px solid #625f5f;
    box-shadow: 0px 1px 1px #1f1f1f;
  }
`;

export default GInput;
