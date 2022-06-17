import React from "react";
import { CardText, CardTitle, Col, Container, Row } from "reactstrap";
import SalonTab from "../../../components/SalonTab/SalonTab";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "./SalonMembershipPlan.css";

const SalonMembershipPlan = () => {
  return (
    <>
      <div className="pt50 pb50 bg_gradiant">
        <Container className="bg_four_image pt40 pb40">
          <Row>
            <Col md={8} className="m-auto text-center">
              <CardTitle tag="h1" className="lb lh65 fs50">
                Start building today and save hours from the process.
              </CardTitle>
              <CardText>
                Gain access to our complete library of components. Unlimited
                combinations for you to build better products faster. New
                components and products added regularly Join the club today!
              </CardText>
            </Col>
          </Row>
        </Container>

        <Container className="pt30">
          <Row>
            <SalonTab />
          </Row>
        </Container>
      </div>

      <section className="pt70 pb70 bg_grey">
        <Container>
          <Row>
            <Col md={12} className="text-center mb-4">
              <CardTitle tag="h2" className="lb">
                Frequently Asked Questions
              </CardTitle>
            </Col>
            <Col md={12}>
              <div className="accodion_t">
                <AccordionTab />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SalonMembershipPlan;

function AccordionTabtext(props) {
  return (
    <>
      <div>{props.title}</div>
      <p className="mb-0">{props.text}</p>
    </>
  );
}

const AccordionTab = () => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <AccordionTabtext title="So how does it work again?" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <AccordionTabtext text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <AccordionTabtext title="Can we cancel our subscription?" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <AccordionTabtext text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <AccordionTabtext title="Are there any limitations?" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <AccordionTabtext text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <AccordionTabtext title="Are there any limitations?" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <AccordionTabtext text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <AccordionTabtext title="How trustworthy is  Bakim Randevu?" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <AccordionTabtext text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <AccordionTabtext title="Why should I register?" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <AccordionTabtext text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <AccordionTabtext title="Do you offer refunds?" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <AccordionTabtext text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};
