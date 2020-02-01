import { createSelector } from 'reselect';
const selectShop = state => state.shop;


const selectCollections = createSelector([selectShop],
    shop => shop.collections);

export const selectSpecificCollection = collectionUrlParam => (
    createSelector([selectCollections], collections => collections[collectionUrlParam]));

export const selectCollectionForPreview = createSelector([selectCollections], collections => Object.values())

export default selectCollections;