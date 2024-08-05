import React from 'react';
import styled from "styled-components";
import {IconSvg} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";


type SkillPropsType = {
    iconId: string
    height?: string
    width?: string
    viewBox?: string
}


export const HeaderIcon = (props: SkillPropsType) => {
    return (
        <StyledHeaderIcon>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconSvg iconId={props.iconId} viewBox={props.viewBox} width={props.width} height={props.height}/>
            </FlexWrapper>
        </StyledHeaderIcon>
    );
};


const StyledHeaderIcon = styled.div`
 // background: blueviolet;
  display: flex;
  //margin-left: 25px;
 //margin-top: 35px;
`