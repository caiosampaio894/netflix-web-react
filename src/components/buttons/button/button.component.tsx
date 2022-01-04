import styled, {css} from "styled-components"

const Primary = css`
    background: ${props => props.theme.pallete.core.primary};
    color: ${props => props.theme.pallete.tipography.primary}
`


const Hover = css`
    &:hover {
        background: ${props => props.theme.pallete.core.primaryHover};
    }
`

const Button = styled.a<any>`
    text-align: center;
    display: inline-block;
    border-radius: 5px;
    padding: 5px;
    width: 321px;
    background: ${props => props.theme.pallete.core.primary};
    color: ${props => props.theme.pallete.tipography.primary};
    transition: ${props => props.theme.animation.primary};
    border-radius: ${props => props.theme.border.radius[5]};
    text-align: center




    ${props => props.primary && Primary}

    ${Hover}
` 

export default Button