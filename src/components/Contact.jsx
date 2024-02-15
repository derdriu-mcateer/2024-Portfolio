
import { Card } from 'react-bootstrap';

const Contact = () => {
  return (

    <div className="container px-4 py-5" id="contact">
      <div className="section-heading">
        <h2 className="section-title">Contact</h2>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <Card className="w-100 contact-me">
            <Card.Body>
              <div className="contact-info">
                <h4 className="fw-bold">Thank you for visiting my portfolio website. I'm thrilled at
                  the opportunity to connect with you.</h4>
                <p>Your inquiries are important to me, and I aim to respond
                  promptly. I appreciate your time and look forward to the
                  possibility of working together.</p>
                <div className="col d-flex flex-row justify-content-center">
                  <p className="socials px-3"><a href="https://github.com/derdriu-mcateer" target="_blank"><i className="bi bi-github fs-1"></i></a></p>
                  <p className="socials px-3"><a href="https://www.linkedin.com/in/derdriu-mcateer-736b26288/" target="_blank"><i className="bi bi-linkedin fs-1"></i></a></p>
                  <p className="socials px-3"><a href="mailto:derdriumcateer@gmail.com"><i className="bi bi-envelope fs-1"></i></a></p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <img src="/contact_image.png" alt="Contact Image" className="contact-img img-fluid" />
        </div>
      </div>
    </div>
  );
}


export default Contact