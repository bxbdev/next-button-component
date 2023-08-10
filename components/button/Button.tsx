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
    size?: SizeType | string;
    color?:  ColorType | string;
    disabled?: boolean;
    type?: string;
    $disableShadow?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    theme?: ThemeType;
    $active?: boolean;
    onClick?: () => void;
}

export const StyledButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: ${ ({ theme }: ButtonProps) => theme?.fontSize || "14px" };
    color: ${ ({ $variant = VariantType.contained, $active, color = ColorType.default, theme }: ButtonProps) => {
        if ($variant === VariantType.text) return theme?.palette.default.text?.contrastText
        if ($variant === VariantType.outline) return theme?.palette[color].outline?.contrastText
        if ($active) return theme?.palette[color].active.contrastText
        return theme?.palette[color].contrastText
    } };
    background-color: ${ ({ $variant = VariantType.contained, $active, color = ColorType.default, theme }: ButtonProps) => {
        if ($variant !== VariantType.contained) return "transparent"
        if ($active) return theme?.palette[color].active.main
        return theme?.palette[color].main
    }};
    border: ${ ({ $variant = VariantType.contained, color = ColorType.default, theme }: ButtonProps) => {
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
        $variant = VariantType.contained,
        color = ColorType.default,
        $disableShadow,
        theme
    }: ButtonProps) =>
        $variant !== VariantType.contained || $disableShadow
        ? "none"
        : `0px 2px 5px 0px ${theme?.palette[color].shadowColor
        }`
    };
    padding: ${ ({ size = SizeType.md, theme }: ButtonProps) => {
        return theme?.size[size]
    }};
    cursor: pointer;
    transition: 0.5s all ease-in-out;

    &:hover {
        background-color: ${( { $variant = VariantType.contained, color = ColorType.default, theme }: ButtonProps) => {
            if ($variant === VariantType.contained) return theme?.palette[color].hover.main
            if ($variant === VariantType.text || VariantType.outline) return theme?.palette[color].hover[$variant].main
        }};
    }

    &:disabled, &:disabled:hover {
        pointer-events: none;
        color: ${ ({$variant = VariantType.contained, color = ColorType.default, theme }: ButtonProps) => {
            if ($variant !== VariantType.contained)
                return theme?.palette[color].disabled[$variant].contrastText
            return theme?.palette[color].disabled.contrastText
        }};
        border-color: ${ ({ color = ColorType.default, theme }: ButtonProps) => {
            return theme?.palette[color].disabled.borderColor
        }};
        background-color: ${ ({ $variant = VariantType.contained, color = ColorType.default, theme}: ButtonProps) => {
            if ($variant === VariantType.contained) return theme?.palette[color].disabled.main
        }};
        box-shadow: none;
    }
`