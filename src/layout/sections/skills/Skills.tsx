import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionsTitle} from "../../../components/SectionsTitle";
import {SkillPng, SkillSvg} from "./SkillSvg";
import {MyContainer} from "../../../components/MyContainer";
import AxiosIcon from '../../../assets/images/alternativeImgPng/AxiosIcon.png'
import CSS from '../../../assets/images/alternativeImgPng/CSSIcon.png'
import Formik from '../../../assets/images/alternativeImgPng/Formik.png'
import Git from '../../../assets/images/alternativeImgPng/Git-Icon-1788C.png'
import HTML from '../../../assets/images/alternativeImgPng/html-5-icon.png'
import JS from '../../../assets/images/alternativeImgPng/JavaScript_logo_2.svg.png'
import Jest from '../../../assets/images/alternativeImgPng/jest-logo.png'
import MUI from '../../../assets/images/alternativeImgPng/material-ui-icon-2048x1626-on580ia9.png'
import ReactIcon from '../../../assets/images/alternativeImgPng/ReactIcon.png'
import ReduxIcon from '../../../assets/images/alternativeImgPng/reduxIcon.png'
import RestIcon from '../../../assets/images/alternativeImgPng/RestIcon.png'
import Sass from '../../../assets/images/alternativeImgPng/SASS.png'
import TS from '../../../assets/images/alternativeImgPng/Typescript_logo_2020.svg.png'



export const Skills = () => {

    const skillPng = [
        {title: 'JavaScript', src: JS, height: '60', width: '60'},
        {title: 'TypeScript', src: TS, height: '60', width: '60'},
        {title: 'React', src: ReactIcon, height: '60', width: '90'},
        {title: 'Redux Toolkit', src: ReduxIcon, height: '60', width: '70'},
        {title: 'HTML', src: HTML, height: '60', width: '60'},
        {title: 'CSS', src: CSS, height: '60', width: '60'},
        {title: 'SASS', src: Sass, height: '60', width: '60'},
        {title: 'Material UI', src: MUI, height: '60', width: '60'},
        {title: 'Axios', src: AxiosIcon, height: '60', width: '60'},
        {title: 'REST API', src: RestIcon, height: '60', width: '60'},
        {title: 'Formik', src: Formik, height: '60', width: '60'},
        {title: 'Git', src: Git, height: '60', width: '60'},
        {title: 'Jest', src: Jest, height: '60', width: '60'},

    ]

    return (
        <StyledSkills id={'skills'}>
            <MyContainer >
                <SectionsTitle>My Skills</SectionsTitle>
                <FlexWrapper wrap={'wrap'} justify={'center'} direction={'row'} align={'normal'} >
                    {/*<Skill iconId={'vscode'}/>
                    <Skill iconId={'js'} />
                    <Skill iconId={'ts'} height={'108'} viewBox={"0 0 108 112"} width={"112"} />
                    <Skill iconId={'html'} />
                    <Skill iconId={'css'}/>
                    <Skill iconId={'redux'} />
                    <Skill iconId={'react'} />
                    <Skill iconId={'git'} />
                    <Skill iconId={'styledComponents'} />
                    <Skill iconId={'github'} />*/}
                    {skillPng.map((s)=>{
                        return <SkillPng src={s.src} text={s.title} width={s.width} height={s.height} />
                    })}
                    <SkillSvg iconId={'styledComponents'} text={'Styled Components'} height={'60'} width={'60'} />
                </FlexWrapper>
            </MyContainer>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: aqua;
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: row;
  height: max-content;
  justify-content: center;
  padding-bottom: 20px;
  
`
