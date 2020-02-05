import { takeEvery, call, put } from 'redux-saga/effects'
import ShopActionTypes from './shop-types'
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop-actions'

export function* fetchCollectionsAsync() {
    try {
        const collRef = firestore.collection('collections');
        const snapshot = yield collRef.get();
        const collMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collMap))
    }
    catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
    // collRef.get().then(snapshot => {
    //     const collMap = convertCollectionSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collMap));
    //     // updateCollections(collMap);
    //     // this.setState({ loading: false });
    // }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}