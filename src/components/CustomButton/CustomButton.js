import React from 'react';
import './CustomButton.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherButtonProps }) => (
    <button className={`${isGoogleSignIn ? 'google-signin' : ''} ${inverted ? 'inverted' : ''} custom-button`} {...otherButtonProps}>
        {children}
    </button>
)

export default CustomButton;