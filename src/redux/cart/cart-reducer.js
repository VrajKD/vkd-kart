import { CartActionTypes } from './cart-types';
import { addCartItem, removeCheckoutItem } from './cart-utils';

const INITIAL_STATE = {
    visible: false,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_DISPLAY:
            return {
                ...state,
                visible: !state.visible,
            }

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addCartItem(state.cartItems, action.payload)
            }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeCheckoutItem(state.cartItems, action.payload)
            }

        default:
            return state;
    }
}

export default cartReducer;