import React from "react";
import { Button } from "react-bootstrap";
import * as Styles from "./style.module.css";

export default function Unauthorized(props) {
  return (
    <div className={Styles.pagecontainer}>
      <div className={Styles.color_title2}>Oops! 401 </div>
      <div className={Styles.message + " " + Styles.color_title}>
        UNAUTHORIZED ACCESS
      </div>
      <div className={`${Styles.message} mb-5`}>
        You are not allowed to access this page.
      </div>
      <Button onClick={() => { window.location.pathname = "/" }} className="btn btn-primary">Go Back to Home Page</Button>
    </div>
  );
}
