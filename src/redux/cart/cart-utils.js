export const addCartItem = (cartItems, itemToAdd) => {
    const exist = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

    if (exist) {
        return cartItems.map(cartItem => cartItem.id === itemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const removeCheckoutItem = (cartItems, itemToRemove) => {
    const exist = cartItems.find(cartItem => cartItem.id === itemToRemove.id);

    if (exist.quantity !== 1) {
        return cartItems.map(cartItem => cartItem.id === itemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
    }

    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
}