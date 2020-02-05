import React from 'react';
import { connect } from 'react-redux'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions'
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
// import { auth } from '../../firebase/firebase.utils';
import { SignInContainer, SignInFooterButtons } from './SignIn-styled'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;
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

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                <h2>I already have an account.</h2>
                <span>Enter your email and password : </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);