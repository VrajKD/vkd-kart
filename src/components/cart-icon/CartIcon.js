import React from 'react';

// import './CartIcon.scss'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'
import { connect } from 'react-redux';
import { ToggleCartDisplay } from '../../redux/cart/cart-actions'
import { createStructuredSelector } from 'reselect';
import { CartIconContainer, ShoppingCartIcon, ItemCountContainer } from './CartIcon-styled'

class CartIcon extends React.Component {

    render() {
        return (
            <CartIconContainer onClick={this.props.ToggleCartDisplay}>
                <ShoppingCartIcon />
                <ItemCountContainer>{this.props.itemCount}</ItemCountContainer>
            </CartIconContainer>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => (
    {
        ToggleCartDisplay: () => dispatch(ToggleCartDisplay())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);