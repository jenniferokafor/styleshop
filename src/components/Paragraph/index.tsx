import styled from "styled-components"

interface Props {
    fontSize?: string
    fontWeight?: number
    mobileFontSize?: string
    color?: string
    marginLeft?: string
    marginTop?: string
    mobileMarginLeft?: string
    mobileMarginTop?: string
    textAlign?: string
}

const Paragraph = styled.p<Props>`
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
    margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
    margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
    text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
`

export default Paragraph
