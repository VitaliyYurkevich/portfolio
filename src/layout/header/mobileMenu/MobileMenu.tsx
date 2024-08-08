import React, {useMemo, useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

type ArrayMenuPropsType = {
    title: string
    href: string
}

type MenuPropsType = {
    item: Array<ArrayMenuPropsType>
}

export const MobileMenu = (props: MenuPropsType) => {

    const [Open, setOpen] = useState(false)

    const HandlerIsOpen = () => {
        setOpen(!Open)
    }

    return (
        <StyledMobileMenu>

            <BurgerButton onClick={HandlerIsOpen} isOpen={Open}   >
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={Open} onClick={()=> setOpen(false)}>
                <ul>
                    {props.item.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <NavLink to={item.href}
                                         spy={true}
                                         smooth={true}
                                         activeClass="active"
                                >
                                    {item.title}
                                    <Mask>
                                        <span>{item.title}</span>
                                    </Mask>
                                    <Mask>
                                        <span>{item.title}</span>
                                    </Mask>
                                </NavLink>
                            </ListItem>
                        )
                    })}
                </ul>
            </MobileMenuPopup>

        </StyledMobileMenu>
    );
};


export const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.mobile} {
    display: block;
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(31, 31, 32, 0.9);
 
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 1s ease-in-out;

  
  
  ul {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: .5s ease-in-out;
  }

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
    ul{
      gap: 60px;
      transition: 2s ease-in-out;
    }
  `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999;
  //margin-right: 80px;
  
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
    `}
      
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);
      
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
    `}
    }

  }

`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  //overflow-y: hidden;
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
    transition: ${theme.animation.transition} ;
  }

  &:hover, &.active {
    &::before {
      transform: scale(1);
      transition: .4s ease-in-out;
    }
    
    ${Mask} {
      //transform: skewX(12deg) translateX(5px);
     // color: ${theme.colors.grey};
      color: ${theme.colors.white};
      text-shadow: aqua 1px 0 4px, aqua 2px 0 8px, aqua 3px 0 16px, aqua 4px 0 20px  ;
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