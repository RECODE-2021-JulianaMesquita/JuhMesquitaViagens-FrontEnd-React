import React, { Component } from 'react';
import { CardPackageTravel} from './CardPackageTravel';
import SlideHome from './SlideHome';

class Home extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <SlideHome />
                </div>
                <div className='row'>
                    <CardPackageTravel />
                </div>
            </div>
        );
    }
}

export default Home;