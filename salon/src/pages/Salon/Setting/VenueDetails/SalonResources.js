import React, { useEffect, useState } from "react";
import {
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Table,
  UncontrolledDropdown,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import SalonProfileNavigation from "./SalonProfileNavigation";
import GAlign from "../../../../components/Layout/GAlign";
import GButton from "../../../../components/Layout/GButton";
import Svg from "../../../../assets/svg/Svg";
import GLink from "../../../../components/Layout/GLink";
import { t } from "i18next";
import AlertModal02 from "../../../../components/AlertModal02/AlertModal02";
import GCheckbox from "../../../../components/Layout/GCheckbox";
import { getSalonResources } from "../../../../helpers/backend";
import { useSelector, useDispatch } from "react-redux";
import { AuthGetSalonResources } from "../../../../store/auth/salon/getSalonResources/actions";
import AddResources from "./AddResources";
import VenueProfileNavigation from "./Venue/VenueProfileNavigation";

const SalonResources = (props) => {
  const [success, setsuccess] = useState(false);
  const getCallbackIfSuccess = (val) => {
    setsuccess(val);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthGetSalonResources());
  }, [dispatch, success]);

  const selectGetResources = useSelector((state) => {
    return (
      state.GetSalonResourcesRedux &&
      state.GetSalonResourcesRedux.getSalonResources
    );
  });

  const [getData, setgetData] = useState(
    selectGetResources && selectGetResources
  );
  useEffect(() => {
    setgetData(selectGetResources && selectGetResources);
  }, [selectGetResources, success]);

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <section className="pt40 pb40 bgLightBlue">
      <Container>
        {props.venue ? (
          ""
        ) : (
          <h2 className="fs24 mobFs18 lb mb20 mobMb10">
            <span className="mr15">{Svg.backarrow}</span>
            {t("Setup")}
          </h2>
        )}

        {props.venue ? <VenueProfileNavigation /> : <SalonProfileNavigation />}
        <section className="bgWhite ">
          <section className="pt20 pb20 pl30 pr30">
            <GAlign align="between" alignV="center" className="mb20 mobMb10">
              <h2 className="fs24 lb mb0">{t("Resources")}</h2>
              <GButton
                onClick={() =>
                  AlertModal02.show(
                    <AddResources callbackIfSuccess={getCallbackIfSuccess} />,
                    "",
                    () => {},
                    "lg"
                  )
                }
              >
                <span className="mr10">{Svg.whiteplus}</span>
                {t("Addnew")}
              </GButton>
            </GAlign>
            <p className="fs15 colorGrey mb20">{t("Automaticallu")}</p>
            <DataTable data={getData} />
          </section>
          <GAlign align="right" className="bTop pt20 pb20 pr30">
            <GLink
              to="/salon/setting/portfolio-images"
              text={t("Next")}
              bg="#ff385c"
              color="#fff"
              paddingLeft="10px"
              paddingRight="10px"
              paddingTop="5px"
              paddingBottom="5px"
              hoverColor="#fff"
            ></GLink>
          </GAlign>
        </section>
      </Container>
    </section>
  );
};

export default SalonResources;

const DataTable = (props) => {
  const { data } = props;
  return (
    <section>
      <Table responsive bordered>
        <thead className="fs14">
          <tr>
            <th>{t("Resourcename")}</th>
            <th>{t("Quantity")}</th>
            <th>{t("Assignedservices")}</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((elem, ind) => {
              return (
                <tr key={ind} className="fs14 colorLightGrey">
                  <td>{elem.name && elem.name}</td>
                  <td>{elem.quantity && elem.quantity}</td>
                  <td>{elem.services && elem.services}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </section>
  );
};
