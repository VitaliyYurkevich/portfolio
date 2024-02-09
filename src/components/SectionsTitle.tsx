import styled from "styled-components";
import {font} from "../styles/Common";

export const SectionsTitle = styled.h2`
 // color: #42446E;
  
  ${font({family: 'Poppins', weight: 700, Fmax: 48, Fmin: 40})}
  
  //font-family: Poppins, sans-serif;
  font-size: 48px;
  font-style: normal;
 //font-weight: 700;
  text-align: center;
  margin-bottom: 100px;
  
  
  &::before {
    content: '';
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: white;
    
    position: absolute;
    left: 50%;
    bottom: -220px;
    transform: translateX(-50%);
    
  }
  
  
`