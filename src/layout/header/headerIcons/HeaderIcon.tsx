import React from 'react';
import styled from "styled-components";
import {IconSvg} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";


type SkillPropsType = {
    iconId: string
    height?: string
    width?: string
    viewBox?: string
    pathD?: string
    pathD2?: string
    pathD3?: string
}


export const HeaderIcon = (props: SkillPropsType) => {
    return (
        <StyledHeaderIcon>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconSvg pathD3={props.pathD3} pathD2={props.pathD2} pathD={props.pathD}
                         iconId={props.iconId} viewBox={props.viewBox} width={props.width} height={props.height}/>
            </FlexWrapper>
        </StyledHeaderIcon>
    );
};


const StyledHeaderIcon = styled.div`
 // background: blueviolet;
  display: flex;
  //margin-left: 25px;
 //margin-top: 35px;

  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
    filter: drop-shadow(0 0 10px aqua);
    transition: .2s ease-in-out;
  }
`