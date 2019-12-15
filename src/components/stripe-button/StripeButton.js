import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

class StripeButton extends React.Component {

    onToken = token => {
        console.log(token);
        alert("Payment successful. Happy Shopping");
    }

    render() {
        const { price } = this.props;
        const priceForStripe = price * 100;
        const publishKey = 'pk_test_2k6uiYZcfRx9x0v77RAnUFJx00qGW8djHK';

        const onToken = token => {
            console.log(token);
            alert("Payment successful. Happy Shopping");
        }

        return (<StripeCheckout
            shippingAddress
            billingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            name="VKD - Kart Pvt. Ltd."
            panelLabel="Pay "
            description={`Your total cost is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishKey}
        />
        )
    }
}

export default StripeButton