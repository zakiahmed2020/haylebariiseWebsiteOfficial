const CustomAboutSection = () => {
  return (
    <section className="tf__about mt_250 xs_mt_195">
      <div className="container">
        {/* <div className="tf__about_top wow fadeInUp"> */}
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
                  We can provide you with a reliable handyan in Please input an
                  email address down below school. Please input anand school.
                  included the today.
                </p>
              </div>
              <a href="#" className="common_btn">
                read more
              </a>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default CustomAboutSection;
