import React from 'react';
// import './Homepage.scss'
import { HomepageContainer } from './Homepage-styled'

import Directory from '../../components/Menu/Directory';
class Homepage extends React.Component {
    render() {
        return (
            <HomepageContainer>
                <Directory />
            </HomepageContainer>
        );
    }
}

export default Homepage;