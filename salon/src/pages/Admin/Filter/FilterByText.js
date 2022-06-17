import React from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import GAlign from "../../../components/Layout/GAlign";
import GButton from "../../../components/Layout/GButton";

const shopListData = [
  { value: "Shop", label: "Shop" },
  { value: "Mobile", label: "Mobile" },
  { value: "Home", label: "Home" },
];

const FilterByText = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section>
        <div className="bgLightBlue">
          <h3 className="fs14 pl20 pt10 pb10 mb25">{t("Filterbytext")}</h3>
        </div>
        <div className="pl20 pr20">
          <p className="fs14 colorBlack mb7">{t("Search")}</p>
          <div className="cbd-select mb25">
            <Select
              className="w-100 themeSelect "
              classNamePrefix="themeSelect"
              options={shopListData}
            />
          </div>
          <GAlign align="between" alignV="center" className="mb25">
            <span className="colorRed text-underline">
              {t("Resettodefault")}
            </span>
            <GButton>{t("Onlyfilter")}</GButton>
          </GAlign>
        </div>
      </section>
    </>
  );
};

export default FilterByText;
