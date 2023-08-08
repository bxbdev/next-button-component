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
    const { startIcon, endIcon, children, ...rest } = props
    return <StyledButton {...rest}>{startIcon}{children}{endIcon}</StyledButton>
}

export default Button