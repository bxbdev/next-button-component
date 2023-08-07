import { ReactNode } from "react"
import styled, { DefaultTheme } from "styled-components"

export type TitleProps = {
    theme: DefaultTheme
}

const Title = styled.h2<TitleProps>`
    color: ${({ theme }: TitleProps) => theme.textColor };
    font-size: 30px;
`

export  default Title