import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
    title: string
    text: string
    src: string
    TechStock?: string
}


export const Project = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button>View Project</Button>
            </ImageWrapper>

            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <TechStock>Tech Stock: {props.TechStock}</TechStock>
                <Icon iconId={'github'} width={'20px'} height={'20px'} viewBox={'0 0 100 100'}/>
                <a href="#">View Code </a>
            </Description>

        </StyledWork>
    );
};


const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  max-width: 373px;
  max-height: 567px;
  width: 100%;
  border-radius: 20px;
`

const ImageWrapper = styled.div`
    position: relative;
  
  &:hover {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.30);
      backdrop-filter: blur(4px);
    }
    ${Button} {
      opacity: 1;
      border-radius: 83px;
    }
  }
  
  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    &::before {
      width: 100%;
      height: 100%;
      border-radius: 83px;
    }
  }
  
`

const Image = styled.img`
  width: 100%;
  height: 260px;
 // border-radius: 20px 20px 0 0;
`

const Title = styled.h3`

`

const Text = styled.p`
  margin: 14px 0 10px;
`

const TechStock = styled.p`

`

const Description = styled.div`
  padding: 25px 25px;
`

