import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg'
// import './Header.scss';
import { HeaderContainer, OptionLink, OptionLinksContainer, LogoContainer } from './Header-styled';
import { selectCartVisible } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import { signOutStart } from '../../redux/user/user-actions'
import CartDropdown from '../CartDropdown/CartDropdown';

class Header extends React.Component {
    render() {
        const { currentUser, signOutStart } = this.props;
        return (
            <HeaderContainer>
                <LogoContainer to="/" >
                    <Logo className="logo" />
                </LogoContainer>
                <OptionLinksContainer>
                    <OptionLink to="/shop">
                        SHOP
                </OptionLink>
                    <OptionLink to="/" >
                        CONTACT
                </OptionLink>
                    {
                        currentUser ?
                            <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                            :
                            <OptionLink className="option" to="/signin">SIGN IN</OptionLink>
                    }
                    <CartIcon />
                </OptionLinksContainer>
                {this.props.visible ? <CartDropdown /> : null}
            </HeaderContainer>
        )
    }
}

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    visible: selectCartVisible
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStatetoProps, mapDispatchToProps)(Header);