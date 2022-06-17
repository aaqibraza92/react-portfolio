import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
:hover{
  border-color: #47BBD0;
}
-webkit-transition: all 0.3s ease 0s;
transition: all 0.3s ease 0s;
  border: 1px solid #eeefef;
  -webkit-border-radius: 4px;
  padding: 30px;
  border-radius: 4px;
  .innerWrapper {
    display: flex;
    align-items: ${(props) => {
      return props.align ? props.align : "start";
    }};
  }

  .leftSection {
    margin-right: 12px;
  }
  .icon svg {
    width: ${(props) => {
      return props.iconWidth ? props.iconWidth + "px" : 48 + "px";
    }};
    height: ${(props) => {
      return props.iconHeight ? props.iconHeight + "px" : 48 + "px";
    }};
  }
  img {
    width: ${(props) => {
      return props.imgWidth ? props.imgWidth + "px" : 64 + "px";
    }};
    height: ${(props) => {
      return props.imgHeight ? props.imgHeight + "px" : 64 + "px";
    }};
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;utt
    border-radius: 100%;
    -webkit-object-fit: cover;
    -moz-object-fit: cover;
    object-fit: cover;
  }
  .testimonialName {
    font-size: ${(props) => {
      return props.fsName ? props.fsName : "18px";
    }};
    color: ${(props) => {
      return props.colorName ? props.colorName : "#000";
    }};
  }
  .testimonialPos {
    margin-bottom: 3px;
    font-size: ${(props) => {
      return props.fsPosition ? props.fsPosition : "14px";
    }};
    color: ${(props) => {
      return props.colorPosition ? props.colorPosition : "#707070";
    }};
  }
  .testimonialStar span {
    display: inline-block;
    margin-right: 2px;
  }
  .testimonialText {
    border-top: 1px solid #eeefef;
    padding-top: 8px;
    margin-top: 11px;
  }
  .testimonialText p {
    font-size: ${(props) => {
      return props.fsPara ? props.fsPara : "16px";
    }};
    color: ${(props) => {
      return props.colorPara ? props.colorPara : "#20272B";
    }};
  }
`;

const GTestimonialBox = ({
  imageURL,
  icon,
  name = "Lorem Ipsum",
  para = "It is a long established fact that a reader will be distracted by the readable content of a page when looking .",
  star = "5",
  iconWidth = 48,
  iconHeight = 48,
  imgWidth = 64,
  imgHeight = 64,
  position = "Business Consultant",
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <div className="innerWrapper">
        <div className="leftSection">
          {imageURL && <img src={imageURL} alt="" />}
          {icon && <span className="icon">{icon}</span>}
        </div>
        <div>
          <div>
            {name && (
              <h4 className="testimonialName">{name ? name : "Lorem Ipsum"}</h4>
            )}
          </div>
          <div className="testimonialPos">{position && position}</div>
          <div className="testimonialStar">
            {star === 1 && Icon.star}
            {star === 2 && (
              <>
                <span>{Icon.star}</span>
                <span>{Icon.star}</span>
              </>
            )}
            {star === 3 && (
              <>
                <span>{Icon.star}</span>
                <span>{Icon.star}</span>
                <span>{Icon.star}</span>
              </>
            )}
            {star === 4 && (
              <>
                <span>{Icon.star}</span>
                <span>{Icon.star}</span>
                <span>{Icon.star}</span>
                <span>{Icon.star}</span>
              </>
            )}
            {star === 5 && (
              <>
                <span>{Icon.star}</span>
                <span>{Icon.star}</span>
                <span>{Icon.star}</span>
                <span>{Icon.star}</span>
                <span>{Icon.star}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {para && (
        <div className="testimonialText">
          <p>{para}</p>
        </div>
      )}
    </Wrapper>
  );
};

export default GTestimonialBox;

const Icon = {
  star: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16.717"
        height="16"
        viewBox="0 0 16.717 16"
      >
        <path
          id="Icon_awesome-star"
          data-name="Icon awesome-star"
          d="M8.9.556,6.863,4.693,2.3,5.358a1,1,0,0,0-.553,1.706l3.3,3.218-.781,4.546a1,1,0,0,0,1.45,1.053L9.8,13.735l4.084,2.147a1,1,0,0,0,1.45-1.053l-.781-4.546,3.3-3.218A1,1,0,0,0,17.3,5.358l-4.565-.666L10.7.556A1,1,0,0,0,8.9.556Z"
          transform="translate(-1.441 0.001)"
          fill="#f9c339"
        />
      </svg>
    </>
  ),
};
