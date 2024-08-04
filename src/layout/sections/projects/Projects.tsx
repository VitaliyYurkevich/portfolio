import React, {useState} from 'react';
import styled from "styled-components";
import {SectionsTitle} from "../../../components/SectionsTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import socialImg from './../../../assets/images/proj-1.png'
import timerImg from './../../../assets/images/proj-2.png'
import {MyContainer} from "../../../components/MyContainer";

export type TabsItemsType = 'all' | 'landing' | 'react' | 'spa'


const tabsItems: Array<{ status: TabsItemsType , title: string}> = [
    {
        title: 'All',
        status: 'all'
    },
    {
        title: 'Landing page',
        status: 'landing'
    },
    {
        title: 'React',
        status: 'react'
    },
    {
        title: 'spa',
        status: 'spa'
    },
]

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

const worksData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: text,
        type: 'spa'
    },
    {
        title: 'Social Network',
        src: timerImg,
        text: text,
        type: 'react'
    },
    {
        title: 'Social Network',
        src: timerImg,
        text: text,
        type: 'spa'
    }
]

export const Projects = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState<TabsItemsType>('all')

    let filteredWorks = worksData

    if(currentFilterStatus === 'landing') {
        filteredWorks = worksData.filter(work=> work.type === 'landing')
    }
    if(currentFilterStatus === 'react') {
        filteredWorks = worksData.filter(work=> work.type === 'react')
    }
    if(currentFilterStatus === 'spa') {
        filteredWorks = worksData.filter(work=> work.type === 'spa')
    }

    function changeFilterStatus  (value: TabsItemsType )  {
        setCurrentFilterStatus(value)
    }


    return (
        <StyledWorks id={'projects'}>
            <MyContainer>
                <SectionsTitle>My Works</SectionsTitle>
                <TabMenu currentFilterStatus={currentFilterStatus}  tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}/>
                <FlexWrapper justify={'space-around'} align={'flex-start'} wrap={'wrap'}>
                    {filteredWorks.map((w)=>{
                        return <Project title={w.title} text={w.text} src={w.src} />
                    })}
                </FlexWrapper>
            </MyContainer>
        </StyledWorks>

    );
};


const StyledWorks = styled.section`
  position: relative;
  min-height: 100vh;
  background-color: darkblue;
  ${FlexWrapper} {
    gap: 30px;
  }
  
`