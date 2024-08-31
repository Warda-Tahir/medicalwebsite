import React, { useState, useEffect } from 'react';
import './Projects.css';
import projectImage1 from '../../assets/project4.jpg'; 
import projectImage2 from '../../assets/project1.jpg'; 
import projectImage3 from '../../assets/project2.jpg'; 
import projectImage4 from '../../assets/project3.jpg'; 

const projectsData = [
    {
        title: 'Shaukat Khanum Memorial Cancer Hospital',
        image: projectImage1,
        description: [
            'Serviced X-Ray Tubes',
            'Recalibrated Cobalt Therapy Equipment',
            'Updated Simulators',
            'Serviced Color Dopplers'
        ],
    },
    {
        title: 'Lahore General Hospital - MRI Machine',
        image: projectImage2,
        description: [
            'Serviced MRI machine',
            'Enhanced imaging accuracy',
            'Calibration for optimal performance'
        ],
    },
    {
        title: 'Mayo Hospital - X-Ray Equipment',
        image: projectImage3,
        description: [
            'Serviced X-Ray equipment',
            'Improved image quality',
            'Extensive repairs and maintenance'
        ],
    },
    {
        title: 'Punjab Institute of Cardiology - Ultrasound System',
        image: projectImage4,
        description: [
            'Serviced Ultrasound system',
            'Upgraded software and hardware check',
            'Optimized image resolution'
        ],
    },
];

const Projects = () => {
    const [activeProject, setActiveProject] = useState(projectsData[0]);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Set visibility to true after a short delay for the transition effect
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, [activeProject]);

    return (
        <div className="projects-container">
            <div className="projects-sidebar">
                <h1 className="projects-heading">
                    <i className="fas fa-project-diagram projects-icon"></i>
                    Recent Projects
                </h1>
                {projectsData.map((project, index) => (
                    <button 
                        key={index} 
                        className={`projects-tab ${activeProject.title === project.title ? 'active' : ''}`}
                        onClick={() => {
                            setIsVisible(false);
                            setTimeout(() => setActiveProject(project), 300); // Delay to match the fade-out animation
                        }}
                    >
                        {project.title}
                    </button>
                ))}
            </div>
            <div className={`projects-content ${isVisible ? 'visible' : ''}`}>
                <div className="projects-image-container">
                    <img 
                        src={activeProject.image} 
                        alt={`Project ${activeProject.title}`} 
                        className="projects-image" 
                    />
                </div>
                <div className="projects-text">
                    <h2>{activeProject.title}</h2>
                    <ul className="projects-description">
                        {activeProject.description.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;
