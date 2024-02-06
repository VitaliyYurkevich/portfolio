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
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
                    <div>
                        <SmallText>Hi 👋,</SmallText>
                        <Name><span>My name is Vitaliy Yurkevich</span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>
                    <Photo src={photo} alt=''/>
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


const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
  //background-color: darkblue;
`


const MainTitle = styled.h1`
  ${font({weight: 700, Fmax: 38, fMin: 30})}
  //background-color: darkblue;
`

const SmallText = styled.h2`
  ${font({weight: 700, Fmax: 38, fMin: 30})}
  font-size: 38px;
  font-weight: 700;
  letter-spacing: -1px;
`

const Name = styled.h2`
  ${font({weight: 700, Fmax: 38, fMin: 30})}
  letter-spacing: -1px;
  margin: 10px 0;

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