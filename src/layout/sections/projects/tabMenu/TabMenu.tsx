import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Link} from "../../../../components/Link";

type MenuPropsType = {
    item: Array<string>
}

export const TabMenu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.item.map((title, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href='src/layout/sections/projects/tabMenu/TabMenu.tsx'>{title}</Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledMenu>
    );
};


export const StyledMenu = styled.nav`
  
  
  
  ul {
    display: flex;
    //gap: 20px;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    border: 1px solid red;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li`
  //position: relative;
  // z-index: 0;
`
