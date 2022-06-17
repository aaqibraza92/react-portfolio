import styled from "styled-components";

const GAlign = styled.div`
  @media only screen and (max-width: 767px) {
    flex-wrap: ${(props) => {
      return props.mobWrap ? props.mobWrap : "nowrap";
    }};
  }
  @media only screen and (max-width: 991px) and (min-width: 768px) {
    flex-wrap: ${(props) => {
      return props.tabWrap ? props.tabWrap : "nowrap";
    }};
  }
  display: flex;
  flex: 1;
  width: 100%;
  height: auto;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
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
  align-items: ${(props) =>
    props.alignV === "top"
      ? "top"
      : props.alignV === "center"
      ? "center"
      : props.alignV === "end"
      ? "end"
      : ""};
`;

export default GAlign;
