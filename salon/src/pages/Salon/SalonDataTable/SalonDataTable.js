import React from "react";
import { Table } from "reactstrap";

const SalonDataTable = (props) => {
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
    </>
  );
};

export default SalonDataTable;
