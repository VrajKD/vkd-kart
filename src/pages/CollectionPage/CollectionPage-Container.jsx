import { connect } from 'react-redux';
import withSpinner from '../../components/WithSpinner/WithSpinner'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionLoaded } from '../../redux/shop/shop-selectors'
import { compose } from 'redux';
import CollectionPage from './CollectionPage'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionLoaded
})

const CollectionPage_Container = compose(connect(mapStateToProps), withSpinner)(CollectionPage);

export default CollectionPage_Container;