import React, { useEffect, useState } from "react"
import { getSalonDiscount } from '../../store/salon/salondiscount/action'
import { useDispatch, useSelector } from "react-redux";
import GCheckbox from "../Layout/GCheckbox";
import { Col, Container, Row, Label } from "reactstrap";
import { useTranslation } from "react-i18next";

const DiscountDropDown = (props) => {
  const { discountid, onChange } = props;
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const dispatch = useDispatch();
  const salondiscount = useSelector((state) => {
    return state.salondiscount;
  });
  useEffect(() => {
    dispatch(getSalonDiscount())
  }, [dispatch])

  const [salonDiscountList, setSalonDiscountList] = useState([]);
  useEffect(() => {
    setSalonDiscountList(salondiscount)
  }, [salondiscount])

  return (
    <div className="mb-3">
      <Label>{t("Discount")}</Label>
      <div className="select_border_edit" >
        <select className="themeSelect selectbox" name="discountid" onChange={onChange} value={discountid} required>
          <option value="" selected disabled>Select {t("Discount")}</option>
          {Array.isArray(salonDiscountList) && salonDiscountList.map((discount, index) => {
            return (<>
              <option key={discount._id} value={discount._id}>{discount.name}</option>
            </>)
          })
          }
        </select>
      </div>
    </div>
  )
}

export default DiscountDropDown