import React from 'react';
import './CheckoutItem.scss'

import { connect } from 'react-redux';
import { clearItem, AddItem, removeItem } from '../../redux/cart/cart-actions';

class CheckoutItem extends React.Component {
    render() {
        const { cartItem, clearItem, AddItem, removeItem } = this.props;
        return (
            <div className="checkout-item">
                <div className="image-container">
                    <img src={cartItem.imageUrl} alt='item' />
                </div>
                <span className="name">{cartItem.name}</span>
                <span className="quantity">
                    <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                    <span className="value">{cartItem.quantity}</span>
                    <div className="arrow" onClick={() => AddItem(cartItem)}>&#10095;</div>
                </span>
                <span className="price">₹{cartItem.price}</span>
                <div className="remove-button" onClick={() => clearItem(cartItem)}>
                    &#10005;
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    AddItem: item => dispatch(AddItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);