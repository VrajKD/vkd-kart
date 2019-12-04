import React from 'react';
import './LoginRegister.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

class LoginRegister extends React.Component {
    render() {
        return (
            <div className="login-register">
                <SignIn />
                <SignUp />
            </div>
        )
    }
}

export default LoginRegister;