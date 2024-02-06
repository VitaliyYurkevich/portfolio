import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type MenuPropsType = {
    item: Array<string>
}

export const HeaderMenu = (props: MenuPropsType) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.item.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href=''>
                                {item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            </Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledHeaderMenu>
    );
};


export const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  
  @media ${theme.media.mobile} {
    display: none;
  }
`


const Link = styled.a`
  //color: var(--text, #BDEBEA);
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: transparent;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${theme.colors.white};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.accent};
    
    position: absolute;
    top: 50%;
    left: -8px;
    right: -8px;
    z-index: 1;
    
    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
    
    
    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.grey};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`