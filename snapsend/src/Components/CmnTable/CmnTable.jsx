import React from "react";
import { Form } from "reactstrap";

const CmnTable = (props) => {
  return (
    <>
      <div className="overflow-auto m_b_30">
        <table className="w-100">
          <thead>
            <tr>
              {props.thead &&
                props.thead.map((obj, index) => {
                  return <th>{obj.title}</th>;
                })}
            </tr>
          </thead>
          <tbody>
            {props.tableData &&
              props.tableData.map((obj, index) => {
                //console.log(index);
                return (
                  <>
                    <tr>
                      <td className="p_l_20">{obj.sno}</td>
                      <td>{obj.ReportID}</td>
                      <td>{obj.CaseID}</td>
                      <td>{obj.Location}</td>
                      <td>{obj.ReportDate}</td>

                      <td>
                      {props.action}{" "}
                      {
                        props.pageName == 'suspect' &&

                        <button onClick={()=> props.onClick(obj)} className="btn_theme btn_green">View</button>
                      }
                      {
                        props.pageName !== 'suspect' &&
                        <button className="btn_theme btn_green">View 2</button>
                      }
                      </td>

                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>

      {
          props.pagination &&
          <section className="results">
          <div className="d-flex align-items-center flex-wrap justify-content-center">
            <ul className="pagi no_ul d-flex align-items-center flex-wrap justify-content-center">
              <li>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    viewBox="0 0 5.811 10.121"
                  >
                    <g
                      id="Group_5513"
                      data-name="Group 5513"
                      transform="translate(-7.75 -1.439)"
                    >
                      <path
                        id="Path_94"
                        data-name="Path 94"
                        d="M22,7.5l-4,4,4,4"
                        transform="translate(-9.499 -5)"
                        fill="none"
                        stroke="#272833"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                    </g>
                  </svg>
                </button>
              </li>
              <li>
                <button>1</button>
              </li>
              <li>
                <button>2</button>
              </li>
              <li>
                <button>3</button>
              </li>
              <li>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5.811"
                    height="10.121"
                    viewBox="0 0 5.811 10.121"
                  >
                    <g
                      id="Group_5512"
                      data-name="Group 5512"
                      transform="translate(-1584.439 -1359.487)"
                    >
                      <path
                        id="Path_94"
                        data-name="Path 94"
                        d="M18,7.5l4,4-4,4"
                        transform="translate(1567.5 1353.048)"
                        fill="none"
                        stroke="#272833"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                    </g>
                  </svg>
                </button>
              </li>
            </ul>
  
            <p className="f16 color_black">of 2,982</p>
          </div>
        </section>

      }

    
    </>
  );
};

export default CmnTable;
