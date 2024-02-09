import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";


type SkillPropsType = {
    iconId: string
    height?: string
    width?: string
    viewBox?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'} >
                <IconWrapper>
                    <Icon iconId={props.iconId} viewBox={props.viewBox} width={props.width} height={props.height}/>
                </IconWrapper>
            </FlexWrapper>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
 // width: 20%;
  text-align: center;
 // background-color: lawngreen;
  padding: 40px;
  flex-grow: 3;
  
  
  @media ${theme.media.tablet} {
    //padding: 0
  }
`

const SkillTitle = styled.h3`

`

const IconWrapper = styled.div`
position: relative;
`