import styled, { DefaultTheme } from "styled-components"
import { ReactNode } from "react"
import type { ThemeType } from "../themes";

export enum SizeType {
    sm = "sm",
    md = "md",
    lg = "lg",
}

export enum BorderStyleType {
    solid = "solid",
    dashed = "dashed",
    double = "double",
    dotted = "dotted",
    outset = "outset",
    groove = "groove",
    none = "none",
    ridge = "ridge",
    inset = "inset"
}

export enum VariantType {
    text = "text",
    outline = "outline",
    link = "link",
    contained = "contained",
}

export enum Type {
    button = "button",
    image = "image",
    reset = "reset",
    submit = "submit"
}

export enum ColorType {
    default = "default",
    primary = "primary",
    secondary = "secondary",
    danger = "danger"
}

export type ButtonProps = {
    children?: ReactNode;
    className?: string;
    $variant? : VariantType | string;
    size?: SizeType;
    color?:  ColorType | string;
    disabled?: boolean;
    type?: string;
    $disableShadow?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    theme?: DefaultTheme;
    $active?: boolean;
    onClick?: () => void;
}


export const StyledButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: ${ ({ theme }: ButtonProps) => theme?.fontSize || "14px" };
    color: ${ ({ $variant = "contained", $active, color = "default", theme }: ButtonProps) => {
        if ($variant === "text") return theme?.palette.default.text?.contrastText
        if ($variant === "outline") return theme?.palette[color].outline?.contrastText
        if ($active) return theme?.palette[color].active.contrastText
        return theme?.palette[color].contrastText
    } };
    background-color: ${ ({ $variant = "contained", $active, color = "default", theme }: ButtonProps) => {
        if ($variant !== "contained") return "transparent"
        if ($active) return theme?.palette[color].active.main
        return theme?.palette[color].main
    }};
    border: ${ ({ $variant = "contained", color = "default", theme }: ButtonProps) => {
        if ($variant === VariantType.outline) {
            return `
                ${theme?.borderWidth}
                ${theme?.borderStyle}
                ${theme?.palette[color].outline?.borderColor}`
        }
        return "none"
    }};
    text-align: center;
    text-decoration: none;
    border-radius: ${ ({ theme }: ButtonProps) => theme?.borderRadius || "6px" };
    box-shadow: ${ ({
        $variant = "contained",
        color = "default",
        $disableShadow,
        theme
    }: ButtonProps) =>
        $variant !== "contained" || $disableShadow
        ? "none"
        : `0px 2px 5px 0px ${theme?.palette[color].shadowColor
        }`
    };
    padding: ${ ({ size = "md", theme }: ButtonProps) => {
        return theme?.size[size]
    }};
    cursor: pointer;
    transition: 0.5s all ease-in-out;

    &:hover {
        background-color: ${( { $variant = "contained", color = "default", theme }: ButtonProps) => {
            if ($variant === "contained") return theme?.palette[color].hover.main
            if ($variant === "text" || $variant === "outline") return theme?.palette[color].hover[$variant].main
        }};
    }

    &:disabled, &:disabled:hover {
        pointer-events: none;
        color: ${ ({$variant="contained", color="default", theme }: ButtonProps) => {
            if ($variant !== "contained")
                return theme?.palette[color].disabled[$variant].contrastText
            return theme?.palette[color].disabled.contrastText
        }};
        border-color: ${ ({ $variant, color="default", theme }: ButtonProps) => {
            return theme?.palette[color].disabled.borderColor
        }};
        background-color: ${ ({ $variant="contained", color="default", theme}: ButtonProps) => {
            if ($variant === "contained") return theme?.palette[color].disabled.main
        }};
        box-shadow: none;
    }
`