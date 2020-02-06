import React, { useState } from 'react';
import { connect } from 'react-redux'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions'
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
// import { auth } from '../../firebase/firebase.utils';
import { SignInContainer, SignInFooterButtons } from './SignIn-styled'


const SignIn = ({ googleSignInStart, emailSignInStart }) => {
    const [userCred, setUserCred] = useState({ email: '', password: '' })


    const { email, password } = userCred;
    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password)

        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({
        //         email: '',
        //         password: ''
        //     });

        // }
        // catch (err) {
        //     console.log("Error while signing in with email and pwd!-- ", err)
        // }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCred({ ...userCred, [name]: value });
    }

    return (
        <SignInContainer>
            <h2>I already have an account.</h2>
            <span>Enter your email and password : </span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required />
                <SignInFooterButtons>
                    <CustomButton type="submit">Submit Form</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn={true}>Sign In With Google</CustomButton>
                </SignInFooterButtons>
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);