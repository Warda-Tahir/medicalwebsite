import React, { useState } from 'react';
import './Services.css';
import ultrasoundImage from '../../assets/slider1.jpg'; 
import ctScanImage from '../../assets/slider2.jpg'; 
import xrayImage from '../../assets/slider3.jpg'; 
import sparePartsImage from '../../assets/slider2.jpg';

const servicesData = [
    {
        title: 'Ultrasound',
        image: ultrasoundImage,
        description: 'Ultrasound machines are crucial in modern medicine. They help visualize muscles, tendons, and many internal organs, aiding in diagnosing various conditions. This technology is non-invasive and safe, using sound waves to create images of the inside of the body, which are then displayed on a monitor. It’s widely used in obstetrics to monitor the development of the fetus during pregnancy.',
    },
    {
        title: 'CT Scan',
        image: ctScanImage,
        description: 'CT Scanners offer detailed cross-sectional images of the body, providing more information than regular X-rays. This technology helps in diagnosing diseases and assessing the internal structures of the body, such as bones, blood vessels, and soft tissues. CT scans are essential for detecting cancer, heart disease, and internal injuries, enabling doctors to make more accurate diagnoses and treatment plans.',
    },
    {
        title: 'X-ray Machines',
        image: xrayImage,
        description: 'X-ray machines are fundamental in medical diagnostics. They use electromagnetic waves to create images of the inside of the body, particularly bones. X-rays are commonly used to detect fractures, infections, or tumors. The images produced are crucial for diagnosing and planning the treatment of various conditions, ensuring patients receive the appropriate care.',
    },
    {
        title: 'Spare Parts',
        image: sparePartsImage,
        description: 'High-quality spare parts are vital for the maintenance and longevity of medical equipment. Our range of spare parts ensures that your machines continue to function efficiently, minimizing downtime and ensuring that patient care is not compromised. From small components to larger assemblies, we provide everything you need to keep your equipment in top condition.',
    },
];

const Services = () => {
    const [activeService, setActiveService] = useState(servicesData[0]);

    return (
        <div className="services-container">
            <div className="services-sidebar">
                {servicesData.map((service, index) => (
                    <button 
                        key={index} 
                        className={`service-tab ${activeService.title === service.title ? 'active' : ''}`}
                        onClick={() => setActiveService(service)}
                    >
                        {service.title}
                    </button>
                ))}
            </div>
            <div className="services-content">
                <img src={activeService.image} alt={activeService.title} className="service-image" />
                <div className="services-text">
                    <h2>{activeService.title}</h2>
                    <p>{activeService.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
