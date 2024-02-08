import {theme} from "./Theme";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = (props: FontPropsType) => `
 font-family: ${props.family || "Poppins"};
 font-weight: ${props.weight || 400};
 font-color: ${props.color || theme.colors.font};
 font-lineHeight: ${props.lineHeight || 1.2};
 font-size: calc( (100vw - 360px)/(1440 - 360) * (${props.Fmax} - ${props.Fmin}) + ${props.Fmin}px);
`