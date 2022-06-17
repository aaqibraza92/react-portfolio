import React from 'react'
import {
  Table,
} from "reactstrap";
import GAlign from "../Layout/GAlign";
import Svg from "../../assets/svg/Svg";
const AdminDataTable = (props) => {
  const clickNextPage = () => {
    props.changeTableData({name : "page", value : props.paginate.nextPage})
  }
  const clickPrevPage = () => {
    props.changeTableData({name : "page", value : props.paginate.prevPage})
  }
  const clickPageSaize = event => {
    props.changeTableData({name : "pagesize", value : event.target.value})
  }
  return (
    <>
      <section className="heightVh64 bgWhite">
        <Table responsive className="align-middle  text-start">
          <thead className="fs14">
            <tr>
            {props.columns &&
              props.columns.map((header, ind) => {
                return (<th key={'header'+ind.toString()}>{header.label}</th>)
              })
            }
            </tr>
          </thead>
          <tbody>
            { props.rows &&
              props.rows.map((row, ind) => {
                return (
                  <tr className="fs14 colorLightGrey" key={ind.toString()}>
                    {
                      props.columns.map((column, ind2) => {
                        return (<td key={'row_'+ind2.toString()}>{row[column.field]}</td>)
                      })
                    }
                  </tr>
                )
              }) 
            }
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
            <select className="width10 bBottom bBlackBottom" defaultValue={props.paginate.page} onChange={(e) =>clickPageSaize(e)}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span className="fs14 mr15 ml15">
              {props.paginate && props.paginate.totalPages} of{" "}
              {props.paginate.totalDocs}
            </span>
            <span className="mr20" onClick={clickPrevPage}>
              {Svg.leftblackarrow} </span>
            <span onClick={clickNextPage}>{Svg.rightblackarrow}</span>
          </div>
        </GAlign>
      </section>
    </>
  )
}

export default AdminDataTable