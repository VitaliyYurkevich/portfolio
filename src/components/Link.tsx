import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

export const Link = styled.a<{active?: boolean}>`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;
 // border-radius: 83px;

  &:hover{
    &::before {
      width: 100%;
      height: 90%;
      //height: 10px;
      border-radius: 20px;
    }
  }
  
  &::before {
    content: "";
    display: inline-block;
    background-image: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
    position: absolute;
    bottom: 1px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 0;
    transition: ${theme.animation.transition};
    ${props => props.active && css<{active?: boolean}>`
      height: 10px;
    `}
  }
`