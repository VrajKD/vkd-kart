import React from 'react';
import './CollectionItem.scss'
import CustomButton from '../CustomButton/CustomButton'
import { connect } from 'react-redux';
import { AddItem } from '../../redux/cart/cart-actions'

class CollectionItem extends React.Component {
    render() {
        const { item, AddItem } = this.props;
        const { name, imageUrl, price } = item;
        return (
            <div className="collection-item">
                <div className="image" style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
                <div className="button" onClick={() => AddItem(item)}><CustomButton inverted={true}>ADD TO CART</CustomButton></div>
                <div className="collection-item-footer">
                    <span className="name">{name}</span>
                    <span className="price">{'$' + price}</span>
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = dispatch => (
    {
        AddItem: item => dispatch(AddItem(item))
    }
)

export default connect(null, mapDispatchToProps)(CollectionItem);