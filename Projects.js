import React from 'react';
import './Projects.css';
import trivia from '../asset/trivia.png';
import recipe from '../asset/recipe.jpg';
import weather from '../asset/weather.jpg';

const Projects = () => {
  const projects = [
    {
      name: 'Trivia Game',
      description: 'a trivia game offers an entertaining and educational experience, challenging players knowledge and rewarding them for their expertise. Whether played solo, with friends, or against strangers, trivia games have universal appeal and provide endless opportunities for fun and learning.',
      technologies: ['React', 'Redux', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API'],
      role: 'Fullstack Developer',
      outcome: 'Following its successful launch, the website efficiently processes more than 1,000 transactions monthly. Users commend its intuitive layout and smooth navigation, highlighting the seamless user experience.',
      image: trivia,
    },
    {
      name: 'Recipe Finder Application',
      description: 'The recipe finder application is a user-friendly tool designed to help users discover a wide variety of recipes based on their preferences and ingredients on hand.',
      technologies: ['React Native', 'Firebase', 'Firebase Auth', 'Google Analytics'],
      role: 'Mobile Developer',
      outcome: 'The app has been downloaded over 10,000 times on the Google Play Store and Apple App Store. Users have reported improved fitness levels and a better understanding of their health data.',
      image: recipe,
    },
    {
        name: 'Weather Application',
        description: 'Develop a weather application that fetches real-time weather data from an API and displays it to the user.',
        technologies: ['Node.js', 'Express', 'MongoDB', 'D3.js', 'Bootstrap', 'JavaScript'],
        role: 'Full-stack Developer',
        outcome: 'The web application has streamlined data analysis tasks, reducing the time required from days to hours. It has been widely adopted by several departments within the organization, enhancing efficiency and enabling more accurate data-driven decision-making.',
        image: weather,
      },
      
  ];

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies Used:</strong> {project.technologies.join(', ')}</p>
            <p><strong>Role:</strong> {project.role}</p>
            <p><strong>Outcome:</strong> {project.outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
