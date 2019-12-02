import React from 'react';
import './MenuItem.scss'

class MenuItem extends React.Component {
    render() {
        return (
            <div className={`${this.props.size} menu-item`}>
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

export default MenuItem;