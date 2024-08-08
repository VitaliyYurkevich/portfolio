import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {MyContainer} from "../../../components/MyContainer";
import photo from "../../../assets/images/PhotoPortfolio.jpg"
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import Typewriter from 'typewriter-effect';



export const Main = () => {
    return (
        <StyledMain id={'home'}>
            <MyContainer>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <SmallText>Hi 👋,</SmallText>
                        <Name><span>My name is </span>Vitaliy Yurkevich</Name>
                        <MainTitle>
                            <p>A Web Developer.</p>
                            <p>A Frontend Developer.</p>
                            <StyledWrapperTypewriter>
                                <Typewriter
                                    options={{
                                        strings: ['A Frontend Developer.', 'A Web Developer.' ],
                                        autoStart: true,
                                        loop: true,
                                        delay: 150,
                                    }}
                                />
                            </StyledWrapperTypewriter>
                        </MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt=''/>
                    </PhotoWrapper>
                </FlexWrapper>
            </MyContainer>
        </StyledMain>
    );
};

const StyledWrapperTypewriter = styled.div`
  @media ${theme.media.mobile} {
    height: 110px;
  }
`

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: antiquewhite;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: 15px;

  @media ${theme.media.mobile} {
    width: 290px;
    height: 360px;
    top: -17px;
    left: -20px
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 10px 5px 5px #05b9b9, -0.5em 0.8em 0.7em rgba(1, 175, 199, 0.42);;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
   // padding-top: 10px;
  }
  //background-color: darkblue;
`


const MainTitle = styled.h1`
  ${font({weight: 700, Fmax: 38, Fmin: 30})} //background-color: darkblue;
  font-size: 43px;
  @media ${theme.media.mobile} {
    text-align: center;
    
  }
  p{
    display: none;
  }
  
`

const SmallText = styled.h2`
  ${font({weight: 700, Fmax: 38, Fmin: 30})}
  font-size: 34px;
  font-weight: 700;
  letter-spacing: -1px;
  @media ${theme.media.mobile} {
    padding-left: 30px;
  }
  
`

const Name = styled.h2`
  ${font({weight: 700, Fmax: 38, Fmin: 30})}
  letter-spacing: -1px;
  margin: 10px 0;
  color: aqua;
  @media ${theme.media.mobile} {
    text-align: center;
  }
  
  span {
    font-size: 34px;
    color: white;
    white-space: nowrap;
    @media ${theme.media.mobile} {
      white-space: unset;
    }
  }

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -1px;
  
`