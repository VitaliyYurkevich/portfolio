import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

type ArrayMenuPropsType = {
    title: string
    href: string
}

type MenuPropsType = {
    item: Array<ArrayMenuPropsType>
}

export const HeaderMenu = (props: MenuPropsType) => {

    return (
        <StyledHeaderMenu>
            <ul>
                {props.item.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <NavLink to={item.href}
                                     spy={true}
                                     smooth={true}
                                     activeClass="active"
                                     offset={-150}
                                >
                                {item.title}
                                <Mask>
                                    <span>{item.title}</span>
                                </Mask>
                                {/*<Mask>
                                    <span>{item.title}</span>
                                </Mask>*/}
                            </NavLink>
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
    gap: 80px;
    justify-content: center;
  }
  
  @media ${theme.media.tablet} {
    
   ul{
     gap: 30px;
   }
    
  }
  
  @media ${theme.media.mobile} {
    display: none;
  }
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
//  overflow-y: hidden;
  color: ${theme.colors.white};
  transition: ${theme.animation.transition} ;
  
  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const NavLink = styled(Link)`
  //color: var(--text, #BDEBEA);
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: transparent;


  &::before {
    content: '';
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 100%;
    left: -8px;
    right: -8px;
    z-index: 1;

    transform: scale(0);
    transition: ${theme.animation.transition};
  }

  &:hover, &.active {
    &::before {
      transform: scale(1);
      transition: .4s ease-in-out;
    }


    ${Mask} {
      // transform: skewX(12deg) translateX(5px);

      color: ${theme.colors.white};
      text-shadow: aqua 0 0 4px, aqua 0 0 8px, aqua 0 0 16px, aqua 0 0 20px;
      transition: .2s ease-in-out;

      & + ${Mask} {
        //transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`




const ListItem = styled.li`
  position: relative;
`