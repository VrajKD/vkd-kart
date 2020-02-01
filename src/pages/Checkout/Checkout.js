import React from 'react';
// import './Checkout.scss'
import { CheckoutHeaderBlock, CheckoutHeaderContainer, CheckoutPageContainer, CheckoutTotal, StripeTestText } from './Checkout-styled'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';

class Checkout extends React.Component {
    render() {
        const { cartItems, total } = this.props;
        return (
            <CheckoutPageContainer>
                <CheckoutHeaderContainer>
                    <CheckoutHeaderBlock>
                        <span>Product</span>
                    </CheckoutHeaderBlock>
                    <CheckoutHeaderBlock>
                        <span>Description</span>
                    </CheckoutHeaderBlock>
                    <CheckoutHeaderBlock>
                        <span>Quantity</span>
                    </CheckoutHeaderBlock>
                    <CheckoutHeaderBlock>
                        <span>Price</span>
                    </CheckoutHeaderBlock>
                    <CheckoutHeaderBlock>
                        <span>Remove</span>
                    </CheckoutHeaderBlock>
                </CheckoutHeaderContainer>
                {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}

                <CheckoutTotal>
                    <span>TOTAL: ${total}</span>
                </CheckoutTotal>

                <StripeButton price={total} />

                <StripeTestText>
                    Please use the following test card details for payment :<br />
                    Card No : 4242 4242 4242 4242<hr />
                    Expiry : 01/20<hr />
                    CVV : 123 <hr />
                </StripeTestText>
            </CheckoutPageContainer>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);