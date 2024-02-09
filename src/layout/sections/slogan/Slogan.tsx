import React from 'react';
import styled from "styled-components";
import {SectionsTitle} from "../../../components/SectionsTitle";
import {Button} from "../../../components/Button";
import {MyContainer} from "../../../components/MyContainer";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <MyContainer>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionsTitle>I Am Available For Freelance</SectionsTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </MyContainer>
        </StyledSlogan>
    );
};


const StyledSlogan = styled.section`
  background-color: coral;
  min-height: 30vh;
  
  
`

