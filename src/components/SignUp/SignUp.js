import React from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { createUserProfileDoc, auth } from '../../firebase/firebase.utils'
// import './SignUp.scss';

import { SignUpContainer, SignUpTitle } from './SignUp-styled'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match. Retry.");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDoc(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch (err) {
            console.log("error ! : ", err);
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <SignUpTitle>I do not have an account.</SignUpTitle>
                <span>Create an account with an email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        value={displayName}
                        label="Display Name"
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        value={email}
                        label="Email"
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={password}
                        label="Password"
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        label="Confirm Password"
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </SignUpContainer >
        )
    }
}

export default SignUp;