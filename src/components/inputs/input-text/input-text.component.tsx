import  styled  from "styled-components"

const InputText = styled.input`
    background: ${props => props.theme.pallete.core.whiteBackground};
    border-radius: ${props => props.theme.border.radius[5]};
    width: calc(100% - 16px);
    padding: 8px;
    margin: 0 0 22px;
    border: 0
`

export default InputText
