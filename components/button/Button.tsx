import styled, { DefaultTheme } from "styled-components"
import { ReactNode } from "react"

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

export type ButtonProps<T> = {
    children?: ReactNode;
    className?: string;
    $variant? : VariantProps | string;
    size?: string;
    color?:  ColorProps | string;
    disabled?: boolean;
    type?: string;
    $disableShadow?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    theme?: DefaultTheme;
    onClick?: () => void;
}

export const StyledButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: ${ ({ theme }: ButtonProps) => theme?.fontSize || "14px" };
    color: ${ ({ $variant, color, theme }: ButtonProps) => {
        switch ($variant) {
            case VariantProps.outline:
            case VariantProps.text:
                switch (color) {
                    case "primary":
                        return theme?.palette.primary.main
                    case "secondary":
                        return theme?.palette.secondary.main
                    case "danger":
                        return theme?.palette.danger.main
                    default:
                        return theme?.palette.default.contrastText
                }
            default:
                switch (color) {
                    case "primary":
                        return theme?.palette.primary.contrastText
                    case "secondary":
                        return theme?.palette.secondary.contrastText
                    case "danger":
                        return theme?.palette.danger.contrastText
                    default:
                        return theme?.palette.default.contrastText
                }
    }} };
    background: ${ ({ $variant, color, theme }: ButtonProps) => {
        switch ($variant) {
            case VariantProps.outline:
            case VariantProps.text:
            case VariantProps.link:
                return "transparent"
            default:
                switch (color) {
                    case "primary":
                        return theme?.palette.primary.main
                    case "secondary":
                        return theme?.palette.secondary.main
                    case "danger":
                        return theme?.palette.danger.main
                    default:
                        return theme?.palette.default.main
                }
    }} };
    border: ${ ({ $variant, color, theme }: ButtonProps) => {
        switch ($variant) {
            case VariantProps.outline:
                return `${theme?.borderWidth} ${theme?.borderStyle} ${(() => {
                    switch (color) {
                        case "primary":
                            return theme?.palette.primary.main
                        case "secondary":
                            return theme?.palette.secondary.main
                        case "danger":
                            return theme?.palette.danger.main
                        default:
                            return theme?.palette.default.contrastText
                    }
                })()
            }`;
            default:
                return "none";
        }
    }};
    text-align: center;
    text-decoration: none;
    border-radius: ${ ({ theme }: ButtonProps) => theme?.borderRadius || "6px" };
    box-shadow: ${ ({
        $variant,
        color,
        $disableShadow,
        theme
    }: ButtonProps) =>
        $variant || $disableShadow
        ? "none"
        : `0px 2px 5px 0px ${
            (() => {
                switch (color) {
                    case "primary":
                        return theme?.palette.primary.shadowColor
                    case "secondary":
                        return theme?.palette.secondary.shadowColor
                    case "danger":
                        return theme?.palette.danger.shadowColor
                    default:
                        return theme?.palette.default.shadowColor
                }
            })()
        }`
    };
    padding: ${ ({ size, theme }: ButtonProps) => {
        switch (size) {
            case "sm":
                return theme?.size.sm
            case "lg":
                return theme?.size.lg
            default:
                return theme?.size.md
        }
    }};
    cursor: pointer;
    transition: 0.5s all ease-in-out;

    &:hover, &:focus {
        background-color: ${( { $variant, color, theme }: ButtonProps) => {
            switch ($variant) {
                case VariantProps.outline:
                case VariantProps.text:
                    switch (color) {
                        case "primary":
                            return theme?.palette.primary.outlineHover
                        case "secondary":
                            return theme?.palette.secondary.outlineHover
                        case "danger":
                            return theme?.palette.danger.outlineHover
                        default:
                            return theme?.palette.default.outlineHover
                    }
                default:
                    switch (color) {
                        case "primary":
                            return theme?.palette.primary.colorHover
                        case "secondary":
                            return theme?.palette.secondary.colorHover
                        case "danger":
                            return theme?.palette.danger.colorHover
                        default:
                            return theme?.palette.default.colorHover
                    }
            }
        }};
    }

    &:disabled, &:disabled:hover {
        pointer-events: none;
        color: ${ ({$variant, color, theme }: ButtonProps) => {
            if (color === "default") return theme?.palette.default.disabled
            switch ($variant) {
                case VariantProps.outline:
                case VariantProps.text:
                    switch (color) {
                        case "primary":
                            return theme?.palette.primary.disabled
                        case "secondary":
                            return theme?.palette.secondary.disabled
                        case "danger":
                            return theme?.palette.danger.disabled
                        default:
                            return theme?.palette.default.disabled
                    }
                default:
                    return
            }
        }};
        border-color: ${ ({ $variant, color, theme }: ButtonProps) => {
            if (color === "default") return theme?.palette.default.main
            switch ($variant) {
                case VariantProps.outline:
                    switch (color) {
                        case "primary":
                            return theme?.palette.primary.disabled
                        case "secondary":
                            return theme?.palette.secondary.disabled
                        case "danger":
                            return theme?.palette.danger.disabled
                        default:
                            return theme?.palette.default.main
                    }
                default:
                    return
            }
        }};
        background-color: ${ ({ $variant, color, theme}: ButtonProps) => {
            if ($variant === VariantProps.outline || $variant === VariantProps.text) return "transparent"
            switch (color) {
                case "primary":
                    return theme?.palette.primary.disabled
                case "secondary":
                    return theme?.palette.secondary.disabled
                case "danger":
                    return theme?.palette.danger.disabled
                default:
                    return theme?.palette.default.main
            }
        }};
        box-shadow: none;
    }
`