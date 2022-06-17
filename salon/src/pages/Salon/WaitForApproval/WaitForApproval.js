import { React } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "reactstrap";
import {useLocation} from 'react-router-dom';

const WaitForApproval = (props) => {
  const { state } = useLocation();
  console.log("state",state);
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <Container>
        <div className="d-flex align-items-center justify-content-center heightVh75">
          <div className="text-center row align-items-center justify-content-center">
            <div className="col-md-6 ">
              <h5 className="fw700 fs32">{
                state && state.msg && state.msg
              }</h5>
              <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio labore culpa voluptas animi adipisci eligendi repellat id earum repellendus.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WaitForApproval;
