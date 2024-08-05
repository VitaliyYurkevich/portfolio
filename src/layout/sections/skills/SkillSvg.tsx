import React from 'react';
import {IconSvg} from "../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";


type SkillSvgPropsType = {
    iconId: string
    height?: string
    width?: string
    viewBox?: string
    text: string
}

export const SkillSvg = (props: SkillSvgPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'} >
                <IconWrapper>
                    <IconSvg iconId={props.iconId} viewBox={props.viewBox} width={props.width} height={props.height}/>
                    <StyledText>{props.text}</StyledText>
                </IconWrapper>
            </FlexWrapper>
        </StyledSkill>
    );
};

type SkillPngPropsType = {
    src: string
    height?: string
    width?: string
    viewBox?: string
    text: string
}

export const SkillPng = (props: SkillPngPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper  direction={'column'} align={'center'} >
                <IconWrapper>
                    <StyledImage src={props.src} height={props.height} width={props.width} />
                    <StyledText>{props.text}</StyledText>
                </IconWrapper>
            </FlexWrapper>
        </StyledSkill>
    );
}


const StyledImage = styled.img`
  border-radius: 10px;
`

const StyledText = styled.h3`
margin-top: 10px;
`

const StyledSkill = styled.div`
  align-items: center;
  border: 2px solid #0F1624;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 15px 60px;
  padding: 10px;
  position: relative;
  text-align: center;
  width: 120px;
  
  @media ${theme.media.tablet} {
    //padding: 0
    width: 60px;
  }
`

const SkillTitle = styled.h3`

`

const IconWrapper = styled.div`
position: relative;
`