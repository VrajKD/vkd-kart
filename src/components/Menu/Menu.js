import React from 'react';
import './Menu.scss'
import MenuItem from '../menu-item/MenuItem';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          subheading: 'Wear it like Sparrow!',
          heading: 'Hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          subheading: 'Winter HAS come.',
          heading: 'Jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          subheading: 'Sports shoes not comfortable, eh?',
          heading: 'Sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          subheading: 'The never-ending section',
          heading: 'Womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          subheading: 'Nothing fancy',
          heading: 'Mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ],
    }
  }

  render() {
    return (
      <div className="menu">
        {
          this.state.sections.map(({ imageUrl, heading, subheading, id, size }) => {
            return (
              <MenuItem key={id} heading={heading} subheading={subheading} size={size} imageUrl={imageUrl} />
            )
          })
        }
      </div>
    )
  }
}

export default Menu;