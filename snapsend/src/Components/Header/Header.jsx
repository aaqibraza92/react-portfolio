import React from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import {
  Container,
  Col,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Images } from "Constant";
import Select from "react-select";

import { CommonNotifyModal } from "Modals";

import "./Header.scss";
import Auth from "Helpers/Auth/Auth";

const logout = () => {
  Auth.removeAuth();
};

const options = [
  { value: "", label: "Country" },
  { value: "India", label: "India" },
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "Sri Lanka", label: "Sri Lanka" },
  { value: "USA", label: "USA" },
];

const options2 = [
  { value: "", label: "State" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Andhra Pradsesh", label: "Andhra Pradsesh" },
];
const options3 = [
  { value: "", label: "City" },
  { value: "Indore", label: "Indore" },
  { value: "Bhopal", label: "Bhopal" },
  { value: "Delhi", label: "Delhi" },
];
const options4 = [
  { value: "", label: "Language" },
  { value: "English", label: "English" },
  { value: "Dutch", label: "Dutch" },
  { value: "Arabic", label: "Arabic" },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: { value: "", label: "Country" },
      selectedOption2: { value: "", label: "State" },
      selectedOption3: { value: "", label: "City" },
      selectedOption4: { value: "", label: "Language" },

      isTop: "top",
      headerClass: "",
      modalName: true,
      searchOpener: false,
      modal: "",

      isLogedin: false,
    };
  }

  componentDidMount = () => {
    Auth.getAuth()
      ? this.setState({ isLogedin: true })
      : this.setState({ isLogedin: false });
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY;

      if (isTop == 0) {
        // console.log(isTop, 'if')
        this.setState({ headerClass: "" });
      } else if (isTop >= 200) {
        this.setState({ headerClass: "sticky" });
        // console.log(isTop, 'else')
      }
    });
  };

  handleLogout = () => {
    Auth.removeAuth();
    this.setState({ isLogedin: false });
  };

  handleProfile = () => {};
  handleChange = (selectedOption, stateKey) => {
    this.setState({ [stateKey]: selectedOption });
    //console.log(stateKey);
  };

  toggleModal = (modalName) => {
    this.setState({ [modalName]: !this.state[modalName] });
  };
  toggler = (e) => {
      //console.log(e);
    this.setState({ [e]: !this.state[e]});
  };

  render() {
    const {
      selectedOption,
      selectedOption2,
      selectedOption3,
      selectedOption4,
      headerClass,
      searchOpener,
    } = this.state;
    const { type } = this.props;

    return (
      <React.Fragment>
        {type == 1 && (
          <header className={`main_header ${headerClass}`}>
            <div className="container-fluid">
              <div className="d-flex justify-content-between header_area align-items-center flex-wrap">
                <div className="col1 position-relative">
                  <div className="logo_wrapper">
                    <Link to="/">
                      {" "}
                      <img src={Images.Logo.default} alt="" />
                    </Link>
                  </div>
                </div>

                <div className={`col2 hide_default ${searchOpener  ? "opensearch" : ""}`} >
                  <div className="filter_area d-flex align-items-center flex-wrap">
                    <Select
                      value={selectedOption}
                      onChange={(e) => this.handleChange(e, "selectedOption")}
                      options={options}
                      classNamePrefix="sel_style"
                      //menuIsOpen={true}
                    />

                    <Select
                      value={selectedOption2}
                      onChange={(e) => this.handleChange(e, "selectedOption2")}
                      options={options2}
                      classNamePrefix="sel_style"
                    />

                    <Select
                      value={selectedOption3}
                      onChange={(e) => this.handleChange(e, "selectedOption3")}
                      options={options3}
                      classNamePrefix="sel_style"
                    />

                    <button
                      className="filter_btn"
                      onClick={() => this.toggleModal("modal1")}
                    >
                      Search
                    </button>
                  </div>
                </div>

                <div className="col3">
                  <ul className="no_ul menu_right_area align-items-center d-flex">
                    <li className="searchOpener">
                      <button onClick={() => {
                          this.toggler("searchOpener")
                      }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 18.173 18.173"
                        >
                          <g
                            id="Icon_feather-search"
                            data-name="Icon feather-search"
                            transform="translate(-3.6 -3.6)"
                          >
                            <path
                              id="Path_485"
                              data-name="Path 485"
                              d="M18.722,11.611A7.111,7.111,0,1,1,11.611,4.5,7.111,7.111,0,0,1,18.722,11.611Z"
                              fill="none"
                              stroke="#fff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.8"
                            />
                            <path
                              id="Path_486"
                              data-name="Path 486"
                              d="M28.842,28.842l-3.867-3.867"
                              transform="translate(-8.342 -8.342)"
                              fill="none"
                              stroke="#fff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.8"
                            />
                          </g>
                        </svg>
                      </button>
                    </li>

                    <li className="">
                      <Link
                        className="btn_theme btn_red"
                        to=""
                        onClick={logout}
                      >
                        File a Tip
                      </Link>
                    </li>
                    <li className="toggler">
                      <UncontrolledDropdown>
                        <DropdownToggle className="">
                          <div className="drop_down_area ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.97"
                              height="13.828"
                              viewBox="0 0 16.97 13.828"
                            >
                              <path
                                id="Icon_material-menu"
                                data-name="Icon material-menu"
                                d="M4.5,22.828H21.47v-2.3H4.5Zm0-5.762H21.47v-2.3H4.5ZM4.5,9v2.3H21.47V9Z"
                                transform="translate(-4.5 -9)"
                                fill="#fff"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="33.216"
                              height="33.216"
                              viewBox="0 0 33.216 33.216"
                            >
                              <path
                                id="Icon_awesome-user-circle"
                                data-name="Icon awesome-user-circle"
                                d="M16.608.563A16.608,16.608,0,1,0,33.216,17.171,16.605,16.605,0,0,0,16.608.563Zm0,6.429a5.893,5.893,0,1,1-5.893,5.893A5.893,5.893,0,0,1,16.608,6.991Zm0,23.037A12.833,12.833,0,0,1,6.8,25.461a7.467,7.467,0,0,1,6.6-4,1.639,1.639,0,0,1,.475.074,8.867,8.867,0,0,0,2.739.462,8.833,8.833,0,0,0,2.739-.462,1.639,1.639,0,0,1,.475-.074,7.467,7.467,0,0,1,6.6,4A12.833,12.833,0,0,1,16.608,30.029Z"
                                transform="translate(0 -0.563)"
                                fill="#fff"
                              />
                            </svg>
                          </div>
                        </DropdownToggle>

                        <DropdownMenu className="menu_opener">
                          <ul className="top_links no_ul">
                            <li>
                              {this.state.isLogedin ? (
                                <Link to="/logout" onClick={this.handleLogout}>
                                  Logout
                                </Link>
                              ) : (
                                <Link to="/login">Login Acccount</Link>
                              )}
                            </li>
                            <li className="r_acc">
                              {this.state.isLogedin ? (
                                <Link to="/profile">My Profile</Link>
                              ) : (
                                <Link to="/register">Register Acccount</Link>
                              )}
                            </li>
                            <li>
                              <Link to="/about">About Us</Link>
                            </li>
                            <li>
                              <Link to="/membership">Become a member</Link>
                            </li>
                            <li>
                              <Link to="/privacy">Privacy</Link>
                            </li>
                            <li>
                              <Link to="/help">Help</Link>
                            </li>
                            <li>
                              <Link to="/contact">Contact Us</Link>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="divi"></div>
          </header>
        )}

        {type == 2 && (
          <section>
            <header className={`headerArea position-relative ${headerClass}`}>
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-md-12 col-lg-5">
                    <ul className="breadcrumb m_b_0">
                      <li className="m_r_10 mob_full">
                        <a href="#">
                          Home page{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="12"
                            viewBox="0 0 5.569 9.838"
                          >
                            <path
                              id="Path_468"
                              data-name="Path 468"
                              d="M15.5,18l-4,4-4-4"
                              transform="translate(-17.081 16.419) rotate(-90)"
                              fill="none"
                              stroke="#fff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.3"
                            />
                          </svg>
                        </a>
                      </li>
                      <li className="m_r_10">
                        <a href="#">
                          Set-up{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="12"
                            viewBox="0 0 5.569 9.838"
                          >
                            <path
                              id="Path_468"
                              data-name="Path 468"
                              d="M15.5,18l-4,4-4-4"
                              transform="translate(-17.081 16.419) rotate(-90)"
                              fill="none"
                              stroke="#fff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.3"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <span className="color_white">Department officers</span>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-12 col-lg-7">
                    <ul className="no_ul d-flex flex-wrap align-items-center justify-content-end right_menu">
                      <li className="m_r_10">
                        <Link
                          to={{
                            pathname: "/setup",
                            state: "notification",
                            options: "officer",
                          }}
                        >
                          <svg
                            className="m_r_10"
                            xmlns="http://www.w3.org/2000/svg"
                            width="19.803"
                            height="21.8"
                            viewBox="0 0 19.803 21.8"
                          >
                            <g
                              id="Icon_feather-bell"
                              data-name="Icon feather-bell"
                              transform="translate(-3.6 -2.1)"
                            >
                              <path
                                id="Path_474"
                                data-name="Path 474"
                                d="M19.5,9a6,6,0,1,0-12,0c0,7-3,9-3,9h18s-3-2-3-9"
                                transform="translate(0 0)"
                                fill="none"
                                stroke="#fff"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.8"
                              />
                              <path
                                id="Path_475"
                                data-name="Path 475"
                                d="M18.866,31.5a2,2,0,0,1-3.461,0"
                                transform="translate(-3.634 -9.497)"
                                fill="none"
                                stroke="#fff"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.8"
                              />
                            </g>
                          </svg>
                          <span className="f16 color_white">Notification</span>
                        </Link>
                      </li>

                      <li className="m_r_10">
                        <button className="btn_transparent btn_white">
                          <svg
                            className="m_r_10"
                            id="Group_53379"
                            data-name="Group 53379"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 11 11"
                          >
                            <line
                              id="Line_89"
                              data-name="Line 89"
                              y2="11"
                              transform="translate(5.5)"
                              fill="none"
                              stroke="#fff"
                              stroke-width="1.5"
                            />
                            <line
                              id="Line_90"
                              data-name="Line 90"
                              y2="11"
                              transform="translate(11 5.5) rotate(90)"
                              fill="none"
                              stroke="#fff"
                              stroke-width="1.5"
                            />
                          </svg>
                          <span className="f16 color_white">
                            Create Suspect
                          </span>
                        </button>
                      </li>

                      <li className="m_r_10">
                        <Link
                          to="/creategange"
                          className="btn_transparent btn_white"
                        >
                          <svg
                            className="m_r_10"
                            id="Group_53379"
                            data-name="Group 53379"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 11 11"
                          >
                            <line
                              id="Line_89"
                              data-name="Line 89"
                              y2="11"
                              transform="translate(5.5)"
                              fill="none"
                              stroke="#fff"
                              stroke-width="1.5"
                            />
                            <line
                              id="Line_90"
                              data-name="Line 90"
                              y2="11"
                              transform="translate(11 5.5) rotate(90)"
                              fill="none"
                              stroke="#fff"
                              stroke-width="1.5"
                            />
                          </svg>
                          <span className="f16 color_white">Create Gang</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="divi z_index"></div>
            </header>
          </section>
        )}

        <CommonNotifyModal
          open={this.state.modal ? true : false}
          toggle={() => this.toggleModal("modal")}
          className={""}
        >
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facere
            maiores minus soluta vero? Voluptatum, consequuntur voluptas ab
            nostrum laboriosam inventore doloribus pariatur molestiae,
            accusantium ipsum enim ipsa cum officiis!
          </div>
        </CommonNotifyModal>

        <CommonNotifyModal
          open={this.state.modal1 ? true : false}
          toggle={() => this.toggleModal("modal1")}
          className={""}
        >
          <div>
            Modal 2<button onClick={() => this.toggleModal("modal1")}>X</button>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facere
            maiores minus soluta vero? Voluptatum, consequuntur voluptas ab
            nostrum laboriosam inventore doloribus pariatur molestiae,
            accusantium ipsum enim ipsa cum officiis!
          </div>
        </CommonNotifyModal>
      </React.Fragment>
    );
  }
}

export default Home;
