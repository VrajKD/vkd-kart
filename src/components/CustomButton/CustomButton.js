import React from 'react';
// import './CustomButton.scss'
import { CustomButtonStyled } from './CustomButton-styled'

const CustomButton = ({ children, ...otherButtonProps }) => {
    return (
        <CustomButtonStyled {...otherButtonProps}>
            {children}
        </CustomButtonStyled>
    )
}
export default CustomButton;