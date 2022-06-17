import React, { useEffect, useState } from "react"
import CreateNewPackage from "./CreateNewPackage";
import SelectServiceFromMenuModal from "./SelectServiceFromMenuModal";
import { useTranslation } from "react-i18next";
import WysiwygEditor from "../../../../components/WysiwygEditor/WysiwygEditor";
import DistributionPackage from "./DistributionPackage";
import GButton from "../../../../components/Layout/GButton";
import DescriptionPackage from "./DescriptionPackage";
import FineprintPackage from "./FineprintPackage";
import { useDispatch, useSelector } from "react-redux";
const PackageModal = (props) => {
  const [team, setteam] = useState(1);
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  var { packageid } = props ;
  const [selectedPackageID, setSelectedPackageID] = useState(packageid);
  const createSuccessHandle = (status, createdid) =>
  {
    if(status)
    {
      setSelectedPackageID(createdid)
    }
  }
  
  return (
    <>
      <div>
        <h3 className="fs14 lb mb0 text-uppercase pt20 pb20 pl20 ">
          {t("Createnewpackage")}
        </h3>

        <ul className="noUl pl15 d-flex bgLightBlue mb0">
          <li
            className={`${
              team === 1 ? "bBottomRed" : ""
            } pt15 pb15 pr15 pl15 bRight pointer`}
            onClick={() => setteam(1)}
          >
            {t("Servicespricing")}
          </li>
          <li
            className={`${
              team === 2 ? "bBottomRed" : ""
            } pt15 pb15 pr15 pl15 bRight pointer ${selectedPackageID && selectedPackageID ? "":"pointerEventNone"}`}
            onClick={() => setteam(2)}
          >
            {t("Description")}
          </li>
          <li
            className={`${
              team === 3 ? "bBottomRed" : ""
            } pt15 pb15 pr15 pl15 bRight pointer ${selectedPackageID && selectedPackageID ? "":"pointerEventNone"}`}
            onClick={() => setteam(3)}
          >
            {t("Fineprint")}
          </li>
          <li
            className={`${
              team === 4 ? "bBottomRed" : ""
            } pt15 pb15 pr15 pl15 bRight pointer ${selectedPackageID && selectedPackageID ? "":"pointerEventNone"}`}
            onClick={() => setteam(4)}
          >
            {t("Distribution")}
          </li>
        </ul>
        {team === 1 && <CreateNewPackage key='createpackage' packageid={selectedPackageID} onSuccess={createSuccessHandle}/>}
        {team === 2 && <DescriptionPackage key='packageprice' packageid={selectedPackageID} />}
        {team === 3 && <FineprintPackage key='packagefineprint' packageid={selectedPackageID} />}
        {team === 4 && <DistributionPackage key='packagedistribution' packageid={selectedPackageID}/>}
        {/* <div className="border-top card_thank m_bg_footer">
          <div className="d-flex align-items-center justify-content-end">
            <GButton
              mr="15px"
              backgroundColor="#fff"
              color="#000"
              border="1px solid #707070"
              hoverBg="#fff"
              hoveColor="#000"
              hoverBorder="1px solid #000"
            >
              {t("Close")}
            </GButton>
            <GButton>{t("Save")}</GButton>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default PackageModal;
