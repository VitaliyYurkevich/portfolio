import React, {ElementRef, useRef} from 'react';
import styled from "styled-components";
import {SectionsTitle} from "../../../components/SectionsTitle";
import {Button} from "../../../components/Button";
import {MyContainer} from "../../../components/MyContainer";
import {theme} from "../../../styles/Theme";
import {Fade} from "react-awesome-reveal";
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();
        debugger


        if (!form.current) {

            return
        }

        emailjs
            .sendForm('service_hthkzof', 'template_nnt01mg', form.current, {
                publicKey: '_Oq2Znpcmcz37CG9t',
            })
            .then(
                () => {

                    console.log('SUCCESS!');
                },
                (error) => {

                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <StyledContacts id={'contact'}>
            <MyContainer>
                <SectionsTitle>Contact</SectionsTitle>
                <StyledForm ref={form} onSubmit={sendEmail}>
                    <FieldWrapper>
                        <StyledTitle>Name</StyledTitle>
                        <Field placeholder={'name'} name={'name'}/>
                        <StyledTitle>Email</StyledTitle>
                        <Field placeholder={'email'} name={'subject'}/>
                        <StyledTitle>Message</StyledTitle>
                        <Field placeholder={'message'} name={'message'} as={'textarea'}/>

                    </FieldWrapper>
                    <Fade direction={"right"} damping={.1}>
                        <Button type={'submit'}>Send message</Button>
                    </Fade>
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

const StyledTitle = styled.label`
  //background-color: aqua;
  margin-bottom: 8px;

`

