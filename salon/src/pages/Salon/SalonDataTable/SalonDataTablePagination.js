import React from "react";
import {
    Table,
  } from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import GAlign from "../../../components/Layout/GAlign";
const SalonDataTablePagination = (props) => {
  return (
    <>
      <section className="heightVh64 bgWhite">
        <Table responsive className="align-middle text-start">
          <thead className="fs14">
            <tr>
              {props.columns &&
                props.columns.map((header, ind) => {
                  return (
                    <th key={"header" + ind.toString()}>{header.label}</th>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {props.rows &&
              props.rows.map((row, ind) => {
                return (
                  <tr className="fs14 colorLightGrey" key={ind.toString()}>
                    {props.columns.map((column, ind2) => {
                      return (
                        <td key={"row_" + ind2.toString()}>
                          {row[column.field]}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </section>
      <section className="pl15 pt10 pb10 pr15">
        <GAlign align="between" alignV="center" mobWrap="wrap">
          <span className="fs14">
            Total {props.paginate && props.paginate.totalDocs} Salon requests
          </span>
          <div>
            <span className="fs14 mr10">Rows per page :</span>
            <select className="width10 bBottom bBlackBottom">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span className="fs14 mr15 ml15">
              1-{props.paginate && props.paginate.totalPages} of{" "}
              {props.paginate && props.paginate.totalDocs}
            </span>
            <span className="mr20">{Svg.leftblackarrow}</span>
            <span>{Svg.rightblackarrow}</span>
          </div>
        </GAlign>
      </section>
    </>
  );
};

export default SalonDataTablePagination;
