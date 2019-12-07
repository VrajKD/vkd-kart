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