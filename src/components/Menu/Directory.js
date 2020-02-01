import React from 'react';
// import './Directory.scss';
import { MenuContainer } from './Directory-styled'
import { connect } from 'react-redux';
import MenuItem from '../menu-item/MenuItem';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';

class Directory extends React.Component {

  render() {
    return (
      <MenuContainer>
        {
          this.props.sections.map(({ imageUrl, heading, subheading, id, size, linkUrl }) => {
            return (
              <MenuItem key={id} heading={heading} subheading={subheading} size={size} imageUrl={imageUrl} linkUrl={linkUrl} />
            )
          })
        }
      </MenuContainer>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);