import React, { useEffect, useState } from "react"
import { CardTitle, Col, Container, Row } from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import SalonAuthHeader from "../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../SalonSidebar/SalonSidebar";
import { useTranslation } from "react-i18next";
import GButton from "../../../components/Layout/GButton";
import { t } from "i18next";
import ServicesTabMenu from "./ServicesTabMenu";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
import ServicesModal from "./ServicesModal";
import AddNew from "./AddNew";
// import Test from "./Test";
import EditMemberShipModal from './EditMemberShipModal'
import { getSalonGroupAndServicesList } from "../../../store/salon/groupandservice/action"
import { getPackageList } from "../../../store/salon/packagelist/action"
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types"
import ShowServicesItem from './ShowServicesItem'
import PackageListItems from "./PackageModal/PackageListItems";
import PackageModal from "./PackageModal/PackageModal";
const ServiceSubTask = (props) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const services = useSelector((state) => {
    return state.groupandservice;
  });
  console.log(services)
  useEffect(() => {
    dispatch(getSalonGroupAndServicesList())
    dispatch(getPackageList())
  }, [dispatch])
  const [servicesList, setServicesList] = useState([]);
  const [packageList, setPackageList] = useState([]);
  useEffect(() => {
    setServicesList(services)
  }, [services])

  const packages = useSelector((state) => {
    return state.packagelist;
  });
  useEffect(() => {
    setPackageList(packages)
  }, [packages])

  const [employees, setemployees] = useState({
    value: "",
    label: t("Activeemployees"),
  });
  const Number = [
    { value: "active", label: t("Activeemployees") },
    { value: "10", label: t("Archivedemployees") },
  ];
  const [show, setshow] = useState(0);
  return (
    <div>
      <div className="d-flex">
        <SalonSidebar />
        {/* <SalonSubMenu /> */}
        <Container fluid className="p-0 salon_pc_container">
          <SalonAuthHeader />
          <ServicesTabMenu />
          <div className="card-body ">
            <Row className="align-items-center mb15">
              <Col lg={6}>
                <h2 className="fs24 lb mb0">{t("SalonServices")}</h2>
              </Col>
              <Col lg={6} className="text-end">
                <GButton
                  onClick={() =>
                    AlertModal02.show(<AddNew />, "", () => { }, "xl")
                  }
                >
                  <span className="mr5">{Svg.whiteplus}</span>
                  {t("SalonAddnew")}
                </GButton>
              </Col>
            </Row>
            {Array.isArray(servicesList) && servicesList.map((items, key) => {
              return (<>
                <ShowServicesItem key={key} service={items} />
              </>)
            })}
          </div>
          <div>
            <h4>Package List</h4>
            {Array.isArray(packageList) && packageList.map((packageitem, key) => {
              return (<>
                <Row>
                  <Col md={12}>
                    <section
                      onClick={() =>
                        AlertModal02.show(<PackageModal packageid={packageitem._id} />, "", () => { }, "xl")
                      }
                      className="pointer"
                    >
                      <div className="services_border_box mb10">
                        <Row className="align-items-center pt10 pb10  all_services_tab_active">
                          <Col md={12} className="pointer">
                            <span className="mr10">{Svg.ServicesCutingIcon}</span>
                            <span className="mr15">{packageitem.serviceTitle}</span>
                          </Col>
                        </Row>
                      </div>
                    </section>
                  </Col>
                </Row>
              </>)
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ServiceSubTask

// const MainSection = () => {
//   const { t, i18n } = useTranslation();
//   document.body.dir = i18n.dir();
//   // For Number Object
//   const [employees, setemployees] = useState({
//     value: "",
//     label: t("Activeemployees"),
//   });
//   const Number = [
//     { value: "active", label: t("Activeemployees") },
//     { value: "10", label: t("Archivedemployees") },
//   ];

//   return (
//     <>
//       <Container fluid className="p-0 salon_pc_container">
//         <SalonAuthHeader />
//         <ServicesTabMenu />
//         <div className="card-body ">
//           <Row className="align-items-center mb15">
//             <Col lg={6}>
//               <h2 className="fs24 lb mb0">{t("SalonServices")}</h2>
//             </Col>
//             <Col lg={6} className="text-end">
//               <GButton
//                 onClick={() =>
//                   AlertModal02.show(<AddNew />, "", () => {}, "xl")
//                 }
//               >
//                 <span className="mr5">{Svg.whiteplus}</span>
//                 {t("SalonAddnew")}
//               </GButton>
//             </Col>
//           </Row>
//           <Row>
//             <Col md={12}>
//               <AllServicesResults />
//             </Col>
//           </Row>
//         </div>
//       </Container>
//     </>
//   );
// };

// const AllServicesResults = () => {
//   const [show, setshow] = useState(0);
//   return (
//     <>
//       <div
//         className={`${
//           show === 1 ? "d-none" : ""
//         } border-bottom pt10 pb10 pointer all_services_tab_active mb8`}
//         onClick={() => setshow(1)}
//       >
//         <span className="mr10">{Svg.ServicesHumber}</span>{" "}
//         <span>{t("Haircutshairdressing")}</span>
//       </div>

//       {show === 1 && (
//         <div>
//           <Row className="align-items-center pt10 pb10 pointer all_services_tab_active">
//             <Col md={8}>
//               <span className="mr10">{Svg.ServicesHumber}</span>
//               <span>
//                 <u>{t("Haircutshairdressing")}</u>{" "}
//                 <span
//                   onClick={() =>
//                     AlertModal02.show(
//                       <EditMemberShipModal />,
//                       "",
//                       () => {},
//                       "xs"
//                     )
//                   }
//                 >
//                   {Svg.ServicesEdits}
//                 </span>{" "}
//               </span>
//             </Col>
//             <Col md={4} className="text-end">
//               <GButton
//                 border="1px solid #37A3D2"
//                 color="#37A3D2"
//                 backgroundColor="transparent"
//                 hoverBg="#37A3D2"
//                 hoverBorder="#37A3D2"
//                 onClick={() =>
//                   AlertModal02.show(<EditMemberShipModal />, "", () => {}, "xs")
//                 }
//               >
//                 {t("Addtogroup")}
//               </GButton>
//             </Col>
//           </Row>

//           <section
//             onClick={() =>
//               AlertModal02.show(<ServicesModal />, "", () => {}, "xl")
//             }
//             className="pointer"
//           >
//             <div className="services_border_box mb10">
//               <Row className="align-items-center pt10 pb10  all_services_tab_active">
//                 <Col md={12} className="pointer">
//                   <span className="mr10">{Svg.ServicesCutingIcon}</span>
//                   <span className="mr15">Ladies - Haircut & Blow Dry</span>
//                   <GButton
//                     backgroundColor="#5CB84B"
//                     borderRadius="30px"
//                     transform="uppercase"
//                     hoverBg="#5CB84B"
//                     pt="3px"
//                     pb="3px"
//                     mr="15px"
//                   >
//                     Featured
//                   </GButton>
//                   <GButton
//                     backgroundColor="#37A3D23D"
//                     border="1px solid #37A3D2"
//                     borderRadius="30px"
//                     color="#37A3D2"
//                     hoveColor="#37A3D2"
//                     transform="uppercase"
//                     hoverBorder="#37A3D2"
//                     hoverBg="#37A3D23D"
//                     pt="3px"
//                     pb="3px"
//                     mr="15px"
//                   >
//                     <span className="mr5">{Svg.ServicesDiscountDivision}</span>
//                     discount
//                   </GButton>
//                 </Col>
//                 <div>
//                   <Row className="pl35">
//                     <Col md={6}>Small</Col>
//                     <Col className="text-left">1 hr</Col>
//                     <Col className="text-center">
//                       <span className="mr10">£ 50</span>{" "}
//                       <span className="color_span">£ 50</span>
//                     </Col>
//                   </Row>

//                   <Row className="pl35">
//                     <Col md={6} className="services_border">
//                       Medium
//                     </Col>
//                     <Col className="text-left">45 min</Col>
//                     <Col className="text-center">
//                       <span className="mr10">£ 50</span>{" "}
//                       <span className="color_span">£ 60</span>
//                     </Col>
//                   </Row>

//                   <Row className="pl35">
//                     <Col md={6}>Large</Col>
//                     <Col className="text-left">1 hr 20 min</Col>
//                     <Col className="text-center">
//                       <span className="mr10">£ 50</span>{" "}
//                       <span className="color_span">£ 50</span>
//                     </Col>
//                   </Row>
//                 </div>
//               </Row>
//             </div>

//             <div className="services_border_box mb10">
//               <Row className="align-items-center pt10 pb10  all_services_tab_active">
//                 <Col md={12} className="pointer">
//                   <span className="mr10">{Svg.ServicesCutingIcon}</span>
//                   <span className="mr15">Ladies - Haircut & Blow Dry</span>
//                   <GButton
//                     backgroundColor="#5CB84B"
//                     borderRadius="30px"
//                     transform="uppercase"
//                     hoverBg="#5CB84B"
//                     pt="3px"
//                     pb="3px"
//                     mr="15px"
//                   >
//                     Featured
//                   </GButton>
//                   <GButton
//                     backgroundColor="#37A3D23D"
//                     border="1px solid #37A3D2"
//                     borderRadius="30px"
//                     color="#37A3D2"
//                     hoveColor="#37A3D2"
//                     transform="uppercase"
//                     hoverBorder="#37A3D2"
//                     hoverBg="#37A3D23D"
//                     pt="3px"
//                     pb="3px"
//                     mr="15px"
//                   >
//                     <span className="mr5">{Svg.ServicesDiscountDivision}</span>
//                     discount
//                   </GButton>
//                 </Col>
//                 <div>
//                   <Row className="pl35">
//                     <Col md={6}>Small</Col>
//                     <Col className="text-left">1 hr</Col>
//                     <Col className="text-center">
//                       <span className="mr10">£ 50</span>{" "}
//                       <span className="color_span">£ 50</span>
//                     </Col>
//                   </Row>
//                 </div>
//               </Row>
//             </div>
//           </section>
//         </div>
//       )}
//     </>
//   );
// };

// // Edit Membership Plan Modal
// const EditMemberShipModal = () => {
//   return (
//     <>
//       <div className="box_s border_radius8">
//         <div className="border-bottom card_thank d-flex justify-content-between align-items-center">
//           <CardTitle className="text-dark text-uppercase lb mb-0" tag="h6">
//             Menu GROUP
//           </CardTitle>
//         </div>
//         <div className="card_thank">
//           <Row>
//             <Col md={12}>
//               {/* <GIconInput
//                 label="Menu group name"
//                 type="text"
//                 name="firstname"
//                 placeholder="Menu group name"
//                 className
//                 required
//               /> */}
//               <label>
//                 Menu group name <sup className="text-red">*</sup>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Menu group name"
//                 className="form_custom"
//               />
//             </Col>
//           </Row>
//         </div>
//         <div className="border-top card_thank m_bg_footer">
//           <div className="d-flex align-items-center justify-content-end">
//             <GButton
//               mr="15px"
//               backgroundColor="#fff"
//               color="#000"
//               border="1px solid #707070"
//               hoverBg="#fff"
//               hoveColor="#000"
//               hoverBorder="1px solid #000"
//             >
//               Close
//             </GButton>
//             <GButton>Save</GButton>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
