import React, { Component } from 'react';
import SwiftSlider from 'react-swift-slider';

const data =  [
    {'id':'1','src':'https://github.com/RECODE-2021-JulianaMesquita/JuhMesquitaViagens-FrontEnd-React/blob/main/src/image/slide00.png?raw=true'},
    {'id':'2','src':'https://github.com/RECODE-2021-JulianaMesquita/JuhMesquitaViagens-FrontEnd-React/blob/main/src/image/slide01.jpg?raw=true'},
    {'id':'3','src':'https://github.com/RECODE-2021-JulianaMesquita/JuhMesquitaViagens-FrontEnd-React/blob/main/src/image/slide02.jpg?raw=true'},
    {'id':'4','src':'https://github.com/RECODE-2021-JulianaMesquita/JuhMesquitaViagens-FrontEnd-React/blob/main/src/image/2.jpg?raw=true'}
  ];

class SlideHome extends Component {
    render() {
        return (
            <div className='container'>
                
                <SwiftSlider data={data}/>
            </div>
        );
    }
}

export default SlideHome;