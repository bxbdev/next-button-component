import {
    StyledButton,
    ColorProps,
    ButtonProps,
    VariantProps,
    TypeProps,
    SizeProps
}  from './Button'

export { type ButtonProps, VariantProps, ColorProps, TypeProps, SizeProps }

const Button = (props: ButtonProps) => {
    return <StyledButton {...props}>{props.startIcon}{props.children}{props.endIcon}</StyledButton>
}

export default Button