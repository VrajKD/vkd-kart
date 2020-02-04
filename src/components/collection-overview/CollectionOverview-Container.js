import { connect } from 'react-redux';
import withSpinner from '../../components/WithSpinner/WithSpinner'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../redux/shop/shop-selectors'
import { compose } from 'redux';
import CollectionOverview from './CollectionOverview'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionOverviewContainer = compose(connect(mapStateToProps), withSpinner)(CollectionOverview);

export default CollectionOverviewContainer;