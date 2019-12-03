import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './PreviewCollection.scss'

class PreviewCollection extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="collection-preview">
                <h2>{this.props.title}</h2>
                <div className="preview">

                    {this.props.items
                        .filter((item, index) => index < 4)
                        .map(({ id, ...otherItem }) => (
                            <CollectionItem key={id} {...otherItem} />
                        ))
                    }
                </div>

            </div>
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