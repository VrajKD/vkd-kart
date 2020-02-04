import ShopActionTypes from './shop-types'
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})
export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = (error) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collRef.get().then(snapshot => {
            const collMap = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collMap));
            // updateCollections(collMap);
            // this.setState({ loading: false });
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
}
