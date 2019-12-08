import { CartActionTypes } from './cart-types.js'

export const ToggleCartDisplay = () => (
    {
        type: CartActionTypes.TOGGLE_CART_DISPLAY,
    }
)

export const AddItem = (item) => (
    {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
)

export const clearItem = (item) => (
    {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: item
    }
)

export const removeItem = (item) => (
    {
        type: CartActionTypes.REMOVE_ITEM,
        payload: item
    }
)