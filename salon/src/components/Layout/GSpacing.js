import styled from "styled-components";

const GSpacing=styled.div`
{
    margin-bottom: ${props=>{
        return props.marginBottom ? props.marginBottom : props.margin ? props.margin : '0'
    }};
    margin-top: ${props=>{
        return props.marginTop ? props.marginTop :  props.margin ? props.margin : '0'
    }};
    margin-left: ${props=>{
        return props.marginLeft ? props.marginLeft :  props.margin ? props.margin : '0'
    }};
    margin-right: ${props=>{
        return props.marginRight ? props.marginRight :  props.margin ? props.margin : '0'
    }};
    padding-bottom: ${props=>{
        return props.paddingBottom ? props.paddingBottom : props.padding ? props.padding : '12px'
    }};
    padding-top: ${props=>{
        return props.paddingTop ? props.paddingTop :  props.padding ? props.padding : '0'
    }};
    padding-left: ${props=>{
        return props.paddingLeft ? props.paddingLeft :  props.padding ? props.padding : '0'
    }};
    padding-right: ${props=>{
        return props.paddingRight ? props.paddingRight :  props.padding ? props.padding : '0'
    }}
}
`

export default GSpacing;