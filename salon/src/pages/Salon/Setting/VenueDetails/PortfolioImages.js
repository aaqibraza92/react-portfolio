import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "reactstrap";
import { useTranslation } from "react-i18next";
import SalonProfileNavigation from "./SalonProfileNavigation";
import Svg from "../../../../assets/svg/Svg";
import GAlign from "../../../../components/Layout/GAlign";
import GLink from "../../../../components/Layout/GLink";
import GButton from "../../../../components/Layout/GButton";
import GImage from "../../../../components/Layout/GImage/GImage";
import AlertModal02 from "../../../../components/AlertModal02/AlertModal02";
import { useSelector, useDispatch } from "react-redux";
import { AuthGetWorkPortfolio } from "../../../../store/auth/salon/getWorkPortfolio/actions";
import { HOME_URL, IMAGE_URL } from "../../../../helpers/apiurls";
import GImageSquareUpload from "../../../../components/Layout/GImageSquareUpload/GImageSquareUpload";
import AddPortfolio from "./AddPortfolio";
import VenueProfileNavigation from "./Venue/VenueProfileNavigation";
import { getTeamMemberPortfolio } from "../../../../helpers/backend";

const PortfolioImages = (props) => {
  const dispatch = useDispatch();
  const [ifadded, setifadded] = useState(false);
  const getCallback = (val) => {
    setifadded(val);
  };
  const workPortfolioItems = useSelector((state) => {
    return (
      state &&
      state.salonWorkPortfolio.getWorkPortfolio &&
      state.salonWorkPortfolio.getWorkPortfolio.data
    );
  });

  const [data, setData] = useState(workPortfolioItems && workPortfolioItems);
  useEffect(() => {
    setData(workPortfolioItems && workPortfolioItems);
  }, [workPortfolioItems]);

  useEffect(() => {
    dispatch(AuthGetWorkPortfolio());
  }, [dispatch, ifadded]);

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  let getEmployeeid = localStorage.getItem("employeeid");

  useEffect(() => {
    getPortfolioTeamSide();
  }, []);

  const [teamPortfolio, setteamPortfolio] = useState(null);

  const getPortfolioTeamSide = () => {
    const iData = {
      employeeid: getEmployeeid,
    };

    getTeamMemberPortfolio(iData).then((res) => {
      if (res && res.status === 200) {
        console.log("geeet", res.data[0].portfolio);
        setteamPortfolio(res.data[0].portfolio && res.data[0].portfolio);
      }
    });
  };
  return (
    <section
      className={`${props.noNavigation ? "" : "pt40"}  pb40 bgLightBlue`}
    >
      <Container>
        {props.venue ? (
          ""
        ) : props.noNavigation ? (
          ""
        ) : (
          <h2 className="fs24 mobFs18 lb mb20 mobMb10">
            <span className="mr15">{Svg.backarrow}</span>
            {t("Setup")}
          </h2>
        )}

        {props.venue ? (
          <VenueProfileNavigation />
        ) : props.noNavigation ? (
          ""
        ) : (
          <SalonProfileNavigation />
        )}
        <section className="bgWhite ">
          <section className="pt20 pb20 pl30 pr30">
            <GAlign align="between" alignV="center" className="mb20 mobMb10">
              <h2 className="fs24 lb mb0">{t("Addwork")}</h2>
              <GButton
                onClick={() =>
                  AlertModal02.show(
                    <AddPortfolio
                      employeeid={getEmployeeid}
                      callback={getCallback}
                    />,
                    "",
                    () => {},
                    "md"
                  )
                }
              >
                <span className="mr10">{Svg.whiteplus}</span>
                {t("Addnew")}
              </GButton>
            </GAlign>
              {
                props.noNavigation ?
                <Table responsive bordered>
                <thead className="fs14">
                  <tr>
                    <th>{t("Image")}</th>
                    <th>{t("Description")}</th>
                    <th>{t("Services")}</th>
                  </tr>
                </thead>
                <tbody>
                  {teamPortfolio &&
                    teamPortfolio.map((el, index) => {
                      console.log("el",el.services);
                      return (
                        <tr key={index} className="fs14 colorLightGrey">
                          <td className="width8">
                            <GImage
                              src={IMAGE_URL + el.image}
                              radius="4px"
                              marginTop="15px"
                              marginBottom="15px"
                              marginRight="15px"
                              marginLeft="15px"
                            />
                          </td>
                          <td className="width42 text-capitalize">
                            {el.description && el.description}
                          </td>
                          <td className="width25 text-capitalize">
                            {el.services && el.services && el.services[0].name}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
              :
              <DataTable
              data={data}
              ifteamside={props.noNavigation && props.noNavigation}
            />
              }
        

          

            {console.log("teamPortfolio", teamPortfolio)}
          </section>

          {props.noNavigation ? (
            ""
          ) : (
            <GAlign align="right" className="bTop pt20 pb20 pr30">
              <GLink
                to="/salon/setting/amenities"
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
          )}
        </section>
      </Container>
      {/* <Addwork /> */}
    </section>
  );
};

export default PortfolioImages;

const DataTable = (props) => {
  const { data } = props;
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <section>
      <Table responsive bordered>
        <thead className="fs14">
          <tr>
            <th>{t("Image")}</th>
            <th>{t("Description")}</th>
            <th>{t("Services")}</th>
            <th>{t("Uploadedby")}</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((elem, index) => {
              return (
                <tr className="fs14 colorLightGrey">
                  <td className="width8">
                    <GImage
                      src={IMAGE_URL + elem.portfolioImages}
                      radius="4px"
                      marginTop="15px"
                      marginBottom="15px"
                      marginRight="15px"
                      marginLeft="15px"
                    />
                  </td>
                  <td className="width42">
                    {elem.description && elem.description}
                  </td>
                  <td className="width25 text-capitalize">
                    {elem.servicename && elem.servicename}
                  </td>
                  <td className="width25 text-capitalize">
                    {props.ifteamside && props.ifteamside
                      ? elem.employeeName && elem.employeeName
                      : elem.updodedBy && elem.updodedBy}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </section>
  );
};
