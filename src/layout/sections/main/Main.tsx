import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {MyContainer} from "../../../components/MyContainer";
import photo from "../../../assets/images/PhotoPortfolio.jpg"
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


export const Main = () => {
    return (
        <StyledMain>
            <MyContainer>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <SmallText>Hi 👋,</SmallText>
                        <Name><span>My name is Vitaliy Yurkevich</span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt=''/>
                    </PhotoWrapper>

                </FlexWrapper>
            </MyContainer>
        </StyledMain>
    );
};


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


  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
    padding-top: 10px;
  }
  //background-color: darkblue;
`


const MainTitle = styled.h1`
  ${font({weight: 700, Fmax: 38, Fmin: 30})} //background-color: darkblue;
  @media ${theme.media.mobile} {
    text-align: center;
  }
`

const SmallText = styled.h2`
  ${font({weight: 700, Fmax: 38, Fmin: 30})}
  font-size: 38px;
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

  @media ${theme.media.mobile} {
    text-align: center;
  }
  
  span {
    white-space: nowrap;
    @media ${theme.media.mobile} {
      white-space: unset;

    }
  }

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;

  }
  font-size: 38px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 10px 0;
`