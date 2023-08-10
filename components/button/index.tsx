import {
    StyledButton,
    ColorType,
    ButtonProps,
    VariantType,
    Type,
    SizeType
}  from './Button'

export { type ButtonProps, VariantType, ColorType, Type, SizeType }

const Button = (props: ButtonProps) => {
    const { startIcon, endIcon, children, ...rest } = props
    return <StyledButton {...rest}>{startIcon}{children}{endIcon}</StyledButton>
}

export default Button