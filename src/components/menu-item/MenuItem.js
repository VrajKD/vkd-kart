import React from 'react';
// import './MenuItem.scss'
import { MenuItemContainer, MenuItemContent, BackgroundImageContainer, ContentHeading, ContentSubHeading } from './MenuItem-styled'
import { withRouter } from 'react-router-dom';

class MenuItem extends React.Component {
    render() {
        return (
            <MenuItemContainer onClick={() => this.props.history.push(`${this.props.match.url}${this.props.linkUrl}`)}>
                <BackgroundImageContainer className="background-image" style={{
                    background: `url(${this.props.imageUrl})`
                }} />
                <MenuItemContent>
                    <ContentHeading>{this.props.heading}</ContentHeading>
                    <ContentSubHeading>{this.props.subheading}</ContentSubHeading>
                </MenuItemContent>
            </MenuItemContainer>
        )
    }
}

export default withRouter(MenuItem);