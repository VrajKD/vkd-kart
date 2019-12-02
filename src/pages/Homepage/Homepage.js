import React from 'react';
import './Homepage.scss'
import Menu from '../../components/Menu/Menu';
class Homepage extends React.Component {
    render() {
        return (
            <div className='homepage'>
                <Menu />
            </div>
        );
    }
}

export default Homepage;