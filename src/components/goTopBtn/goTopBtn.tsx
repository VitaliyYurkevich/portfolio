import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {IconSvg} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {

    const [viewBtn, setViewBtn] = useState(false)


    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 250) {
                setViewBtn(true)
            } else {
                setViewBtn(false)
            }
        })
    })

    return (
        <>
            { viewBtn && <StyledGotopBtn onClick={() => {
                scroll.scrollToTop()
            }}>
                <IconSvg iconId={'iconGoTop'} viewBox={'0 0 30 30'} height={'30'} width={'30'}/>
            </StyledGotopBtn>
                }
        </>
        )
};


const StyledGotopBtn = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  
`