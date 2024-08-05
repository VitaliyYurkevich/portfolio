import React from 'react';
import styled from "styled-components";
import {IconSvg} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";
import {Link} from "../../../../components/Link";

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
                <IconSvg iconId={'github'} width={'20px'} height={'20px'} viewBox={'0 0 100 100'}/>
                <Link  href="#">View Code </Link>
            </Description>

        </StyledWork>
    );
};


const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
 
  
  //width: 330px;
  
 // flex-grow: 1;
  
  ${Link} {
    padding: 10px 0;
    
    & + ${Link} {
      margin-left: 20px;
    }
  }
  
  @media ${theme.media.desktop} {
    max-width: 540px;
  }
  
`

const ImageWrapper = styled.div`
    position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -35%);
    transition: ${theme.animation.transition};
    &::before {
      width: 100%;
      height: 100%;
      border-radius: 83px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: ${theme.animation.transition};
  }
  
  &:hover {
    &::before {
     opacity: 1;
    }
    ${Button} {
      opacity: 1;
      border-radius: 83px;
      transform: translate(-50%, -50%);
    }
  }
  
  @media ${theme.media.tablet} {
      &::before {
        opacity: 1;
      }
      ${Button} {
        opacity: 1;
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

