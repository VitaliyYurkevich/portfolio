import React from 'react';
import styled from "styled-components";
import {SectionsTitle} from "../../../components/SectionsTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import socialImg from './../../../assets/images/proj-1.png'
import timerImg from './../../../assets/images/proj-2.png'
import {MyContainer} from "../../../components/MyContainer";


export const Projects = () => {
    let items = ['All', 'landing page', 'React', 'spa']
    return (
        <StyledWorks>
            <MyContainer>
                <SectionsTitle>My Works</SectionsTitle>
                <TabMenu item={items}/>
                <FlexWrapper justify={'space-between'}>
                    <Project src={socialImg} text={text} title={'Social Network'} TechStock={'HTML , JavaScript, React'} />
                    <Project src={timerImg} text={text} title={'timer'}/>
                    <Project src={timerImg} text={text} title={'timer'}/>
                </FlexWrapper>
            </MyContainer>
        </StyledWorks>

    );
};

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: darkblue;
  
`