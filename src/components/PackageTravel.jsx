import React from 'react';
import {CardPackageTravel }from './CardPackageTravel';
import FilterPackage from './FilterPackage';

export const PackageTravel = () => {
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