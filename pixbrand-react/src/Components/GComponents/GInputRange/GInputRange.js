import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import styled from "styled-components";

const RangeInput = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  input {
    border: 1px solid #e8e9e9;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    outline: none;
  }
  input:focus {
    border-color: #ec7523;
  }
`;

const WrapperRange = styled.div`
  .ruler {
    display: none !important;
  }
  .multi-range-slider {
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
  }
  .multi-range-slider .bar-left,
  .multi-range-slider .bar-right {
    background: #ddd;
    box-shadow: none;
    border-radius: 0px;
    padding: 2px;
  }
  .multi-range-slider .bar-inner {
    background: #ec7523;
    box-shadow: none;
    border: none;
  }
  .multi-range-slider .thumb::before {
    content: "\\2630";
    background-color: white;
    width: 28px !important;
    height: 28px;
    border: solid 3px #ec7523 !important;
    z-index: 1;
    margin: -12px !important;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #ec7523;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
  }
  .multi-range-slider .thumb * {
    background-color: #ec7523 !important;
    box-shadow: none !important;
  }
  .multi-range-slider {
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 20px;
  }
`;

const GInputRange = (props) => {
  const [range, setRange] = useState({
    minValue: 100,
    maxValue: 900,
  });

  const changeHandler = (e) => {
    setRange({ ...range, minValue: e.minValue, maxValue: e.maxValue });
    props.callback(range); //call back call in any file ex: callback={myfunction(value)}
  };

  return (
    <WrapperRange>
      <MultiRangeSlider
        min={10}
        max={1000}
        step={5}
        ruler={true}
        label={true}
        preventWheel={false}
        minValue={range.minValue}
        maxValue={range.maxValue}
        onInput={(e) => {
          changeHandler(e);
        }}
      />

      <RangeInput>
        <div>
          <input type="text" value={range.minValue} readOnly />
        </div>
        <div className="pl10 pr10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="1"
            viewBox="0 0 11 1"
          >
            <line
              id="Line_535"
              data-name="Line 535"
              x2="11"
              transform="translate(0 0.5)"
              fill="none"
              stroke="#20272b"
              strokeWidth="1"
            />
          </svg>
        </div>
        <div>
          <input type="text" value={range.maxValue} readOnly />
        </div>
      </RangeInput>
    </WrapperRange>
  );
};

export default GInputRange;
