

const AboutMe = () => {
  return (
    <div className="container px-4 py-5" id="about-me">
      <div className="row mb-2">
        <div className="section-heading">
          <h2 className="section-title">About Me</h2>
        </div>
        <div className=" mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5 fulljustify">
            <p className="col-md-12 fs-4 about-text ">
              I am a junior web developer who is eager to contribute my
              skills, creativity, and passion for coding to a dynamic team,
              while continuously expanding my knowledge and expertise in web
              development. I bring a blend of creativity and technical
              proficiency to any team, offering a fresh perspective and a
              hunger for learning. My ambition is not just to contribute,
              but to excel, showcasing my dedication to delivering
              high-quality solutions and innovative approaches

            </p>
            <div className="resume-button">
              <a href="/Derdriu McAteer 2025 Resume.pdf" download="DM_Resume.pdf" id="resume-button">
                <button type="button" className="aboutme-button px-4 me-md-2">Resume</button>
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary history border rounded-3">
              <h2 className="section-title">Education</h2>
              <h5 className="provider">Coder Academy </h5>
              <p className="info">Diploma of Information Technology </p>
              <p className="date text-end">March 2024</p>
              <h5 className="provider">Udacity</h5>
              <p className="info">Introduction to Programming</p>
              <p className="date text-end">2023</p>
              <h5 className="provider">RMIT</h5>
              <p className="info">Introduction to Programming</p>
              <p className="date text-end">2022</p>
              <h5 className="provider">Griffith University</h5>
              <p className="info"> Bachlor of Pharmacy</p>
              <p className="date text-end">2017</p>

            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary history border rounded-3">
              <h2 className="section-title">Experience</h2>
              <h4>Magentus Practice Management</h4>
              <p className="job-title">Junior Software Engineer, Brisbane</p>
              <p className="date text-end">March 2024 - Current</p>
              <p className="info">
                Developed and maintained web applications with React and Ruby on Rails, focusing on responsive interfaces and scalable backend solutions integrated with AWS. Collaborated in an Agile environment, contributing to sprint planning, code reviews, and writing clean, maintainable code to ensure high-quality software delivery
              </p>
              <h4>Chemist Warehouse</h4>
              <p className="job-title">Inventory Manager, Ireland</p>
              <p className="date text-end">June 2020 - June 2023</p>
              <p className="info">
                Oversaw global import/export operations, supervised
                invoicing, and implemented efficient protocols.
                Significantly contributed to the success of initial Chemist
                Warehouse stores in Ireland through strategic inventory
                management.
              </p>
              <p className="job-title"> Pharmacist Manager, Australia</p>
              <p className="date text-end">January 2019 - June 2020</p>
              <p className="info">
                Managed a large pharmacy team, providing expertise in
                medication management, counseling, and collaborating with
                healthcare professionals. Ensured compliance with pharmacy
                laws, consistently exceeding KPIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AboutMe