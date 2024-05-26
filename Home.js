import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Welcome to my portfolio! I'm [Keval Raval], a passionate and experienced web developer with a knack for crafting stunning and functional websites. With a focus on clean code, intuitive design, and user-centric experiences, I specialize in bringing digital visions to life.

In my portfolio, you'll find a collection of projects showcasing my skills in frontend and backend development, e-commerce solutions, responsive design, and more. Each project reflects my dedication to delivering high-quality, customized solutions that exceed client expectations.  </p>
      <Link to="/about" className="btn">Learn More About Me</Link>
    </div>
  );
};

export default Home;
