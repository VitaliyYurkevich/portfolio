import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button<{ disable?: boolean }>`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  position: relative;
  z-index: 0;
  border-radius: 83px;
  
  &:hover {
    &::before {
      width: 100%;
      height: 100%;
      border-radius: 83px;
    }
  }
  
  &::before {
    content: "";
    display: inline-block;
    width: 50%;
    height: 10px;
    background-color: ${theme.colors.accent};
    background-image: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
    ${props => props.disable && css<{ disable?: boolean }>`
      transition: ${theme.animation.transition};
      background-image: linear-gradient(270deg, #3f7272 0%, #3f7272 66.67%, #3f7272 100%);
      width: 100%;
      height: 100%;
      border-radius: 83px;
    `}
    transition: ${theme.animation.transition};
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%);
  }
  
`