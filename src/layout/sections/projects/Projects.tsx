import React, {useState} from 'react';
import styled from "styled-components";
import {SectionsTitle} from "../../../components/SectionsTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import socialImg from './../../../assets/images/proj-1.png'
import timerImg from './../../../assets/images/proj-2.png'
import {MyContainer} from "../../../components/MyContainer";
import {AnimatePresence, motion} from "framer-motion";

export type TabsItemsType = 'all' | 'landing' | 'react' | 'spa'


const tabsItems: Array<{ status: TabsItemsType, title: string }> = [
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
        type: 'spa',
        id: 1
    },
    {
        title: 'Social Network',
        src: timerImg,
        text: text,
        type: 'react',
        id: 2
    },
    {
        title: 'Social Network',
        src: timerImg,
        text: text,
        type: 'spa',
        id: 3
    }
]

export const Projects = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState<TabsItemsType>('all')

    let filteredWorks = worksData

    if (currentFilterStatus === 'landing') {
        filteredWorks = worksData.filter(work => work.type === 'landing')
    }
    if (currentFilterStatus === 'react') {
        filteredWorks = worksData.filter(work => work.type === 'react')
    }
    if (currentFilterStatus === 'spa') {
        filteredWorks = worksData.filter(work => work.type === 'spa')
    }

    function changeFilterStatus(value: TabsItemsType) {
        setCurrentFilterStatus(value)
    }


    return (
        <StyledWorks id={'projects'}>
            <MyContainer>
                <SectionsTitle>My Works</SectionsTitle>
                <TabMenu currentFilterStatus={currentFilterStatus} tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                        <AnimatePresence>
                            {filteredWorks.map((w) => {
                                return (
                                    <motion.div
                                        style={{width: '400px', flexGrow: '1', maxWidth: '540px'}}
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        key={w.id}
                                    >
                                        <Project
                                            title={w.title}
                                            text={w.text}
                                            src={w.src}
                                            key={w.id}
                                        />
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
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