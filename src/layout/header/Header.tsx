import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {MyContainer} from "../../components/MyContainer";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {HeaderIcons} from "./headerIcons/HeaderIcons";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {theme} from "../../styles/Theme";


export const Header = () => {
    let items = ['Home', 'Skills', 'Projects', 'Contact']

    return (
        <StyledHeader>
            <MyContainer>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <WrapperIcon>
                    <Logo/>
                    </WrapperIcon>
                    <HeaderMenu item={items}/>

                        <MobileMenu item={items}/>

                        <HeaderIcons/>
                    <Logo/>
                    <HeaderMenu item={items}/>
                    <HeaderIcons/>
                </FlexWrapper>
            </MyContainer>
        </StyledHeader>
    );
};


export const StyledHeader = styled.header`
  background: rgb(4, 31, 49, 0.9);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  //min-height: 100px;

`

export const WrapperIcon = styled.div`


  @media ${theme.media.mobile} {

  }
`