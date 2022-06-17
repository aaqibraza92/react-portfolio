import React from 'react'
import SalonSidebar from '../SalonSidebar/SalonSidebar'
import Discounts from './Discounts'

const Discount = () => {
  return (
    <>
    <div>
      <div className="d-flex">
        <SalonSidebar />
        {/* <SalonSubMenu /> */}
        {/* <MainSection /> */}
        <Discounts />
      </div>
    </div>
    </>
  )
}

export default Discount