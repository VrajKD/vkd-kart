import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
import selectCollections, { selectIsCollectionLoaded,selectIsCollectionFetching } from '../../redux/shop/shop-selectors';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop-actions'
import CollectionOverview_Container from '../../components/collection-overview/CollectionOverview-Container';
import CollectionPage_Container from '../CollectionPage/CollectionPage-Container'


class Shop extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview_Container} />} />
                <Route path={`${match.path}/:categoryID`} component={CollectionPage_Container} />} />
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
    collections: selectCollections,
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);