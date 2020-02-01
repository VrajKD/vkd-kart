import React from 'react';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
// import './CollectionPage.scss'
import { connect } from 'react-redux';
import { selectSpecificCollection } from '../../redux/shop/shop-selectors';
import { CollectionPageContainer, CollectionPageTitle, CollectionPageItemsContainer } from './CollectionPage-styled'

class CollectionPage extends React.Component {

    render() {
        const { collection } = this.props;
        const { title, items } = collection;
        return (
            <CollectionPageContainer>
                <CollectionPageTitle>{title}</CollectionPageTitle>
                <CollectionPageItemsContainer>
                    {
                        items.map(item => (
                            <CollectionItem id={item.id} item={item} />
                        ))
                    }
                </CollectionPageItemsContainer>
            </CollectionPageContainer>)
    }
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectSpecificCollection(ownProps.match.params.categoryID)(state)
})

export default connect(mapStateToProps)(CollectionPage);