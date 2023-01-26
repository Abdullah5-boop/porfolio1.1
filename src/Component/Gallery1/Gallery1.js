import React from 'react';
import GarlleryPage1 from './GarlleryPage1';
import './Gallery.css'
const Gallery1 = () => {
    const dataObj = [{
        photourl1: 'https://source.unsplash.com/AjDVUnRpsS4',
        title1: 'Natural beauty',
        paragraph1: '',
        photourl2: 'https://source.unsplash.com/GI9uC_oxA1M',
        title2: 'Natural beauty',
        paragraph2: '',
        photourl3: 'https://source.unsplash.com/jZL0rtjD4-8',
        title3: 'Natural beauty',
        paragraph3: '',
    }]
    return (
        <div>
            <GarlleryPage1></GarlleryPage1>
        </div>
    );
};

export default Gallery1;