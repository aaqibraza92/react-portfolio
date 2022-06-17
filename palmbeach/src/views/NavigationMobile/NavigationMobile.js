import React, { useEffect, useState } from "react";
import { Modal, Row } from "react-bootstrap";
import * as Styles from "./navigationmobile.module.css";

export default function NavigationMobile(props) {
  const navigationInitialData = [
    // {
    //   title: "Visit",
    //   linkto: "/visit",
    // },
    {
      title: "TO EXHIBIT",
      linkto: "/toexhibit",
    },
    // {
    //   title: "Events",
    //   linkto: "/events",
    // },
    {
      title: "News",
      linkto: "/news",
    },
  ];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {}

  useEffect(() => {
    if (props.show) {
      setFullscreen(true);
      setShow(true);
      props.callback();
    }
  }, [props.show]);
  return (
    <div>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header
          className={`${Styles.modal_header}`}
          closeButton
          closeLabel={"X"}
          closeVariant={"white"}
        >
          <Modal.Title>PBIFAF</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${Styles.modal_body}`}>
          <div className="container-fluid">
            {navigationInitialData.map((item) => {
              return <div className={`row ${Styles.nav_item}`} 
              onClick={() => {window.location.pathname = item.linkto}} 
              >{item.title}</div>;
            })}
            <a className={`row ${Styles.nav_item}`} href="mailto:llester@nextlevelfairs.com">Contact</a>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
