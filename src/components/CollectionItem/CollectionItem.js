import React from 'react';
// import './CollectionItem.scss'
import { AddItemButton, CollectionItemImage, CollectionItemContainer, CollectionItemFooter, CollectionItemFooterName, CollectionItemFooterPrice } from './CollectionItem-styled'
import CustomButton from '../CustomButton/CustomButton'
import { connect } from 'react-redux';
import { AddItem } from '../../redux/cart/cart-actions'

class CollectionItem extends React.Component {
    render() {
        const { item, AddItem } = this.props;
        const { name, imageUrl, price } = item;
        return (
            <CollectionItemContainer>
                <CollectionItemImage style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
                <AddItemButton onClick={() => AddItem(item)}><CustomButton inverted={true}>ADD TO CART</CustomButton></AddItemButton>
                <CollectionItemFooter>
                    <CollectionItemFooterName>{name}</CollectionItemFooterName>
                    <CollectionItemFooterPrice>{'$' + price}</CollectionItemFooterPrice>
                </CollectionItemFooter>
            </CollectionItemContainer>
        )
    }
}

const mapDispatchToProps = dispatch => (
    {
        AddItem: item => dispatch(AddItem(item))
    }
)

export default connect(null, mapDispatchToProps)(CollectionItem);