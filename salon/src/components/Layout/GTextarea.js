import React from "react";
import styled from "styled-components";
import GPosition from "./GPosition";

const GTextareaWrapper = styled.div`
  label {
    font-size: 16px;
    margin-bottom: 4px;
  }
  textarea {
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "#FFF"};
    width: auto;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    padding: ${(props) => (props.padding ? props.padding : ".5rem .8rem")};
    margin: ${(props) => (props.margin ? props.margin : "0rem")};
    border-radius: ${(props) =>
      props.borderRadius ? props.borderRadius : "3px"};
    display: block;
    border: 1px solid #e8e9e9;
    outline: none;
    color: ${(props) => (props.color ? props.color : "#3f3f3f")};
    flex-direction: ${(props) => (props.direction ? props.direction : "row")};
    font-size: 16px;
    min-width: 100px;
    height: ${(props) => (props.height ? props.height : "130px")};
    max-height: ${(props) => (props.maxheight ? props.maxheight : "180px")};
    width: 100%;
    resize: none;
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    padding-left: ${(props) => (props.icon ? "35px" : "10px")};
    pointer-events: ${(props)=>( props.pointerEvent ? props.pointerEvent: "none")}
  }

  textarea:focus {
    background-color: ${(props) =>
      props.hoverBgColor ? props.hoverBgColor : "#FF385C17"};
    border: 1px solid #ff385c;
    box-shadow: 0px 1px 1px #ff385c5e;
  }

  .giconinput_absolute {
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    top: 0px;
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
  }

  .giconinput_absolute svg {
    width: 18px;
  }

  .giconinput_absolute:hover {
    opacity: 0.8;
  }
  .giconinput_iconLeft {
    left: 10px;
  }
`;

const GTextarea = (props) => {
  return (
    <GPosition>
      {props.icon && (
        <span className="giconinput_iconLeft giconinput_absolute">
          {props.icon}
        </span>
      )}
      <GTextareaWrapper {...props}>
        {props.label && <label htmlFor={props.id}>{props.label}</label>}
        <textarea
          onBlur={props.onBlur}
          onChange={props.onChange}
          onKeyUp={props.onKeyUp}
          placeholder={props.placeholder}
          className={props.className}
          id={props.id}
          icon={props.icon}
          value={props.value}
        ></textarea>
      </GTextareaWrapper>
    </GPosition>
  );
};

export default GTextarea;

{
  /* // const Icon = {
//   star: (
//     <>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="16.717"
//         height="16"
//         viewBox="0 0 16.717 16"
//       >
//         <path
//           id="Icon_awesome-star"
//           data-name="Icon awesome-star"
//           d="M8.9.556,6.863,4.693,2.3,5.358a1,1,0,0,0-.553,1.706l3.3,3.218-.781,4.546a1,1,0,0,0,1.45,1.053L9.8,13.735l4.084,2.147a1,1,0,0,0,1.45-1.053l-.781-4.546,3.3-3.218A1,1,0,0,0,17.3,5.358l-4.565-.666L10.7.556A1,1,0,0,0,8.9.556Z"
//           transform="translate(-1.441 0.001)"
//           fill="#f9c339"
//         />
//       </svg>
//     </>
//   ),
// }; */
}
