import React from 'react';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import './CollectionPage.scss'
import { connect } from 'react-redux';
import { selectSpecificCollection } from '../../redux/shop/shop-selectors';

class CollectionPage extends React.Component {

    render() {
        const { collection } = this.props;
        const { title, items } = collection;
        console.log(collection)
        return (
            <div className="collection-page">
                <div className="title">{title}</div>
                <div className="items">
                {
                    items.map(item => (
                        <CollectionItem id={item.id} item={item} />
                    ))
                }
                </div>
            </div>)
    }
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectSpecificCollection(ownProps.match.params.categoryID)(state)
})

export default connect(mapStateToProps)(CollectionPage);