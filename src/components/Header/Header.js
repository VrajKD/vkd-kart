import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './Header.scss';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

class Header extends React.Component {
    render() {
        const currentUser = this.props.currentUser;
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
                    {
                        currentUser ?
                            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                            :
                            <Link className="option" to="/signin">SIGN IN</Link>
                    }
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return ({
        currentUser: state.user.currentUser
    })
}

export default connect(mapStatetoProps)(Header);