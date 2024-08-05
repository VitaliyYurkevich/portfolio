import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {HeaderIcon} from "./HeaderIcon";

import {theme} from "../../../styles/Theme";



export const HeaderIcons = () => {

    return (
        <StyledHeaderIcons>
            <FlexWrapper wrap={'nowrap'} justify={'space-between'} >
                <a href={'https://github.com/VitaliyYurkevich'} >
                    <HeaderIcon iconId={'githubHeader'} width={'32'} height={'32'} viewBox={"0 0 32 32"}/>
                </a>
                <a href={''} >
                    <HeaderIcon iconId={'linkedinHeader'} width={'32'} height={'32'} viewBox={"0 0 32 32"}/>
                </a>
                <a href={'https://t.me/vittelit'} >
                    <HeaderIcon iconId={'telegramHeader'} width={'35'} height={'30'} viewBox={'0 0 35 30'}/>
                </a>
            </FlexWrapper>
        </StyledHeaderIcons>
    );
};


const StyledHeaderIcons = styled.div`
 // background: blueviolet;

  @media ${theme.media.mobile} {
    display: flex;
    position: running(center);
   // background-color: green;
    padding-right: 33%;
    padding-left: 5%;
  }
 a {
   width: 32px;
   //padding-right: 50px;
   margin-right: 30px;
 }
  display: flex;
`