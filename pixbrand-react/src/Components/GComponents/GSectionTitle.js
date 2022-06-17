import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 10px 0px;

  .gsectiontitle_pretitle {
    text-transform: ${(props) => {
      return props.tt ? props.tt : "none";
    }};
    font-size: ${(props) => {
      return props.fsPt ? props.fsPt : "16px";
    }};
    font-weight: ${(props) => {
      return props.fwPt ? props.fwPt : "initial";
    }};
  }
  justify-content: ${(props) => {
    return props.align ? props.align : "flex-start";
  }};
  text-align: ${(props) => {
    return props.align ? props.align : "left";
  }};

  h1 {
    margin-bottom: ${(props) => {
      return props.mbT ? props.mbT : "0px";
    }};
    margin-top: ${(props) => {
      return props.mtTitle ? props.mtTitle : "0px";
    }};
    margin-left: ${(props) => {
      return props.mlTitle ? props.mlTitle : "0px";
    }};
    margin-right: ${(props) => {
      return props.mrTitle ? props.mrTitle : "0px";
    }};
    padding: 0;
    color: ${(props) => {
      return props.titlecolor ? props.titlecolor : "#fff";
    }};
    font-size: ${(props) => {
      return props.fsT ? props.fsT : "40px";
    }};
    font-weight: ${(props) => {
      return props.fwt ? props.fwt : "initial";
    }};
    width: ${(props) => {
      return props.widthTitle ? props.widthTitle : "100%";
    }};
  }

  .gsectiontitle_pretitle {
    color: ${(props) => {
      return props.colorPt ? props.colorPt : "#fff";
    }};
  }
  .gsectiontitle_subtitle {
    color: ${(props) => {
      return props.subtitlecolor ? props.subtitlecolor : "#999";
    }};
    font-size: ${(props) => {
      return props.fsSubT ? props.fsSubT : "36px";
    }};
  }
  @media only screen and (max-width: 767px) {
    max-width: ${(props) => {
      return props.maxWidth ? props.maxWidth : "100%";
    }};
    h1 {
      font-size: ${(props) => {
        return props.fsTitleMob ? props.fsTitleMob : "24px";
      }};
      width: ${(props) => {
        return props.WidthMobTitle ? props.WidthMobTitle : "100%";
      }};
    }
  }
  @media only screen and (max-width: 991px) and (min-width: 768px) {
    max-width: ${(props) => {
      return props.maxWidthTab ? props.maxWidthTab : "100%";
    }};
    h1 {
      font-size: ${(props) => {
        return props.fsTitleTab ? props.fsTitleTab : "28px";
      }};
      width: ${(props) => {
        return props.WidthTabTitle ? props.WidthTabTitle : "100%";
      }};
    }
  }
  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    max-width: ${(props) => {
      return props.maxWidthTabLg ? props.maxWidthTabLg : "100%";
    }};
    h1 {
      font-size: ${(props) => {
        return props.fsTitleTabLg ? props.fsTitleTabLg : "28px";
      }};
      width: ${(props) => {
        return props.WidthTabLgTitle ? props.WidthTabLgTitle : "100%";
      }};
    }
  }
`;
const GSectionTitle = ({
  title = "Define title",
  pretitle,
  subTitle,
  titlecolor = "#fff",
  pretitlecolor = "#47BBD0",
  subtitlecolor = "#7f7f7f",
  fsTitle,
  mbTitle,
  fsSubTitle,
  ...rest
}) => {
  return (
    <Wrapper
      titlecolor={titlecolor}
      pretitlecolor={pretitlecolor}
      subtitlecolor={subtitlecolor}
      {...rest}
    >
      <div>
        {pretitle && <div className="gsectiontitle_pretitle">{pretitle}</div>}
        {title && <h1>{title}</h1>}
        {subTitle && <div className="gsectiontitle_subtitle">{subTitle}</div>}
      </div>
    </Wrapper>
  );
};

export default GSectionTitle;
