import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './CartIcon.scss'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'
import { connect } from 'react-redux';
import { ToggleCartDisplay } from '../../redux/cart/cart-actions'
import { createStructuredSelector } from 'reselect';

class CartIcon extends React.Component {

    render() {
        return (
            <div className="cart-icon" onClick={this.props.ToggleCartDisplay}>
                <ShoppingIcon className="shopping-icon" />
                <span className="item-count">{this.props.itemCount}</span>
            </div>
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