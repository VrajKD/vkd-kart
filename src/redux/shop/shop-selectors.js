import { createSelector } from 'reselect';
const selectShop = state => state.shop;


const selectCollections = createSelector([selectShop],
    shop => shop.collections ? shop.collections : []);

export const selectSpecificCollection = collectionUrlParam => (
    createSelector([selectCollections], collections => collections[collectionUrlParam] ? collections[collectionUrlParam] : {}));

export const selectCollectionForPreview = createSelector([selectCollections], collections => collections ? Object.keys(collections).map(key => collections[key]) : [])

export default selectCollections;