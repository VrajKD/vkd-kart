import React from 'react';
import './MenuItem.scss'
import { withRouter } from 'react-router-dom';

class MenuItem extends React.Component {
    render() {
        return (
            <div className={`${this.props.size} menu-item`} onClick={() => this.props.history.push(`${this.props.match.url}${this.props.linkUrl}`)}>
                <div className="background-image" style={{
                    background: `url(${this.props.imageUrl})`
                }}></div>
                <div className="content">
                    <h1 className="heading">{this.props.heading}</h1>
                    <span className="sub-heading">{this.props.subheading}</span>
                </div>
            </div>
        )
    }
}

export default withRouter(MenuItem);