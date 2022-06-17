import React, { Component } from "react";
import Images from "Constant/Images/Images";
import { CommonNotifyModal } from "Modals";
import CmnInput from "Components/CmnInput/CmnInput";

class Formpreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FormPreviewListLeft: [
        { label: "Gang Name:", value: "Jalisco New Generation Crtel (CJNG)" },
        { label: "Gang Leader Name:", value: "Johnson Maxico" },
        { label: "Gang Leader Rank:", value: "Lorem Ipsum" },
        { label: "Member Age:", value: "Adult Gang" },
        { label: "Orgin Nationality", value: "Mexico" },
        { label: "Part of Larger Gang:", value: "No" },
        { label: "Gang Dress Style:", value: "No Information Currently." },
        {
          label: "Preferred Weapons:",
          value:
            "Long Rifle, Automatic Rifile, Weaponed Drowns,Shot guns, Kiives",
        },
        { label: "Alies", value: 'Left Arm, "Dragon" Right Arm, "Rapper"' },
        { label: "Piercings", value: "Lorem, Ipsum, Donor" },
        { label: "Tattoos", value: "Lion, Flame" },
        { label: "Teeth", value: 'Left Arm, "White' },
        { label: "Jewelry", value: "Earring, Bracelet" },
        { label: "Scars", value: "Lorem, Ipsum, Donor" },
        { label: "Enemies", value: "Lorem, Ipsum, Donor" },
      ],

      FormPreviewListRight: [
        { label: "New Terminology/Slang:", value: "No Information Currently." },
        { label: "Gang gender:", value: "Male, Female" },
        { label: "Gang Type", value: "Cartel" },
        { label: "Gang Crime Profile:", value: "Blackmaiiing, Bombing, Death Threats, Drug Sales,Execution-Style Shootings, Firearms Use, Hanging,Homicide, Human Trafficking Immigration, Kidnapping Larcemy/Theft, Robbery, Sex Trafficking" },
        { label: "Gang Colors:", value: "Black color" },
        { label: "Rivals", value: "La Nueva Plaza Cartel" },
        { label: "History notes", value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type." },
        {
          label: "Picture of Tags",
          value:
            "See Picture",
        },
        
        { label: "Picture of symbol", value: `See Picture`, },
        { label: "Picture of Tattoo", value: "See Picture" }
      ],
    };
  }

  toggleModal = (modalName) => {
    this.setState({ [modalName]: !this.state[modalName] });
  };

  render() {
    const { FormPreviewListLeft,FormPreviewListRight} = this.state;
    return (
      <>
        <div className="row m_b_30">
          <div className="col-lg-6">
            <h3 className="f24 f_bold color_black">
              Jalisco New Generation Crtel (CJNG)
            </h3>
          </div>

          <div className="col-lg-6">
            <div className="d-flex flex-wrap">
              <div className="m_r_10">
                <p className="f16 color_grey">Last Update :</p>
              </div>
              <div className="f16 color_black">
                <p>Whatcom County Sheriff's Department</p>

                <div>17 August 2021 | 12:54 AM</div>
              </div>
            </div>
          </div>
        </div>

        <section className="btn_controls m_b_30">
          <div className="d-flex align-items-center flex-wrap">
            <div className="m_r_10">
              <button className="btn_theme btn_transparent_green p_t_12 p_b_12">
                Know Associates
              </button>
            </div>
            <div className="m_r_10">
              <button className="btn_theme btn_transparent_green p_t_12 p_b_12 d-flex">
                <span className="m_r_10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <path
                      id="Icon_material-mode-edit"
                      data-name="Icon material-mode-edit"
                      d="M4.5,14v2.5H7l7.372-7.372-2.5-2.5ZM16.305,7.191a.664.664,0,0,0,0-.94l-1.56-1.56a.664.664,0,0,0-.94,0l-1.22,1.22,2.5,2.5Z"
                      transform="translate(-4.5 -4.496)"
                      fill="#538234"
                    />
                  </svg>
                </span>
                <span>Edit</span>
              </button>
            </div>

            <div className="m_r_10">
              <button className="btn_theme btn_transparent_green p_t_12 p_b_12 d-flex">
                <span className="m_r_10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.4"
                    height="12"
                    viewBox="0 0 14.4 12"
                  >
                    <path
                      id="Icon_ionic-md-share-alt"
                      data-name="Icon ionic-md-share-alt"
                      d="M18.9,12.45l-6-5.7v3.2c-5.6.8-7.6,4.8-8.4,8.8,2-2.8,4.4-4.08,8.4-4.08v3.28Z"
                      transform="translate(-4.5 -6.75)"
                      fill="#538234"
                    />
                  </svg>
                </span>
                <span>Share</span>
              </button>
            </div>

            <div className="m_r_10">
              <label class="container_checkbox">
                <span>Archive File</span>

                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </section>

        <div className="row">
                    <div className="col-lg-6">

                 
             

                      <table className="bg_white_table">
                        {FormPreviewListLeft.map((obj, index) => {
                          return (
                            <tr>
                              <td>
                                <p className="m_b_0 color_light_blue">{obj.label}</p>
                              </td>
                              <td>
                                <p className="m_b_0 color_light_black">
                                {obj.value}
                                </p>
                              </td>
                            </tr>
                          );
                        })}
                      </table>
                    </div>

                    <div className="col-lg-6">
                    <table className="bg_white_table">
                        {FormPreviewListRight.map((obj, index) => {
                          return (
                          
                            <tr>
                              <td>
                                <p className="m_b_0 color_light_blue">{obj.label}</p>
                              </td>
                              <td>
                                <p className="m_b_0 color_light_black">
                                {obj.value}
                                </p>
                              </td>
                            </tr>
                          );
                        })}
                      </table>
                    </div>
                  </div>
                  
      </>
    );
  }
}

export default Formpreview;
