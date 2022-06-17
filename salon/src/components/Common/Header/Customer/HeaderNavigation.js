import React, { useEffect, useState } from "react";
import "../Header.css";
// import { getHeaderMenuList } from "../../../helpers/backend/index";
import { Col, Container, Row } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { headerNavItems } from "../../../../store/navitems/actions";
import PropTypes from "prop-types";
import { authUserProfile } from "../../../../store/auth/profile/actions";

const HeaderNavigation = (props) => {
  const location = useLocation();
  const { users, onGetUsers } = props;
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    onGetUsers();
    setUserList(users);
    dispatch(headerNavItems());
  }, [onGetUsers]);

  let menuList = useSelector(
    (state) => state.navitems && state.navitems.navitems
 
  );
  return (
    <section className="pt-3 pb-3 bg_theme">
      <Container>
        <Row className="align-items-center">
          <Col md="12">
            <nav role="navigation" className="primary-navigation">
              <ul className="pl-0 mb-0">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {menuList &&
                  menuList.map((item, key) => (
                    <li key={key}>
                      <Link to="#">{item.name}</Link>
                      <ul className="dropdown">
                        {item.services &&
                          item.services.map((subitem, index) => (
                            <li key={index}>
                              <Link to="#">{subitem.name}</Link>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// HeaderNavigation.propTypes = {
//   users: PropTypes.object,
//   onGetUsers: PropTypes.func,
// };

const mapStateToProps = ({ authInfo }) => ({
  users: authInfo.authInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onGetUsers: () => dispatch(authUserProfile()),
  // onGetNavitems: () => dispatch(headerNavItems()),
});

// export default HeaderNavigation;
export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavigation);
