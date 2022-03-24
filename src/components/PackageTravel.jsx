import React, { Component } from 'react';
import {CardPackageTravel }from './CardPackageTravel';
import FilterPackage from './FilterPackage';

class PackageTravel extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <FilterPackage />
                </div>
                <div className='row'>
                    <CardPackageTravel />
                </div>
            </div>
        );
    }
}

export default PackageTravel;