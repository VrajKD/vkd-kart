import React from 'react';
import CustomButton from '../CustomButton/CustomButton'
import { connect } from 'react-redux';
// import './CartDropdown.scss'
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { ToggleCartDisplay } from '../../redux/cart/cart-actions'

import { CartDropdownContainer, CartItemContainer, EmptyCartText } from './CartDropdown-styled'

class CartDropdown extends React.Component {
    render() {
        return (
            <CartDropdownContainer>
                <CartItemContainer>
                    {
                        this.props.cartItems.length > 0 ?
                            this.props.cartItems.map(cartItem => (
                                <CartItem key={cartItem.id} item={cartItem} />
                            )
                            ) : <EmptyCartText>Your cart is empty</EmptyCartText>
                    }
                </CartItemContainer>
                <CustomButton onClick={() => {
                    this.props.history.push("/checkout");
                    this.props.dispatch(ToggleCartDisplay());
                }}>GO TO CHECKOUT</CustomButton>
            </CartDropdownContainer>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));