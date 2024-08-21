// src/components/Slider.js
import React, { useState, useEffect } from 'react';
import './Slider.css';
import slide1 from '../../assets/slider1.jpg';
import slide2 from '../../assets/slider2.jpg';
import slide3 from '../../assets/slider3.jpg';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { img: slide1, text: "Advanced Diagnostic Tools", subtitle: "Precision and Accuracy in Every Diagnosis" },
        { img: slide2, text: "Innovative Medical Devices", subtitle: "Supplying high-quality lab equipment to meet the rigorous demands of modern healthcare." },
        { img: slide3, text: "Comprehensive Patient Care Solutions", subtitle: "Enhancing Patient Outcomes with Innovative Equipment" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 4000); // 5 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [slides.length]);

    return (
        <div className="slider">
            <div
                className="slides"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="slide-item">
                        <img src={slide.img} alt={`Slide ${index + 1}`} />
                        <div className="overlay">
                            <h2>{slide.text}</h2>
                            <p>{slide.subtitle}</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
