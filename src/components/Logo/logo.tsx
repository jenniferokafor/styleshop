import React from "react"
import styled from "styled-components"

interface Props {
    fontSize?: string
    mobileFontSize?: string
    color?: string
    marginLeft?: string
    mobileMarginLeft?: string
}

const Logo: React.FC<Props> = ({
    fontSize,
    mobileFontSize,
    color,
    marginLeft,
    mobileMarginLeft,
}) => {
    const StyledLogo = styled.h1<Props>`
        font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};
        color: ${(props) => (props.color ? props.color : "#2d2d2d")};
        margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};

        @media screen and (max-width: 31.25rem) {
            margin-left: ${(props) =>
                props.mobileMarginLeft ? props.mobileMarginLeft : 0};
            font-size: ${(props) =>
                props.mobileFontSize ? props.mobileFontSize : "1.2rem"};
        }
    `
    return (
        <StyledLogo
            fontSize={fontSize}
            mobileFontSize={mobileFontSize}
            color={color}
            marginLeft={marginLeft}
            mobileMarginLeft={mobileMarginLeft}
        >
            Style Shop
        </StyledLogo>
    )
}

export default Logo
