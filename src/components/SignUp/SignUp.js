import React, { useState } from 'react';

import { connect } from 'react-redux'
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signUpStart } from '../../redux/user/user-actions'
import { SignUpContainer, SignUpTitle } from './SignUp-styled'

const SignUp = ({ signUpStart }) => {

    const [userData, setUserData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userData;
    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match. Retry.");
            return;
        }
        signUpStart({ email, password, displayName })
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    }


    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account.</SignUpTitle>
            <span>Create an account with an email and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="displayName"
                    type="text"
                    value={displayName}
                    label="Display Name"
                    onChange={handleChange}
                    required
                />
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    label="Email"
                    onChange={handleChange}
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    label="Password"
                    onChange={handleChange}
                    required
                />
                <FormInput
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    label="Confirm Password"
                    onChange={handleChange}
                    required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </SignUpContainer >
    )

}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCred) => dispatch(signUpStart(userCred))
})

export default connect(null, mapDispatchToProps)(SignUp);