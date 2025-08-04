import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";



function Home() {
  return (
    <>
      {/* Navbar */}
      <div className="flex-container">
        <div className="logo-section">
          <img src="logoIcon.png" alt="Logo" className="menu-icon" />
          <span className="logo-text">ONGERA</span>
        </div>

        <ul className="flex-menu">
          <li className="menu-item">Home</li>
          <li className="menu-item">Research</li>
          <li className="menu-item">Communities</li>
          <li className="menu-item">Events</li>
          <li className="menu-item">Knowledge Hub</li>
        </ul>

        <div className="flex-icon">
          <IoNotificationsOutline className="menu-icon" />
          <div className="profile-image" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Connect. Collaborate. Innovate.</h1>
          <p>
            NSANGIZA brings together Rwandan students, researchers, and diaspora
            to share knowledge and drive innovation through collaboration.
          </p>
          <div className="buttons">
            <button className="btn-primary">Join the Community</button>
            <button className="btn-outline">Explore Research</button>
          </div>
        </div>
        <div className="hero-image">
          
            <img  className="mock-graphic" src='/image.png' alt='graphic-image'/>
          
        </div>
      </section>
    </>
  );
}

export default Home;
