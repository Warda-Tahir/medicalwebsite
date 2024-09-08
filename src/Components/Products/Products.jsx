import React from 'react';
import './Products.css';
import ultrasoundImage from '../../assets/ultrasound.jpg'; 
import ctScanImage from '../../assets/ctscan.jpg'; 
import xrayImage from '../../assets/x-ray.jpg';
import Nuclearmedicine from '../../assets/Nuclearmedicine.jpg'; 


const productsData = [
    {
        title: 'Ultrasound Machine',
        image: ultrasoundImage,
        description: [
            'High-resolution imaging for detailed views',
            'Real-time imaging with advanced technology',
            'Portable and easy-to-use for various applications',
            'Suitable for obstetrics, cardiology, and more'
        ],
    },
    {
        title: 'CT Scan Machine',
        image: ctScanImage,
        description: [
            'Provides detailed cross-sectional images',
            'Advanced scanning technology for accurate diagnosis',
            'Fast scanning with high-resolution results',
            'Ideal for detecting internal injuries and diseases'
        ],
    },
    {
        title: 'X-Ray Machine',
        image: xrayImage,
        description: [
            'Quick and effective imaging for bone and tissue',
            'High-quality images for precise diagnosis',
            'Various imaging modes for different needs',
            'Commonly used for routine exams and emergency situations'
        ],
    },
    {
        title: 'Nuclear Medicine',
        image: Nuclearmedicine,
        description: [
            'Radiotracers for detailed imaging.',
            'PET and SPECT for various diagnostics.',
            'Provides functional and molecular data.',
            'Useful for routine and emergency exams.'
        ],
    },
];

const Products = () => {
    return (
        <div className="products-container">
            <h1 className="products-heading">
                <i className="products-icon fas fa-cogs"></i>
                Our Medical Products
            </h1>
            <div className="products-list">
                {productsData.map((product, index) => (
                    <div key={index} className="product-item">
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="product-image" 
                        />
                        <div className="product-info">
                            <h2 className="product-title">{product.title}</h2>
                            <ul className="product-description">
                                {product.description.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
