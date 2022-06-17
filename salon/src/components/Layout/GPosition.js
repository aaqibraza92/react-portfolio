import styled from "styled-components";

const GPosition = styled.div`
  position: ${props=>{
      return props.position ? props.position : "relative"
  }};
`;

export default GPosition;

