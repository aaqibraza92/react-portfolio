import React, { useState } from "react";
import { CardText, CardTitle, Col, Container, Label, Row } from "reactstrap";
import "./OpeningHours.css";
import TimePicker from "react-time-picker";

const OpeningHours = () => {
   const [value, onChange] = useState("10:00");
  return (
    <>
      <section className="pt70 pb70">
        <Container>
          <Row>
            <Col md={12}>
              <CardTitle tag="h2" className="lb fs32">
                Set standard opening hours
              </CardTitle>
              <CardText>
                Configure the standard hours of operation for this location.
              </CardText>
            </Col>

            <Col md={12} className="pt20">
              <div>
                <span>Sunday</span>
                <Label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </Label>
                <span>Closed</span>

                
                 
                  <div className="time_picker">
                    <TimePicker onChange={onChange} value={value} /> 
                    
                  </div>

                  <div className="time_picker">
                    <TimePicker onChange={onChange} value={value} />
                  </div>


                  <div className="time_picker">
                    <TimePicker onChange={onChange} value={value} />
                  </div>


                  <div className="time_picker">
                    <TimePicker onChange={onChange} value={value} />
                  </div>

               
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OpeningHours;
