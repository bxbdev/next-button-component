import styled, { DefaultTheme } from "styled-components"
import { ReactNode } from "react";

export enum SizeProps {
    sm = "sm",
    md = "md",
    lg = "lg",
}

export enum BorderStyleProps {
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

export enum VariantProps {
    text = "text",
    outline = "outline",
    link = "link",
    contained = "contained",
}

export enum TypeProps {
    button = "button",
    image = "image",
    reset = "reset",
    submit = "submit"
}

export enum ColorProps {
    default = "default",
    primary = "primary",
    secondary = "secondary",
    danger = "danger"
}

export type ButtonProps = {
    children?: ReactNode;
    className?: string;
    variant? : VariantProps | string;
    size?: string;
    color?:  ColorProps | string;
    disabled?: boolean;
    type?: string;
    disableShadow?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    theme: DefaultTheme;
    onClick?: () => void;
}

export const StyledButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: ${ ({ theme }: ButtonProps) => theme.fontSize || "14px" };
    color: ${ ({ variant, color, theme }: ButtonProps) => {
        switch (variant) {
            case VariantProps.outline:
            case VariantProps.text:
                return `rgb(${
                    color ? (
                        color !== "default"
                        ? theme.palette[color].main
                        : theme.palette[color].contrastText
                    )
                    : theme.palette.default.contrastText})`
            default:
                return `rgb(${color ? theme.palette[color].contrastText : theme.palette.default.contrastText})`
    }} };
    background: ${ ({ variant, color, theme }: ButtonProps) => {
        switch (variant) {
            case VariantProps.outline:
            case VariantProps.text:
            case VariantProps.link:
                return "transparent"
            default:
                return `rgb(${color ? theme.palette[color].main : theme.palette.default.main})`
        }
    } };
    border: ${ ({ variant, color, theme }: ButtonProps) => {
        switch (variant) {
            case VariantProps.outline:
                return `${theme.borderWidth} ${theme.borderStyle} rgb(${
                    color ? (
                        color !== "default"
                        ? theme.palette[color].main
                        : theme.palette[color].contrastText
                    )
                    : theme.palette.default.contrastText })`;
            default:
                return "none";
        }
    }};
    text-align: center;
    text-decoration: none;
    border-radius: ${ ({ theme }: ButtonProps) => theme.borderRadius || "6px" };
    box-shadow: ${ ({
        variant,
        color,
        disableShadow,
        theme
    }: ButtonProps) =>
        variant || disableShadow
        ? "none"
        : `0px 2px 5px 0px rgba(${
            color
            ? theme.palette[color].shadowColor
            : theme.palette.default.shadowColor
        } , 0.4)`
    };
    padding: ${ ({ size, theme }: ButtonProps) => theme.size[size] || "8px 16px"};
    cursor: pointer;
    transition: 0.5s all ease-in-out;

    &:hover, &:focus {
        background-color: ${( { variant, color, theme }: ButtonProps) => {
            switch (variant) {
                case VariantProps.outline:
                case VariantProps.text:
                    return `rgba(${
                        color
                        ? theme.palette[color].outlineColorHover
                        : theme.palette.default.outlineColorHover
                    }, 0.1)`;
                default:
                    return `rgb(${
                        color
                        ? theme.palette[color].hoverColor
                        : theme.palette.default.hoverColor
                    })`
            }
        }
        };
    }

    &:disabled, &:disabled:hover {
        pointer-events: none;
        color: ${ ({variant, color, theme, disabled }: ButtonProps) => {
            if (!color) return `rgb(${theme.palette.default.disabled})`
            switch (variant) {
                case VariantProps.outline:
                    return color
                            ? `rgba(${theme.palette[color].disabled}, 0.5)`
                            : `rgb(${theme.palette.default.main})`
                case VariantProps.text:
                    return color
                            ? `rgba(${theme.palette[color].disabled}, 0.5)`
                            : `rgb(${theme.palette.default.disabled})`
                default:
                    return color === "default" && `rgb(${theme.palette.default.disabled})`
            }
        }};
        border-color: ${ ({ variant, color, theme }: ButtonProps) => {
            switch (variant) {
                case VariantProps.outline:
                    return `rgba(${
                        color
                        ? theme.palette[color].disabled
                        : theme.palette.default.disabled
                    }, 0.4)`
                default:
                    return
            }
        }};
        background-color: ${ ({ variant, color, theme}: ButtonProps) => {
                if (variant === VariantProps.outline || variant === VariantProps.text) return "transparent"
                return color
                        ? color === "default" ? `rgba(${theme.palette[color].main})` : `rgba(${theme.palette[color].disabled}, 0.5)`
                        : `rgba(${theme.palette.default.main}, 0.5)`
                }
        };
        box-shadow: none;
    }
`