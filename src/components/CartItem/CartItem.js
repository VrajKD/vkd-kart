import React from 'react';
// import './CartItem.scss'
import { CartItemDetails, CartItemDiv, CartItemImage, CartItemName } from './CartItem-styled'

class CartItem extends React.Component {
    render() {
        const { item: { imageUrl, price, name, quantity } } = this.props;
        return (
            <CartItemDiv>
                <CartItemImage src={imageUrl} alt='item' />
                <CartItemDetails>
                    <CartItemName>{name}</CartItemName>
                    <span>
                        {quantity} x ${price}
                    </span>
                </CartItemDetails>
            </CartItemDiv>

        )
    }
}

export default CartItem;