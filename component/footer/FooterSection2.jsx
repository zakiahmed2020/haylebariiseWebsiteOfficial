"use client";
import { useEduorContext } from "@/context/EduorContext";
import companyProfile from "@/data/company";
import Link from "next/link";
import React from "react";

const FooterSection2 = ({ style, logo }) => {
  const { handleVideoShow } = useEduorContext();
  return (
    <footer className={style}>
      <div className="container">
        <div className="tf__footer_apply">
          <div className="tf__footer_apply_overlay">
            <a className="venobox" role="button" onClick={handleVideoShow}>
              <i className="fas fa-play"></i>
            </a>
            <h3>Let’s best Something Agency</h3>
            <p>
              There are many variations of passages of agency Lorem Ipsum Fasts
              injecte.
            </p>
            <a className="apply_btn" href="#">
              Apply Now
            </a>
          </div>
        </div>
      </div>

      <div className="tf__footer">
        <div className="tf__footer_overlay pt_225">
          <div className="container">
            <div className="tf__footer_2_content_area">
              <div className="row justify-content-between">
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_logo_area">
                    <Link className="footer_logo" href="/">
                      <img src="/images/logowhite-01.png" alt="Eduor" className="img-fluid w-100" />
                    </Link>
                    <p>
                    Explore Hayle Barise and unlock your potential.
                    </p>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                     
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                     
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Quick Links</h3>
                    <ul>
                    <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/courses">Course</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Our Contacts</h3>
                    <p>Adress:  {companyProfile.address}</p>
                    <p>
                      <span> Phone: {companyProfile.contact}</span>
                      {/* <span>Fax: +8 846512 456 788</span> */}
                    </p>
                    <p>
                      <span>Email: {companyProfile.email} </span>
                     
                    </p>
                    <p> <span>Website: {companyProfile.website}</span></p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>News Letter</h3>
                    <p>
                      Our approach to itis unique around know work an we know
                      Get hands on the you like
                    </p>
                    <form>
                      <input type="text" placeholder="Your Email" />
                      <button>send</button>
                    </form>
                  </div>
                </div>

                <div className="col-12">
                  <div className="tf__copyright">
                    <p>Copyright ©Xeyle Bariise all rights reserved.</p>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection2;
