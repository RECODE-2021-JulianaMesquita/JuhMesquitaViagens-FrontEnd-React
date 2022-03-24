import React, { Component } from 'react';
import CardPackagePromotion from './CardPackagePromotion';
import FilterPackage from './FilterPackage';

class Promotions extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <FilterPackage />
                </div>
                <div className='row'>
                    <CardPackagePromotion />                    
                </div>
            </div>
        );
    }
}

export default Promotions;