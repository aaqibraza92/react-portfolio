import React from "react";
import { Container } from "reactstrap";
import SalonAuthHeader from "../../../../components/Common/Header/Salon/SalonAuthHeader";
import SalonSidebar from "../../SalonSidebar/SalonSidebar";
import NotificationsTab from "./NotificationsTab";
import { useTranslation } from "react-i18next";
import GCheckbox from "../../../../components/Layout/GCheckbox";
import GSpacing from "../../../../components/Layout/GSpacing";
import GButton from "../../../../components/Layout/GButton";

const CustomerNotifications = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div className="d-flex">
      <SalonSidebar />
      <Container fluid className="p-0 position-relative salon_pc_container">
        <SalonAuthHeader />
        <NotificationsTab />
        <div className="card-body height_70_vh">
          <h1 className="fs24 lb mb20">{t("Customernotifications")}</h1>
          <GSpacing>
            <GCheckbox
              label={t("Receivetext")}
              id="receivetext"
              name="receivetext"
            />
          </GSpacing>
          <GCheckbox
            label={t("Receiveemail")}
            id="receiveemail"
            name="receiveemail"
          />
        </div>
        <div className="bTop pt15 pb15 w-100 position-absolute bottom_0 pr25 text-end">
          <GButton>{t("Save")}</GButton>
        </div>
      </Container>
    </div>
  );
};

export default CustomerNotifications;
