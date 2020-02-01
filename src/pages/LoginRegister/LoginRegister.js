import React from 'react';
// import './LoginRegister.scss';
import { LoginRegisterContainer } from './LoginRegister-styled'
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

class LoginRegister extends React.Component {
    render() {
        return (
            <LoginRegisterContainer>
                <SignIn />
                <SignUp />
            </LoginRegisterContainer>
        )
    }
}

export default LoginRegister;