import React from 'react';
import styled from "styled-components";
import iconsSprite from "../../assets/images/icons-sprite.svg";
import {Link} from "react-scroll";
import {animateScroll as scroll} from "react-scroll";
import {theme} from "../../styles/Theme";


export const Logo = () => {

    const svgArray = [
        {zIndex: 2, width: '47px', height: '48px', viewBox: '0 0 47 48', link: 'ellipse'},
        {zIndex: 4, width: '25px', height: '26px', viewBox: '0 0 25 26', link: 'ellipse3'},
        {zIndex: 6, width: '9px', height: '10px', viewBox: '0 0 9 10', link: 'ellipse5'},
        {zIndex: 8, width: '1px', height: '2px', viewBox: '0 0 1 2', link: 'ellipse7'},
    ]

    const svgArray2 = [
        {zIndex: 3, width: '35px', height: '35px', viewBox: '0 0 35 35', link: 'ellipse2'},
        {zIndex: 5, width: '17px', height: '18px', viewBox: '0 0 17 18', link: 'ellipse4'},
        {zIndex: 7, width: '5px', height: '6px', viewBox: '0 0 5 6', link: 'ellipse6'},
    ]

    return (

            <StyledA
                to={'home'}

                onClick={() => {
                    scroll.scrollToTop()
                }}
            >
                {svgArray.map((s) => {
                    return (
                        <StyledSvg style={{zIndex: s.zIndex,}} width={s.width} height={s.height} viewBox={s.viewBox}>
                            <use xlinkHref={`${iconsSprite}#${s.link}`}/>
                        </StyledSvg>
                    )
                })}
                {svgArray2.map((s) => {
                    return (
                        <StyledSvg2 style={{zIndex: s.zIndex,}} width={s.width} height={s.height} viewBox={s.viewBox}>
                            <use xlinkHref={`${iconsSprite}#${s.link}`}/>
                        </StyledSvg2>
                    )
                })}
            </StyledA>

    );
};
//xmlns={"http://www.w3.org/2000/svg"
const StyledDiv = styled.div`
  /* display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
   //background-color: aqua;
   width: 50px;
   height: 50px;*/

`

const StyledA = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  //background-color: aqua;
  width: 50px;
  height: 50px;
  
  
`
const StyledSvg = styled.svg`
  position: absolute;
  animation: a 5s linear 0s infinite reverse;
  
  @keyframes a {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

 
`

const StyledSvg2 = styled.svg`
  position: absolute;
  animation: a 5s linear 0s infinite;
  
  @keyframes a {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  
`


//                 <Icon iconId={'ts'} width={'98'}/>
//                 <Icon iconId={'html'}/>
//                 <Icon iconId={'css'}/>
//                 <Icon iconId={'redux'} width={'98'}/>
//                 <Icon iconId={'react'}/>
//                 <Icon iconId={'git'}/>
//                 <Icon iconId={'github'}/>
//                 <Icon iconId={'styledComponents'} width={'98'}/>
