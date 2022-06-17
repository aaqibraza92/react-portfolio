import React, { createContext, useEffect, useState } from "react";
import { Col, Container, Row, Table } from "reactstrap";
import Svg from "../../../assets/svg/Svg";
import SalonAuthHeader from "../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../SalonSidebar/SalonSidebar";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import GButton from "../../../components/Layout/GButton";
import { t } from "i18next";
import GInfoBox from "../../../components/GInfoBox";
import Img from "../../../assets/Img/Img";
import SalonEmployeesModals from "./SalonEmployeesModals";
import AlertModal02 from "../../../components/AlertModal02/AlertModal02";
// import SalonSubMenu from "../SalonSubMenu/SalonSubMenu";
import { useSelector, useDispatch } from "react-redux";
import { AuthGetEmpList } from "../../../store/auth/salon/getEmployeeList/actions";
import { HOME_URL, IMAGE_URL } from "../../../helpers/apiurls";
import AlertModal from "../../../components/AlertModal/AlertModal";
import Publicprofile from "./Publicprofile";

const SalonEmployees = (props) => {
  
  const callbackEdit=(val)=>{
    console.log("if true",val);
  }
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div>
      <div className="d-flex">
        <SalonSidebar />
        {/* <SalonSubMenu /> */}
        <MainSection />

      </div>
    </div>
  );
};

export default SalonEmployees;

const MainSection = (props) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const [employees, setemployees] = useState({
    value: "",
    label: t("Activeemployees"),
  });
  const Number = [
    { value: "active", label: t("Activeemployees") },
    { value: "10", label: t("Archivedemployees") },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthGetEmpList());
  }, [dispatch]);


  const selEmpList = useSelector((state) => {
    return (
      state &&
      state.RedGetEmployeeList.getEmployeeLIst &&
      state.RedGetEmployeeList.getEmployeeLIst
    );
  });

  console.log("selEmpList",selEmpList);

 const successApi= localStorage.getItem("successApi");

  const [employeeList, setemployeeList] = useState(selEmpList && selEmpList);
  useEffect(() => {
    setemployeeList(selEmpList && selEmpList);
  }, [selEmpList,successApi]);


  const addNewTeam=()=>{
    localStorage.setItem("tabsEnable",true);
    AlertModal.show(
      <SalonEmployeesModals addNewteam={true} hideOtherTab={true} />,
      "",
      () => {},
      "xl"
    )
  }



  return (
    <>
      <Container fluid className="p-0 salon_pc_container">
        <SalonAuthHeader />
        
        <div className="card-body ">
          <Row className="align-items-center mb15">
            <Col lg={6}>
              <h2 className="fs24 lb mb0">{t("Teammembers")}</h2>
            </Col>
            <Col lg={6} className="d-flex justify-content-end">
              <div className="select_border mr15">
                <Select
                  className="themeSelect"
                  classNamePrefix="themeSelect"
                  options={Number}
                  value={employees}
                  onChange={(e) => setemployees(e)}
                />
              </div>
              <GButton
                onClick={(e) =>addNewTeam()}
              >
                <span className="mr5">{Svg.whiteplus}</span>
                {t("Addteammember")}
              </GButton>
            </Col>
          </Row>
          <ActiveEmployees data={employeeList} />

        </div>
      </Container>
    </>
  );
};

const ActiveEmployees = (props) => {


  const editAction=(val)=>{
    const setEmployeeID=localStorage.setItem("employeeid",val._id);
    const setEmployeeEmail=localStorage.setItem("employemail",val.email);

    AlertModal.show(
      <SalonEmployeesModals data={val} employeeID={setEmployeeID} />,
      "",
      () => {},
      "xl"
    )
  }

  
  return (
    <>
      <section className="">
       
        <Table responsive bordered className="">
          <thead className="fs14">
            <tr>
              <th>{t("Members")}</th>
              <th>{t("Access")}</th>
              <th>{t("Status")}</th>
            </tr>
          </thead>
          <tbody className="align-middle">
      
            {
              props.data && props.data.map((elem,ind)=>{
                return(
                  <tr key={ind} className="fs14" onClick={(e) =>editAction(elem)}>
                  <td>
                    <GInfoBox
                      imageURL={elem.profileImage && IMAGE_URL+elem.profileImage}
                      label={elem.firstName && elem.firstName}
                    />
                  </td>
                  <td>
                    <span className="text-uppercase bgPara pl15 pr15 pt5 pb5 radiusFull">
                      {elem.access && elem.access}
                    </span>
                  </td>
                  {elem.active && elem.active && (
                    <td>
                      <GButton
                        backgroundColor="#5CB84B"
                        transform="uppercase"
                        borderRadius="30px"
                        pb="5px"
                        pt="5px"
                        pl="15px"
                        pr="15px"
                        fs="14px"
                      >
                        Can Login
                      </GButton>
                    </td>
                  )}
                </tr>
                );
              })
            }
          
          </tbody>
        </Table>
      </section>
    </>
  );
};

const ArchivedEmployees = () => {
  return (
    <>
      <section className="heightVh50">
        <Table responsive bordered className="">
          <thead className="fs14">
            <tr>
              <th>{t("Members")}</th>
              <th>{t("Status")}</th>
            </tr>
          </thead>
          <tbody className="align-middle">
            <tr className="fs14">
              <td>
                <GInfoBox imageURL={Img.smile} label="Todd Coleman" />
              </td>
              <td>
                <GButton
                  backgroundColor="#D50303"
                  transform="uppercase"
                  borderRadius="30px"
                  pb="5px"
                  pt="5px"
                  pl="15px"
                  pr="15px"
                  fs="14px"
                >
                  Archived
                </GButton>
              </td>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  );
};
