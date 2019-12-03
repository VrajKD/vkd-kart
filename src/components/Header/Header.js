import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './Header.scss'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Link to="/" className="logo-container" >
                    <Logo className="logo" />
                </Link>
                <div className="option-links">
                    <Link to="/shop" className="option" >
                        SHOP
                </Link>
                    <Link to="/" className="option" >
                        CONTACT
                </Link>
                    <Link to="/signin" className="option" >
                        SIGN IN
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header;