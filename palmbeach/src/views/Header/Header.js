import React, { useState } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import Svg from "../../assets/SVG/Svg";
import * as Styles from "./header.module.css";
import * as GlobalStyle from "../../global.module.css";
import NavigationMobile from "../NavigationMobile/NavigationMobile";

export default function Header() {
  const [shownav, setShownav] = useState(false);
  return (
    <>
      <NavigationMobile show={shownav} callback={() => setShownav(false)} />
      <div className={`${Styles.top_head_container}`}>
        February, 03 - 07 | Palm Beach County Convention Center
      </div>

      <div className={`${Styles.header}`}>
        <span
          className={`${
            Styles.logo +
            " " +
            GlobalStyle.fs_6vw_767 +
            " " +
            GlobalStyle.fs_3vw_1200
          } position-absolute`}
        >

          <a href="/">PBIFAF</a>
        </span>
        <div className={Styles.nav_container}>
          <Navbar variant="light">
            <Nav className="me-auto">
              {/* <Nav.Link href="visit" className={Styles.nav_link}>
                VISIT
              </Nav.Link> */}
              <Nav.Link href="/toexhibit" className={Styles.nav_link}>
              TO EXHIBIT
              </Nav.Link>
              {/* <Nav.Link href="pricing" className={Styles.nav_link}>
                EVENTS
              </Nav.Link> */}
              <Nav.Link href="/news" className={Styles.nav_link}>
                NEWS
              </Nav.Link>
              <Nav.Link href="mailto:llester@nextlevelfairs.com" className={Styles.nav_link}>
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar>
        </div>

        <div className={Styles.navbar_icon_mobile}>
          <Button onClick={()=> setShownav(true)} className="btn btn-light">{Svg.navbar}</Button>
        </div>
      </div>
    </>
  );
}
