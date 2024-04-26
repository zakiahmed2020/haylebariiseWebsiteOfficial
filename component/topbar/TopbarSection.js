"use client";

import { useEduorContext } from "@/context/EduorContext";

const TopbarSection = ({ style }) => {
  const { Language, setLanguage } = useEduorContext();

  return (
    <section className={style} style={{ backgroundColor: "#4C75AF" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-6 d-none d-md-block">
            <div className="tf__topbar_left d-flex flex-wrap align-items-center">
              <p>Visit our social pages:</p>
              <ul className="d-flex flex-wrap">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <div className="tf__topbar_right">
              <ul className="d-flex flex-wrap">
                <li>
                  <a href="#">login</a>
                </li>
                <li>
                  <a href="#">Verify</a>
                </li>
                <li>
                  {Language == "EN" ? (
                    <a
                      onClick={() => {
                        localStorage.setItem("language", "EN");
                        setLanguage("EN");
                      }}
                      href="#"
                    >
                      <img src="images/language_3.jpg" alt="language" /> english
                    </a>
                  ) : (
                    <a
                      onClick={() => {
                        localStorage.setItem("language", "SO");
                        setLanguage("SO");
                      }}
                      href="#"
                    >
                      <img src="images/SO.png" alt="language" /> Somalia{" "}
                    </a>
                  )}
                  <ul className="tf__other_language">
                    <li>
                      {Language == "SO" ? (
                        <a
                          onClick={() => {
                            localStorage.setItem("language", "EN");
                            setLanguage("EN");
                          }}
                          href="#"
                        >
                          <img src="images/language_3.jpg" alt="language" />{" "}
                          english
                        </a>
                      ) : (
                        <a
                          onClick={() => {
                            localStorage.setItem("language", "SO");
                            setLanguage("SO");
                          }}
                          href="#"
                        >
                          <img src="images/SO.png" alt="language" /> Somalia{" "}
                        </a>
                      )}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopbarSection;
