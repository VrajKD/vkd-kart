import React from 'react';
import './CollectionItem.scss'
import CustomButton from '../CustomButton/CustomButton'

class CollectionItem extends React.Component {
    render() {
        const { name, imageUrl, price } = this.props;
        return (
            <div className="collection-item">
                <div className="image" style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
                <CustomButton className="custom-button" inverted >ADD TO CART</CustomButton>
                <div className="collection-item-footer">
                    <span className="name">{name}</span>
                    <span className="price">{'$' + price}</span>
                </div>
            </div>
        )
    }
}

export default CollectionItem;