import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Link} from "../../../../components/Link";
import {TabsItemsType} from "../Projects";

type MenuPropsType = {
    tabsItems: Array<{ status: TabsItemsType, title: string }>
    changeFilterStatus: (value: TabsItemsType) => void
    currentFilterStatus: TabsItemsType
}

export const TabMenu = (props: MenuPropsType) => {


    return (
        <StyledMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link active={props.currentFilterStatus === item.status}
                                as={'button'}
                                  onClick={() => props.changeFilterStatus(item.status)}>{item.title}</Link>
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
   // border: 1px solid red;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li`
  //position: relative;
  // z-index: 0;
  
`
