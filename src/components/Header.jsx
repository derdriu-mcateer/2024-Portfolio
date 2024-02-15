

const Header = () => {
  return (
    <div className="container px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6 mx-auto">
          <img src="/banner.png" className="d-block mx-auto img-fluid" alt="Banner Image"/>
        </div>
        <div className="col-lg-6">
          <div className="d-flex flex-column h-100">
            <h1 className="display-5 mb-3" id="title">Derdriu McAteer</h1>
            <p className="lead">Junior Full Stack Web Developer</p>
            <div className="">
              <button type="button" className="aboutme-button px-4 me-md-2"><a href="#about-me">About Me</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

