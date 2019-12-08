import React from 'react';
import CustomButton from '../CustomButton/CustomButton'
import { connect } from 'react-redux';
import './CartDropdown.scss'
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { ToggleCartDisplay } from '../../redux/cart/cart-actions'

class CartDropdown extends React.Component {
    render() {
        return (
            <div className="cart-dropdown">
                <div className="cart-items">
                    {
                        this.props.cartItems.length > 0 ?
                            this.props.cartItems.map(cartItem => (
                                <CartItem key={cartItem.id} item={cartItem} />
                            )
                            ) : <span className="empty-cart">Your cart is empty</span>
                    }
                </div>
                <CustomButton onClick={() => {
                    this.props.history.push("/checkout");
                    this.props.dispatch(ToggleCartDisplay());
                }}>GO TO CHECKOUT</CustomButton>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));