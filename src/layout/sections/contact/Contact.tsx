import React from 'react';
import styled from "styled-components";
import {SectionsTitle} from "../../../components/SectionsTitle";
import {Button} from "../../../components/Button";
import {MyContainer} from "../../../components/MyContainer";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContacts id={'contact'}>
            <MyContainer>
                <SectionsTitle>Contact</SectionsTitle>
                <StyledForm>
                    <FieldWrapper>
                        <StyledTitle>Name</StyledTitle>
                        <Field placeholder={'name'}/>
                        <StyledTitle>Email</StyledTitle>
                        <Field placeholder={'subject'}/>
                        <StyledTitle>Message</StyledTitle>
                        <Field  placeholder={'message'} as={'textarea'}/>
                    </FieldWrapper>
                        <Button type={'submit'}>Send message</Button>
                </StyledForm>
            </MyContainer>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
position: relative;
 
`

const StyledForm = styled.form`
  max-width: 445px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  
  textarea {
    resize: none;
    height: 190px;
    
  }
`

const Field = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #E8ECF4;
  background-color: var(--bg-white, #FFF);
  margin-bottom: 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  //color: white;
  padding: 7px 15px;
  
  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 1px solid #E8ECF4;
    
  }
`

const FieldWrapper = styled.div`
  width: 100%;
`

const StyledTitle = styled.div`
  //background-color: aqua;
  margin-bottom: 8px;
  
`

