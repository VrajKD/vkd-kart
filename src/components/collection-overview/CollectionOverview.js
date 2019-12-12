import React from 'react';
import { connect } from 'react-redux';
import PreviewCollection from '../preview-collection/PreviewCollection';
import { createStructuredSelector } from 'reselect';
import selectCollections from '../../redux/shop/shop-selectors';
import './CollectionOverview.scss'


class CollectionOverview extends React.Component {
    render() {
        const { collections } = this.props;
        return (
            <div className="collection-overview">
                {
                    Object.values(collections).map(({ id, ...otherProps }) => {
                        return (
                            <PreviewCollection key={id} {...otherProps} />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);