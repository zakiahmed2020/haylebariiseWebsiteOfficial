"use client"
import getLanguageJSON from "@/app/Language/page";

const AboutSection3 = ({ style }) => {
  const Language=getLanguageJSON()
  return (
    <div className={`${style} tf__about_2_area`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__about_2_img">
              <div className="tf__about_small">
                <img
                  src="images/myimages/aboutas.jpg"
                  alt="about us"
                  className="img-fluid w-100"
                />
              </div>
              <div className="tf__about_large">
                <img
                  src="images/myimages/aboutas.jpg"
                  alt="about us"
                  className="img-fluid w-100"
                />
              </div>
              <p>
                <span>24+</span> Years of Experience
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInRight">
            <div className="tf__about_2_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>{Language.About.h5}</h5>
                {/* <h2>Complete About Students University Education.</h2> */}
              </div>
              <p>
                {Language.About.p}
              </p>
              <p>
                {Language.About.p2}
              </p>
              <ul>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_1.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>{Language.About.h4}</h4>
                    <p>
                      {Language.About.p3}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_2.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>{Language.About.h42}</h4>
                    <p>
                      {Language.About.p4}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_3.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>{Language.About.h43}</h4>
                    <p>
                      {Language.About.p5}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_4.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>{Language.About.h44}</h4>
                    <p>
                      {Language.About.p6}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 mt_110 xs_mt_100 wow fadeInUp">
            <div className="tf__about_us_counter d-flex flex-wrap align-items-center">
              <p>
                <span className="counter">27,0000</span> More Students courde
                youn do best !
              </p>
              <a href="#">Export All</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
