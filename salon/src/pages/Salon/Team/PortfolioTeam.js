import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Table } from "reactstrap";
import Img from "../../../assets/Img/Img";
import Svg from "../../../assets/svg/Svg";
import AlertModal from "../../../components/AlertModal/AlertModal";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";
import GImage from "../../../components/Layout/GImage/GImage";
import AddPortfolio from "../Setting/VenueDetails/AddPortfolio";
import PortfolioImages from "../Setting/VenueDetails/PortfolioImages";

const PortfolioTeam = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
    
      <PortfolioImages noNavigation={true}/>
    </>
  );
};

export default PortfolioTeam;
