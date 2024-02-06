import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionsTitle} from "../../../components/SectionsTitle";
import {Skill} from "./Skill";
import {MyContainer} from "../../../components/MyContainer";

export const Skills = () => {
    return (
        <StyledSkills>
            <MyContainer>
                <SectionsTitle>My Skills</SectionsTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Skill iconId={'vscode'}/>
                    <Skill iconId={'js'} />
                    <Skill iconId={'ts'} height={'108'} viewBox={"0 0 108 112"} width={"112"} />
                    <Skill iconId={'html'} />
                    <Skill iconId={'css'}/>
                    <Skill iconId={'redux'} />
                    <Skill iconId={'react'} />
                    <Skill iconId={'git'} />
                    <Skill iconId={'styledComponents'} />
                    <Skill iconId={'github'} />
                </FlexWrapper>
            </MyContainer>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: aqua;
  min-height: 100vh;
  
`