import React from 'react';
import './Homepage.scss'

import Directory from '../../components/Menu/Directory';
class Homepage extends React.Component {
    render() {
        return (
            <div className='homepage'>
                <Directory />
            </div>
        );
    }
}

export default Homepage;