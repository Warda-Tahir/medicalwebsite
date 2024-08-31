import React from 'react';
import './SpareParts.css';
import sparePartsImage1 from '../../assets/Transducer.jpg'; 
import sparePartsImage2 from '../../assets/xray-tube.jpg'; 
import sparePartsImage3 from '../../assets/endocavity.jpg';

const sparePartsData = [
    { 
        src: sparePartsImage1, 
        heading: 'Ultrasound Transducer', 
        subheading: 'High-frequency transducer for detailed imaging in obstetrics and cardiology. Provides exceptional clarity for diagnostic imaging.' 
    },
    { 
        src: sparePartsImage2, 
        heading: 'X-Ray Tube', 
        subheading: 'Durable tube for consistent and clear radiographic images. Designed to offer reliable performance and longevity in medical imaging.' 
    },
    { 
        src: sparePartsImage3, 
        heading: 'Endocavity Probe', 
        subheading: 'Specialized probe for high-resolution endocavity scanning. Suitable for detailed internal examinations with comfort and precision.' 
    },
];

const SpareParts = () => {
    return (
        <div className="spare-parts-container">
            {sparePartsData.map((part, index) => (
                <div key={index} className="spare-part-card">
                    <img src={part.src} alt={part.heading} className="spare-part-image" />
                    <div className="spare-part-info">
                        <h3 className="spare-part-heading">{part.heading}</h3>
                        <p className="spare-part-subheading">{part.subheading}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SpareParts;
