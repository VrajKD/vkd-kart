import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
// import './PreviewCollection.scss'
import { PreviewCollectionContainer, PreviewCollectionTitle, PreviewOfCollection } from './PreviewCollection-styled'

class PreviewCollection extends React.Component {
    render() {
        console.log(this.props);
        return (
            <PreviewCollectionContainer>
                <PreviewCollectionTitle>{this.props.title}</PreviewCollectionTitle>
                <PreviewOfCollection>

                    {this.props.items
                        .filter((item, index) => index < 4)
                        .map((item) => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                    }
                </PreviewOfCollection>

            </PreviewCollectionContainer>
        )
    }
}

// const PreviewCollection = ({ title, items }) => (
//     <div className='collection-preview'>
//         <h1 className='title'>{title.toUpperCase()}</h1>
//         <div className='preview'>
//             {items
//                 .filter((item, idx) => idx < 4)
//                 .map(({ id, name,...otherItemProps }) => (
//                     <div>{name}</div>
//                 ))}
//         </div>
//     </div>
// );

export default PreviewCollection;