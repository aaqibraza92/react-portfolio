import React from 'react'
import { useTranslation } from "react-i18next";
import { Col, Row } from 'reactstrap'
import GButton from '../Layout/GButton';
import GImage from '../Layout/GImage/GImage';


const MarketingMessageBox = (props) => {
   const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
    <div className="border radius  pt25 pb15 pr25 pl25 position-relative mb20">
        <Row className="align-items-center">
          <Col md={10}>
            <div className="d-flex">
              <div className="icon_image width8 mr15">
                <GImage src={props.Img} />
                {/* <GImage src={Img.heart} /> */}
              </div>
              <div className="width90">
                <h6 className="fs18 lm">{props.title}</h6>
                <p>{props.text}</p>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <GButton
              backgroundColor="transparent"
              border="1px solid #000"
              color="#000"
            >
              {props.buttontext}
            </GButton>
          </Col>
        </Row>
      </div>
      </>
  )
}

export default MarketingMessageBox