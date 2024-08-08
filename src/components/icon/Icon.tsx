import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'
import styled, {css} from "styled-components";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    pathD?: string
    pathD2?: string
    pathD3?: string
}


export const IconSvg = (props: IconPropsType) => {


    return (
        <StyledSvg width={props.width || '120'} height={props.height || '119'}
             viewBox={props.viewBox || '0 0 120 119'} fill={'none'} xmlns={"http://www.w3.org/2000/svg"}

        >
            <use fill={'red'} xlinkHref={`${iconsSprite}#${props.iconId}`}/>
            <path
                d={props.pathD}
            />
            <path d={props.pathD2} />
            <path d={props.pathD3} />


        </StyledSvg>
    );
};


const StyledSvg = styled.svg`
  &:hover {
    path {
      fill: aqua;
    }
  }
`


const StyledPath = styled.path<{ d?: string, fill?: string }>`
    /*&:hover {
    ${(props) => {
    if (props.d) {
      return css`
        fill: ${props.fill}
      `
    }
  }
  }
  }*/
`

