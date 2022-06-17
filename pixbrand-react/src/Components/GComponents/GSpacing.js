import styled from "styled-components";

const GSpacing = styled.div`
   {
    margin-bottom: ${(props) => {
      return props.mb ? props.mb : props.margin ? props.margin : "0";
    }};
    margin-top: ${(props) => {
      return props.mt ? props.mt : props.margin ? props.margin : "0";
    }};
    margin-left: ${(props) => {
      return props.ml ? props.ml : props.margin ? props.margin : "0";
    }};
    margin-right: ${(props) => {
      return props.mr ? props.mr : props.margin ? props.margin : "0";
    }};
    padding-bottom: ${(props) => {
      return props.pb ? props.pb : props.padding ? props.padding : "12px";
    }};
    padding-top: ${(props) => {
      return props.pt ? props.pt : props.padding ? props.padding : "0";
    }};
    padding-left: ${(props) => {
      return props.pl ? props.pl : props.padding ? props.padding : "0";
    }};
    padding-right: ${(props) => {
        return props.pr ? props.pr : props.padding ? props.padding : "0";
      }};
      @media only screen and (max-width: 767px) {
      margin-bottom: ${(props) => {
        return props.mobmb ? props.mobmb : props.margin ? props.margin : "0";
      }};
      margin-top: ${(props) => {
        return props.mobmt ? props.mobmt : props.margin ? props.margin : "0";
      }};
      margin-left: ${(props) => {
        return props.mobml ? props.mobml : props.margin ? props.margin : "0";
      }};
      margin-right: ${(props) => {
        return props.mobmr ? props.mobmr : props.margin ? props.margin : "0";
      }};
      padding-bottom: ${(props) => {
        return props.mobpb
          ? props.mobpb
          : props.padding
          ? props.padding
          : "12px";
      }};
      padding-top: ${(props) => {
        return props.mobpt ? props.mobpt : props.padding ? props.padding : "0";
      }};
      padding-left: ${(props) => {
        return props.mobpl ? props.mobpl : props.padding ? props.padding : "0";
      }};
      padding-right: ${(props) => {
        return props.mobpr ? props.mobpr : props.padding ? props.padding : "0";
      }};
    }
    @media only screen and (max-width: 991px) and (min-width: 768px) {
      margin-bottom: ${(props) => {
        return props.tabmb ? props.tabmb : props.margin ? props.margin : "0";
      }};
      margin-top: ${(props) => {
        return props.tabmt ? props.tabmt : props.margin ? props.margin : "0";
      }};
      margin-left: ${(props) => {
        return props.tabml ? props.tabml : props.margin ? props.margin : "0";
      }};
      margin-right: ${(props) => {
        return props.tabmr ? props.tabmr : props.margin ? props.margin : "0";
      }};
      padding-bottom: ${(props) => {
        return props.tabpb
          ? props.tabpb
          : props.padding
          ? props.padding
          : "12px";
      }};
      padding-top: ${(props) => {
        return props.tabpt ? props.tabpt : props.padding ? props.padding : "0";
      }};
      padding-left: ${(props) => {
        return props.tabpl ? props.tabpl : props.padding ? props.padding : "0";
      }};
      padding-right: ${(props) => {
        return props.tabpr ? props.tabpr : props.padding ? props.padding : "0";
      }};
    }
  }
`;

export default GSpacing;

// @media only screen and (max-width: 1199px) and (min-width: 992px) {
//   margin-bottom: ${(props) => {
//     return props.tabLgmb ? props.tabLgmb : props.margin ? props.margin : "0";
//   }};
//   margin-top: ${(props) => {
//     return props.tabLgmt ? props.tabLgmt : props.margin ? props.margin : "0";
//   }};
//   margin-left: ${(props) => {
//     return props.tabLgml ? props.tabLgml : props.margin ? props.margin : "0";
//   }};
//   margin-right: ${(props) => {
//     return props.tabLgmr ? props.tabLgmr : props.margin ? props.margin : "0";
//   }};
//   padding-bottom: ${(props) => {
//     return props.tabLgpb
//       ? props.tabLgpb
//       : props.padding
//       ? props.padding
//       : "12px";
//   }};
//   padding-top: ${(props) => {
//     return props.tabLgpt ? props.tabLgpt : props.padding ? props.padding : "0";
//   }};
//   padding-left: ${(props) => {
//     return props.tabLgpl ? props.tabLgpl : props.padding ? props.padding : "0";
//   }};
//   padding-right: ${(props) => {
//     return props.tabLgpr ? props.tabLgpr : props.padding ? props.padding : "0";
//   }};
// }
