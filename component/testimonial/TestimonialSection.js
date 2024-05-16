"use client";
import React from "react";
import TestimonialSlider2 from "../slider/TestimonialSlider2";

const TestimonialSection = () => {
  return (
    <section className="tf___testimonial pt_95 pb_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_50">
              <h5>OUR Testiomonials</h5>
              <h2>What Our Students Say</h2>
            </div>
          </div>
        </div>
        <TestimonialSlider2 />
      </div>
    </section>
  );
};

export default TestimonialSection;
