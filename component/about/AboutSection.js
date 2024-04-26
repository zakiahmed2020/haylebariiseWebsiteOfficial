import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="tf__about mt_250 xs_mt_195">
      <div className="container">
        <div className="tf__about_top wow fadeInUp">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="tf__about_top_img">
                <img
                  src="images/myimages/silderImage.jpg"
                  alt="about"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tf__about_top_text">
                <div className="tf__about_top_text_center">
                  <h4>Study Off Flexibly</h4>
                  <p>
                     We can provide you with a reliable handyan in Please
                    input an email address down below school. Please input anand
                    school. included the today.
                  </p>
                </div>
                <a href="#" className="common_btn">
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-md-9 col-lg-6 wow fadeInLeft">
            <div className="tf__about_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>OUR About Us</h5>
                <h2>District is Made of about Students Childhood.</h2>
              </div>
              <p>
                Business tailored it design, management & support services
                business agency elit, sed do eiusmod tempor.{" "}
              </p>
              <ul>
                <li>Business school's Institut constructivism.</li>
                <li>We give management school best.</li>
                <li>Media in this school solution.</li>
                <li>Business school's Institut constructivism.</li>
                <li>We give management school best.</li>
              </ul>
              <Link href="/about" className="common_btn">
                about more
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-sm-9 col-md-8 col-lg-6 wow fadeInRight">
            <div className="tf__about_img">
              <img
                src="images/about_img.png"
                alt="about"
                className="img-fluid w-100"
              />
              <div className="text">
                <i className="far fa-check-circle"></i>
                <h3>183k+</h3>
                <p>Complete Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
