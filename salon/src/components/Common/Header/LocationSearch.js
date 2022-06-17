import React, { useEffect } from "react";
import GAlign from "../../Layout/GAlign";
import Svg from "../../../assets/svg/Svg";

const LocationSearch = () => {
  return (
    <>
    <div className="pt8 pb8 pl20 pr8 bshadow bradius30 width38">
        <GAlign alignV="center" align="between">
        <h3 className="fs14 mb0 colorGrey">Hairdressers & Hair S...</h3>
        <span>{Svg.horizontalline}</span>
        <h3 className="fs14 mb0 colorGrey">
            In London · 01/03 · 10:00 - 12:00
        </h3>
        <span>{Svg.serachbgred}</span>
        </GAlign>
    </div>
    </>
  )
}

export default LocationSearch