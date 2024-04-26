"use client";
import React from "react";
import ServiceSlider from "../slider/ServiceSlider";

const CategorySection2 = () => {
  return (
    <div className="tf__popular_categories_2">
      <div className="container">
        <div className="tf__popular_categories_2_area pt_95">
          <div className="row wow fadeInUp">
            <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto">
              <div className="tf__heading_area mb_40">
                <h5>Our Best category</h5>
                <h2>We success learning platform creative Service.</h2>
              </div>
            </div>
          </div>
          <ServiceSlider />
        </div>
      </div>
    </div>
  );
};

export default CategorySection2;
