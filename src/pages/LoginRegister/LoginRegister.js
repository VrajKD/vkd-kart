import React from 'react';
import './LoginRegister.scss';
import SignIn from '../../components/SignIn/SignIn';

class LoginRegister extends React.Component {
    render() {
        return (
            <div className="sign-in">
                <SignIn/>
            </div>
        )
    }
}

export default LoginRegister;