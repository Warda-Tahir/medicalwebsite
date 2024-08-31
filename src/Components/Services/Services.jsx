import React from 'react';
import './Services.css';

const servicesText = `
Al Rafay Traders is committed to providing quality after-sales service, as we believe that it is our responsibility to ensure that the machines we install maintain the maximum possible up times. Our customers are aware of Al Rafay Traders’ total commitment to them from point of sale, through the lifetime of the equipment.

### Our Locations
Al Rafay Traders’ head office is located in Lahore, with additional offices in:
- Islamabad
- Karachi
- Peshawar
- Quetta
- Multan
- Bahawalpur
- Hyderabad
- Abbotabad

This extensive network ensures prompt responses and effective after-sales servicing.

### Quality Service
Al Rafay Traders is renowned countrywide for the quality of its after-sales service. Our service department adheres to ISO-9001: 2008 standards. Our engineers are our greatest assets, receiving rigorous training globally. As of December 2018, 85 out of 200 engineers received foreign training for equipment, including:
- CT-scanners
- MRI machines
- Ultrasounds
- Color Dopplers

### Repair Services
We offer repair services for a range of equipment, including:
- MRI, CT-Scanners, and Angiography equipment
- All types of X-ray equipment
- All types of ultrasound equipment, Color Dopplers, and Echocardiography machines
- ICU/CCU Telemetry and Hardware units, Cardiac monitors, Defibrillators, and Resuscitators
- Infusion Pumps, Infant Incubators, and other Neonatal equipment
- Radiotherapy equipment such as Cobalt 60
- Cyberknife robotic radiosurgery

### Installation and Training
Our highly trained engineers install machines efficiently, adhering to international quality standards. We offer turnkey installations including:
- Building construction
- Interior finishing
- Installation and demonstration

We also provide clinical applications training to ensure optimal machine utilization.

### Spare Parts and Tools
Al Rafay Traders maintains a local spare parts inventory to achieve the highest possible uptimes and deliver quality service. Parts are managed professionally to ensure safety and easy availability.

> “Besides having the highest academic background, intense training, and vast experience, Al Rafay Traders ensures our engineers are equipped with all necessary test tools. These tools are annually calibrated to ensure professional service.”

`;

const Services = () => {
    return (
        <div className="services-container">
            <div className="services-content">
                <h1 className="services-title">Our Services</h1>
                <div className="services-text">
                    {servicesText.split('\n').map((line, index) => {
                        if (line.startsWith('###')) {
                            return <h2 key={index} className="services-subtitle">{line.replace('### ', '')}</h2>;
                        } else if (line.startsWith('- ')) {
                            return <li key={index} className="services-list-item">{line.replace('- ', '')}</li>;
                        } else if (line.startsWith('> ')) {
                            return <blockquote key={index} className="services-quote">{line.replace('> ', '')}</blockquote>;
                        } else if (line.trim() !== '') {
                            return <p key={index} className="services-paragraph">{line}</p>;
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Services;
