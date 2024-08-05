import React from 'react';
import styled from "styled-components";
import {SectionsTitle} from "../../../components/SectionsTitle";
import {Button} from "../../../components/Button";
import {MyContainer} from "../../../components/MyContainer";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Fade} from "react-awesome-reveal";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <MyContainer>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionsTitle>I Am Available For Freelance</SectionsTitle>
                    <Fade direction={"right"} damping={.1}>
                    <Button>Hire me</Button>
                    </Fade>
                </FlexWrapper>
            </MyContainer>
        </StyledSlogan>
    );
};


const StyledSlogan = styled.section`
  background-color: coral;
  min-height: 30vh;
  
  
`

