import React, { useState } from "react";
import styled from "styled-components";

const SwitchWrapper = styled.div`

  background: #f7f8f9;
  display: inline-block;
  -webkit-border-radius: 30px;
  border-radius: 30px;
  margin-bottom: 12px;

  button {
    background: transparent;
    outline: none;
    border: none;
    padding: 10px 30px;
    -webkit-border-radius: 30px;
    border-radius: 30px;
    position: relative;
  }

  button.activeTab {
    background: #47bbd0;
    color: #fff;
  }
`;

const SwitchContainer = styled.div`
  padding: 10px 10px;
`;

const MainWrapper = styled.div`

`;

const GSwitchTab = (props) => {
  const [tabswitcher, settabswitcher] = useState(1);
  return (
    <>
    <MainWrapper>
    <SwitchWrapper>
        <button
          onClick={() => settabswitcher(1)}
          className={`${tabswitcher === 1 ? "activeTab" : ""}`}
        >
          {
              props.firstTitle ? props.firstTitle : "Log In"
          }
        </button>
        <button
          onClick={() => settabswitcher(2)}
          className={`${tabswitcher === 2 ? "activeTab" : ""}`}
        >
            {
              props.secondTitle ? props.secondTitle : "Signup"
          }
        </button>
      </SwitchWrapper>
      <SwitchContainer>
        {tabswitcher === 1 && <div>{props.firstContent}</div>}
        {tabswitcher === 2 && <div>{props.secondContent}</div>}
      </SwitchContainer>
    </MainWrapper>
 
    </>
  );
};

export default GSwitchTab;
