import React, { useState } from "react";
const AccordionLoad = ({ id, title, content }) => {
  const [showData, setshowData] = useState(false);

  const action = () => {
    setshowData(!showData);
  };
  return (
    <>
      <style jsx="true">
        {`
          .accordionTrigger {
            display: flex;
            justify-content: space-between;
            background: transparent;
            border-bottom: none;
            padding-bottom: 15px;
            padding-top: 15px;
            border-right: none;
            border-left: none;
            border-top: none;
            padding-left: 0px;
            padding-right: 0px;
            transition: all 0.2s ease-in 0s;
            align-items: center;
          }

          .accordionTrigger:hover {
            background-color: transparent;
          }
          .accContent {
            padding: 20px 0px;
            font-size: 22px;
            color: #7D7D7D;
          }
          .triggerTitle {
            font-size:22px;
            font-weight: bold;
            color: #fff;
          }
        `}
      </style>
      <div className="accWrapper">
        <button
          id={"accordion_" + id}
          className="accordionTrigger w-100 no-link"
          onClick={() => action()}
        >
          {<span className="triggerTitle">{title}</span>}
          <span>{showData ? icons.minus : icons.plus}</span>
        </button>

        {showData && <p className="accContent">{content}</p>}
      </div>
    </>
  );
};

export default AccordionLoad;

const icons = {
  plus: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 23.617 13.504"
      >
        <path
          id="Icon_ionic-ios-arrow-down"
          data-name="Icon ionic-ios-arrow-down"
          d="M18,20.679l8.93-8.937a1.681,1.681,0,0,1,2.384,0,1.7,1.7,0,0,1,0,2.391L19.2,24.258a1.685,1.685,0,0,1-2.327.049L6.68,14.14a1.688,1.688,0,0,1,2.384-2.391Z"
          transform="translate(-6.188 -11.246)"
          fill="#fff"
        />
      </svg>
    </>
  ),
  minus: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 23.619 13.504"
      >
        <path
          id="Icon_ionic-ios-arrow-up"
          data-name="Icon ionic-ios-arrow-up"
          d="M18,15.321l8.93,8.937a1.688,1.688,0,1,0,2.384-2.391L19.2,11.742a1.685,1.685,0,0,0-2.327-.049L6.68,21.86a1.688,1.688,0,0,0,2.384,2.391Z"
          transform="translate(-6.188 -11.25)"
          fill="#fff"
        />
      </svg>
    </>
  ),
};
