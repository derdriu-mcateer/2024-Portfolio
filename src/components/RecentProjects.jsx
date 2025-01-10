import React from 'react'

const RecentProjects = () => {
  return (
    <div className="container px-4 py-5">
      <div className="row mb-2">
        <div className="section-heading">
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="container" id="recent-projects">
          <div className="row mb-2">
            <div className="col-lg-6">
              <div className="project-card mb-4">
                <div className="d-flex flex-row justify-content-between project-header">
                  <p className="me-auto">Online Learning Platform</p> 
                  <p className="socials"><a href="https://github.com/derdriu-mcateer/DerdriuMcAteer_T2A2" target="_blank"><i className="bi bi-github fs-1"></i></a></p>
                </div>

                <div className="card-body">
                  <h5 className="tech-stack">Python - Flask - PostgreSQL</h5>
                  <p className="project-text text-justify">Developed a backend API for an online learning platform using Flask and PostgreSQL. Demonstrated proficiency in creating scalable and efficient solutions, emphasizing a commitment to innovation in web development. I demonstrated an aptitude for debugging, ensuring the application's functionality and reliability.</p>
                  <div className="text-center">
                    <img className="img-fluid" id="project-image" src="/flask-project.png" alt="Flask Project" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-card mb-4">
                <div className="d-flex flex-row justify-content-between project-header">
                  <p className="me-auto">Coffee Machine Simulator</p> 
                  <p className="socials"><a href="https://github.com/derdriu-mcateer/T1A3_Application" target="_blank"><i className="bi bi-github fs-1"></i></a></p>
                </div>

                <div className="card-body">
                  <h5 className="tech-stack">Python</h5>
                  <p className="project-text text-justify">Created a Python script to simulate a coffee machine, demonstrating strong Python skills in object-oriented programming, data structures, and user interaction. This project showcases my ability to design and implement complex systems for practical applications.</p>
                  <div className="text-center">
                    <img className="img-fluid" id="project-image" src="/python_app.png" alt="Flask Project" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-card mb-4">
                <div className="d-flex flex-row justify-content-between project-header">
                  <p className="me-auto">QR Code API</p> 
                  <p className="socials"><a href="https://github.com/tomtomau/hothack-team-3" target="_blank"><i className="bi bi-github fs-1"></i></a></p>
                </div>

                <div className="card-body">
                  <h5 className="tech-stack">React - JavaScript - MySQL</h5>
                  <p className="project-text text-justify">Contributed to a collaborative effort in developing a full-stack web application. Primarily focused on the front-end, I played a key role in crafting an engaging and user-friendly interface. This experience highlighted my dedication to creating seamless and visually appealing user experiences within a dynamic team environment.</p>
                  <div className="text-center">
                    <img className="img-fluid" id="project-image" src="/sonic_mirage.png" alt="QR code Project" />
                  </div>
                </div>

                
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-card mb-4">
                <div className="d-flex flex-row justify-content-between project-header">
                  <p className="me-auto">Journal Application</p> 
                  <p className="socials"><a href="https://github.com/tomtomau/hothack-team-3" target="_blank"><i className="bi bi-github fs-1"></i></a></p>
                </div>

                <div className="card-body">
                  <h5 className="tech-stack">MongoDB - Express - Node.js - React</h5>
                  <p className="project-text text-justify">As a project for Coder Academy I learned to create and deploy a full stack MERN Application. Through this experience, I gained valuable insights into the entire software development lifecycle, from conceptualization to deployment. Working on a MERN stack project enabled me to hone my skills in database management, server-side development, front-end design, and deployment strategies. </p>
                  <div className="text-center">
                    <img className="img-fluid" id="project-image" src="/journal_app.png" alt="Journal Application"/>
                  </div>
                </div>

                
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}


export default RecentProjects