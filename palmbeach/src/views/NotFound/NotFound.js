import React from "react";
import { Button } from "react-bootstrap";
import * as Styles from "./style.module.css";

export default function NotFound() {
  return (
    <div className={Styles.container}>
      <div className={`${Styles.fnt_primary}`}>Oops! 404</div>
      <div className={`${Styles.fnt_primary} ${Styles.message} mb-5`}>
        Page Not Found
      </div>
      <Button
        className={`${Styles.fnt_primary} btn btn-info p-2`}
        onClick={() => {
          window.location.pathname = "/";
        }}
      >
        Go Back to Home
      </Button>
    </div>
  );
}
