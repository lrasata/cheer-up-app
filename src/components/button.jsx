import {Button as MuiButton} from "@mui/material";

const Button = ({variant='contained', fullWidth, color='primary', onClick, children}) => {
    return <MuiButton
        variant={variant}
        fullWidth={fullWidth}
        onClick={onClick}
        color={color}
        size='large'
        {...(variant !== 'text' && {
            sx: {
            borderRadius: 3,
            border: 2,
            borderColor: color}
        })}
    >{children}</MuiButton>
}

export default Button;