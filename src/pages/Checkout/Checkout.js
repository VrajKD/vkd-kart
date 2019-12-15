import React from 'react';
import './Checkout.scss'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';

class Checkout extends React.Component {
    render() {
        const { cartItems, total } = this.props;
        return (
            <div className="checkout-page">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block last-header">
                        <span>Remove</span>
                    </div>
                </div>
                {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}

                <div className="total">
                    <span>TOTAL: ${total}</span>
                </div>

                <StripeButton price={total} />

                <div className="stripe-test">
                    Please use the following test card details for payment :<br />
                    Card No : 4242 4242 4242 4242<hr />
                    Expiry : 01/20<hr />
                    CVV : 123 <hr />
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);