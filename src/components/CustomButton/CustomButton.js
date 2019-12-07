import React from 'react';
import './CustomButton.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherButtonProps }) => {
    console.log(inverted);
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-signin' : ''} custom-button`} {...otherButtonProps}>
            {children}
        </button>
    )
}
export default CustomButton;