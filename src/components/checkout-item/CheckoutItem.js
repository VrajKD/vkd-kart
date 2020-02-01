import React from 'react';
// import './CheckoutItem.scss'
import { CheckoutImage, CheckoutImageContainer, CheckoutItemContainer, CheckoutItemRemove, CheckoutItemText, CheckoutQuantityArrow, CheckoutQuantityContainer, CheckoutQuantityValue } from './CheckoutItem-styled';

import { connect } from 'react-redux';
import { clearItem, AddItem, removeItem } from '../../redux/cart/cart-actions';

class CheckoutItem extends React.Component {
    render() {
        const { cartItem, clearItem, AddItem, removeItem } = this.props;
        return (
            <CheckoutItemContainer>
                <CheckoutImageContainer>
                    <CheckoutImage src={cartItem.imageUrl} alt='item' />
                </CheckoutImageContainer>
                <CheckoutItemText>{cartItem.name}</CheckoutItemText>
                <CheckoutQuantityContainer>
                    <CheckoutQuantityArrow onClick={() => removeItem(cartItem)}>&#10094;</CheckoutQuantityArrow>
                    <CheckoutQuantityValue>{cartItem.quantity}</CheckoutQuantityValue>
                    <CheckoutQuantityArrow onClick={() => AddItem(cartItem)}>&#10095;</CheckoutQuantityArrow>
                </CheckoutQuantityContainer>
                <CheckoutItemText>${cartItem.price}</CheckoutItemText>
                <CheckoutItemRemove onClick={() => clearItem(cartItem)}>
                    &#10005;
                </CheckoutItemRemove>
            </CheckoutItemContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    AddItem: item => dispatch(AddItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);