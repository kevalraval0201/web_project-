import React from 'react';
import './About.css';
import profilePic from '../asset/myimg.jpg';

const DownloadButton = () => {
    const handleDownload = () => {
      const fileUrl = 'file:///C:/Users/hrana/Downloads/Resumes/WMTech/Coop/HardikRana_SoftwareEngineer.pdf'; // Replace with the actual file path
      const anchor = document.createElement('a');
      anchor.href = fileUrl;
      anchor.download = 'HardikRana_SoftwareEngineer.pdf';
      anchor.click();
    };

    return (
      <button onClick={handleDownload}>Download Resume</button>
    );
};

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={profilePic} alt="Profile" />
      <p>Hello, my name is Keval Raval. I am a Senior Software Engineer.</p>
      <a href="New_resume.pdf" download>Download My Resume</a>
    </div>
  );
};

export default About;
