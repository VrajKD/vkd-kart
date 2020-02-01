import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
import selectCollections from '../../redux/shop/shop-selectors';
import { updateCollections } from '../../redux/shop/shop-actions'
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'
import WithSpinner from '../../components/WithSpinner/WithSpinner'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
    state = {
        loading: true
    }
    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const { updateCollections } = this.props;
        const collRef = firestore.collection('collections');
        collRef.onSnapshot(async snapshot => {
            const collMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collMap);
            this.setState({ loading: false });
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:categoryID`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
    //     const { collections } = this.state;
    //     return (
    //       <div className='shop-page'>
    //         {collections.map(({ id, ...otherCollectionProps }) => (
    //           <PreviewCollection key={id} {...otherCollectionProps} />
    //         ))}
    //       </div>
    //     );
    //   }
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

const mapDispatchToProps = dispatch => ({
    updateCollections: collMap => dispatch(updateCollections(collMap))
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);