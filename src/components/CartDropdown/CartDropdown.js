import React from 'react';
import CustomButton from '../CustomButton/CustomButton'
import { connect } from 'react-redux';
import './CartDropdown.scss'
import CartItem from '../CartItem/CartItem';

class CartDropdown extends React.Component {
    render() {
        return (
            <div className="cart-dropdown">
                <div className="cart-items">
                    {
                        this.props.cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        )
                        )}
                </div>
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        )
    }
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
})

export default connect(mapStateToProps)(CartDropdown);