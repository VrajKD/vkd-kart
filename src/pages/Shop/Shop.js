import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
import selectCollections from '../../redux/shop/shop-selectors';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

class Shop extends React.Component {

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:categoryID`} component={CollectionPage} />
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

export default connect(mapStateToProps)(Shop);