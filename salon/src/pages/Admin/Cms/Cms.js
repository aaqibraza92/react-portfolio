import React, { useEffect, useState } from "react";
import {
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import BreadCrum from "../BreadCrum/BreadCrum";
import { useTranslation } from "react-i18next";
import AdminDataTable from "../../../components/DataTable/AdminDataTable";
import { connect, useDispatch, useSelector } from "react-redux";
import { postCmsList } from "../../../store/admin/cms/action";
import ReactDatatable from '@ashvin27/react-datatable'
import { Link } from "react-router-dom";


const Cms = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch()
  const cms = useSelector(state => state.cms.data)

  // const [paginationData, setPaginationData] = useState({
  //   sort_by:{ "planType" : 1 },
  //   pagesize:"10",
  //   page:1,
  //   totalDocs : cms.totalDocs ? cms.totalDocs :0,
  //   totalPages : cms.totalPages ? cms.totalDocs :0,
  //   prevPage : cms.prevPage ? cms.totalDocs :0,
  //   nextPage : cms.nextPage ? cms.totalDocs :0,
  // })

  useEffect(() => {
    const fetchData = async () => {
       await dispatch(postCmsList());
    }
    fetchData()
  }, [])

  // const handlePaginateChange = (event) => {
  //   setPaginationData({ ...paginationData, [event.name]: event.value })
  // }


  const columns = [
 
   {
     key: "pageName",
     text:  t("Pagename"),
     sortable: true,
     cell: (items) => {
       return (
         <span>{items.pageName}</span>
       );
     }
     },

{
key: "createdAt",
text: t("Lastupdatedate"),
sortable: true,
cell: (items) => {
return (
   <span>{items.createdAt.slice(0,10)}</span>
);
}
},
{
key: "availability",
text:t("Availability") ,
sortable: true,
cell: (items) => {
 return (
  <label className="switchgreen">
             <input
               type="checkbox"
               id="availability"
               name="availability"
               value={availability}
               onChange={(e) => setAvailability(e.target.checked)}
             />
             <span className="slidergreen roundgreen"></span>
           </label>
 );
}
},

     
     {
key: "",
text: t("Action") ,
cell: (editmembershipaddon,items) => {
return (
 <>
<UncontrolledDropdown>
      <DropdownToggle className="btn btn-danger">
        <span>{Svg.horizontalellipsis}</span>
      </DropdownToggle>
      <DropdownMenu className="radius4 shadow noBorder">
        <DropdownItem>
          <ul className="noBg noUl mb0 pt10 pb10">
            <li>
              <span className="mr10">{Svg.pencil}</span>
              {t("Edit")}
            </li>
          </ul>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>


</>
);
}
},
]

const config1 = {
page_size: 10,
length_menu: [10, 20, 50],
show_filter: true,
show_pagination: true,
pagination: 'advance',
button: {
// excel: true,
// print: true,
}
}



  // For Data table columns
  // const columns = [
  //   { label: t("Pagename"), field: "pageName" },
  //   { label: t("Lastupdatedate"), field: "createdAt" },
  //   { label: t("Availability"), field: "availability" },
  //   { label: t("Action"), field: "actions" },
  // ];

  // For Checkbox ( Green )
  const [availability, setAvailability] = useState(false);

  // let rows = cms.data && cms.data.map((items) => {
  //   items.actions =  <>
  //   <UncontrolledDropdown>
  //     <DropdownToggle className="btn btn-danger">
  //       <span>{Svg.horizontalellipsis}</span>
  //     </DropdownToggle>
  //     <DropdownMenu className="radius4 shadow noBorder">
  //       <DropdownItem>
  //         <ul className="noBg noUl mb0 pt10 pb10">
  //           <li>
  //             <span className="mr10">{Svg.pencil}</span>
  //             {t("Edit")}
  //           </li>
  //         </ul>
  //       </DropdownItem>
  //     </DropdownMenu>
  //   </UncontrolledDropdown>
  // </>
  // items.availability =  <>
  // <label className="switchgreen">
  //     <input
  //       type="checkbox"
  //       id="availability"
  //       name="availability"
  //       value={availability}
  //       onChange={(e) => setAvailability(e.target.checked)}
  //     />
  //     <span className="slidergreen roundgreen"></span>
  //   </label>
  // </>
  //     //items.checkbox = <GCheckbox name={items._id} id={items._id} />
  //   return items
  // })

  // Dummy Row
  // let rows = [
  //   {
  //     groupName: "About us",
  //     serviceName: (
  //       <div>
  //         07/12/2022 <br />
  //         (13 days ago)
  //       </div>
  //     ),
  //     active: (
  //       <>
  //         <label className="switchgreen">
  //           <input
  //             type="checkbox"
  //             id="availability"
  //             name="availability"
  //             value={availability}
  //             onChange={(e) => setAvailability(e.target.checked)}
  //           />
  //           <span className="slidergreen roundgreen"></span>
  //         </label>
  //       </>
  //     ),
  //     action: (
  //       <>
  //         <UncontrolledDropdown>
  //           <DropdownToggle className="btn btn-danger">
  //             <span>{Svg.horizontalellipsis}</span>
  //           </DropdownToggle>
  //           <DropdownMenu className="radius4 shadow noBorder">
  //             <DropdownItem>
  //               <ul className="noBg noUl mb0 pt10 pb10">
  //                 <li>
  //                   <span className="mr10">{Svg.pencil}</span>
  //                   {t("Edit")}
  //                 </li>
  //               </ul>
  //             </DropdownItem>
  //           </DropdownMenu>
  //         </UncontrolledDropdown>
  //       </>
  //     ),
  //   },
  //   {
  //     groupName: "About us",
  //     serviceName: (
  //       <div>
  //         07/12/2022 <br />
  //         (13 days ago)
  //       </div>
  //     ),
  //     active: (
  //       <>
  //         <label className="switchgreen">
  //           <input
  //             type="checkbox"
  //             id="availability"
  //             name="availability"
  //             value={availability}
  //             onChange={(e) => setAvailability(e.target.checked)}
  //           />
  //           <span className="slidergreen roundgreen"></span>
  //         </label>
  //       </>
  //     ),
  //     action: (
  //       <>
  //         <UncontrolledDropdown>
  //           <DropdownToggle className="btn btn-danger">
  //             <span>{Svg.horizontalellipsis}</span>
  //           </DropdownToggle>
  //           <DropdownMenu className="radius4 shadow noBorder">
  //             <DropdownItem>
  //               <ul className="noBg noUl mb0 pt10 pb10">
  //                 <li>
  //                   <span className="mr10">{Svg.pencil}</span>
  //                   {t("Edit")}
  //                 </li>
  //               </ul>
  //             </DropdownItem>
  //           </DropdownMenu>
  //         </UncontrolledDropdown>
  //       </>
  //     ),
  //   },
  //   {
  //     groupName: "About us",
  //     serviceName: (
  //       <div>
  //         07/12/2022 <br />
  //         (13 days ago)
  //       </div>
  //     ),
  //     active: (
  //       <>
  //         <label className="switchgreen">
  //           <input
  //             type="checkbox"
  //             id="availability"
  //             name="availability"
  //             value={availability}
  //             onChange={(e) => setAvailability(e.target.checked)}
  //           />
  //           <span className="slidergreen roundgreen"></span>
  //         </label>
  //       </>
  //     ),
  //     action: (
  //       <>
  //         <UncontrolledDropdown>
  //           <DropdownToggle className="btn btn-danger">
  //             <span>{Svg.horizontalellipsis}</span>
  //           </DropdownToggle>
  //           <DropdownMenu className="radius4 shadow noBorder">
  //             <DropdownItem>
  //               <ul className="noBg noUl mb0 pt10 pb10">
  //                 <li>
  //                   <span className="mr10">{Svg.pencil}</span>
  //                   {t("Edit")}
  //                 </li>
  //               </ul>
  //             </DropdownItem>
  //           </DropdownMenu>
  //         </UncontrolledDropdown>
  //       </>
  //     ),
  //   },
  //   {
  //     groupName: "About us",
  //     serviceName: (
  //       <div>
  //         07/12/2022 <br />
  //         (13 days ago)
  //       </div>
  //     ),
  //     active: (
  //       <>
  //         <label className="switchgreen">
  //           <input
  //             type="checkbox"
  //             id="availability"
  //             name="availability"
  //             value={availability}
  //             onChange={(e) => setAvailability(e.target.checked)}
  //           />
  //           <span className="slidergreen roundgreen"></span>
  //         </label>
  //       </>
  //     ),
  //     action: (
  //       <>
  //         <UncontrolledDropdown>
  //           <DropdownToggle className="btn btn-danger">
  //             <span>{Svg.horizontalellipsis}</span>
  //           </DropdownToggle>
  //           <DropdownMenu className="radius4 shadow noBorder">
  //             <DropdownItem>
  //               <ul className="noBg noUl mb0 pt10 pb10">
  //                 <li>
  //                   <span className="mr10">{Svg.pencil}</span>
  //                   {t("Edit")}
  //                 </li>
  //               </ul>
  //             </DropdownItem>
  //           </DropdownMenu>
  //         </UncontrolledDropdown>
  //       </>
  //     ),
  //   },
  // ];

  return (
    <>
      <div className="row">
        <div className="card_tr">
        <span>{Svg.web}</span>
      <span className="colorRed fs14 ml10 mr10">{t("Breadcrum")}</span>
      <span>{Svg.rightArrow}</span>
      <Link to="#" className="colorLightGrey fs14 ml10 mr10"  >
        {t("CMS")}
      </Link>
        </div>
        <Col md={12}>
          <div className="card">
            <div className="invoice_table">
            {/* <AdminDataTable key='SalonApprovedTable' columns={columns} rows={rows} paginate={paginationData} changeTableData={handlePaginateChange}/> */}
            <ReactDatatable
                            config={config1}
                            records={cms}
                            columns={columns}
                              />
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default Cms;

// Data Table Section
// const DataTable = () => {
//   const [availability, setAvailability] = useState(false);
//   const { t, i18n } = useTranslation();
//   document.body.dir = i18n.dir();
//   return (
//     <>
//       <section className="bgWhite position-relative">
//         <Table responsive className="align-middle text-start">
//           <thead className="fs14">
//             <tr>
//               <th>
//                 {t("Pagename")} <br></br>
//               </th>
//               <th>{t("Lastupdatedate")}</th>
//               <th>
//                 {t("Availability")} <br></br>
//               </th>

//               <th>
//                 {t("Action")} <br></br>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="fs14 colorLightGrey">
//               <td>About Us</td>
//               <td>
//                 07/12/2022 <br />
//                 (13 days ago)
//               </td>
//               <td>
//                 <label className="switchgreen">
//                   <input
//                     type="checkbox"
//                     id="availability"
//                     name="availability"
//                     value={availability}
//                     onChange={(e) => setAvailability(e.target.checked)}
//                   />
//                   <span className="slidergreen roundgreen"></span>
//                 </label>
//               </td>

//               <td>
//                 <UncontrolledDropdown>
//                   <DropdownToggle className="btn btn-danger">
//                     <span>{Svg.horizontalellipsis}</span>
//                   </DropdownToggle>
//                   <DropdownMenu className="radius4 shadow noBorder">
//                     <DropdownItem>
//                       <ul className="noBg noUl mb0 pt10 pb10">
//                         <li>
//                           <span className="mr10">{Svg.pencil}</span>
//                           {t("Edit")}
//                         </li>
//                       </ul>
//                     </DropdownItem>
//                   </DropdownMenu>
//                 </UncontrolledDropdown>
//               </td>
//             </tr>
//           </tbody>
//         </Table>
//         <Pagination />
//       </section>
//     </>
//   );
// };
