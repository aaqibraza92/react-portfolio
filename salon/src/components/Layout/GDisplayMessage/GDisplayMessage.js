import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import GButton from "../GButton";

const DisplayWrapper = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#FFF"};
  width: auto;
  padding: ${(props) => (props.padding ? props.padding : "30px 15px")};
  margin: ${(props) => (props.margin ? props.margin : "0rem")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "3px"};
  text-align: ${(props) => {
    return props.align ? props.align : "center";
  }};
  .imgWrap {
    margin-bottom: ${(props) => {
      return props.mbImg ? props.mbImg : props.margin ? props.margin : "15px";
    }};
  }
  h3 {
    color: ${(props) => {
      return props.colorHead ? props.colorHead : "#000";
    }};
    font-size: ${(props) => {
      return props.fontSizeHead ? props.fontSizeHead : "20px";
    }};
    margin-bottom: ${(props) => {
      return props.mbhead ? props.mbhead : props.margin ? props.margin : "15px";
    }};
  }
  p {
    color: ${(props) => {
      return props.colorHead ? props.colorPara : "#5B5D6B";
    }};
    font-size: ${(props) => {
      return props.fontSizePara ? props.fontSizePara : "16px";
    }};
    margin-bottom: ${(props) => {
      return props.mbpara ? props.mbpara : props.margin ? props.margin : "15px";
    }};
  }
`;

const GDisplayMessage = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={4} className="m-auto">
            <DisplayWrapper {...props}>
              {props.src && (
                <div className="imgWrap">
                  <img src={props.src} alt="title" />
                </div>
              )}
              {props.title && <h3>{props.title}</h3>}
              {props.text && <p>{props.text}</p>}
              {props.btntext && <GButton>{props.btntext}</GButton>}
            </DisplayWrapper>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GDisplayMessage;
