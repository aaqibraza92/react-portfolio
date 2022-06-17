import React from "react";
import { Form } from "reactstrap";

const CmnInput = (props) => {
  return (
    <>
      {props.label == "" || props.label == undefined ? (
        ""
      ) : (
        <label className="f16 color_black m_b_10">{props.label}</label>
      )}
   

      {props.inputType == "textarea" ?
        <textarea
          name={props.textareaName}
          placeholder={props.textareaPlaceholder}
          id={props.textareaID}
          className={`${props.textareaClassName}`}
        ></textarea>:
        <input
        type={props.type}
        name={props.name}
        minLength={props.minLength}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        id={props.id}
        className={`${props.className}`}
        autoComplete={"off"}
        value={props.value}
        required
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
      } 
   


    </>
  );
};

export default CmnInput;
