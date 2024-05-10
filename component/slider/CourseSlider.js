"use client";
import { courseDataArray } from "@/data/Data";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { CalendarDays } from "lucide-react";
import { FaCalendar } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";

const CourseSlider = ({Course,handleShow}) => {
  return (
    <Slider
      className="row event_slider"
      slidesToShow={3} // Set the number of slides to show
      infinite={true}
      dots={true}
      arrows={false}
      autoplay={false}
      slidesToScroll={1} // Set to 1 to scroll one slide at a time
      responsive={[
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ]}
    >
      {Course?.slice(0,5).map((item) => (
            <div className="col-xl-4 col-md-6 wow fadeInUp" key={item.id}>
              <div className="tf__single_courses">
                <div className="tf__single_courses_img">
                  <img
                    src={item.image?.url}
                    alt="Image course"
                    className="img-fluid w-100"
                  />
                  {/* <a className={`categories ${item.color}`} href="#">
                    {item.category}
                  </a> */}
                  {/* <span>{item.price}</span> */}
                </div>
                {/* <ul className="tf__single_course_header">
                  <li>
                    <i className="fas fa-user"></i> {item.instructor}
                  </li>
                  <li>
                    <i className="fas fa-folder-open"></i> {item.lessons}
                  </li>
                </ul> */}
                <div className="tf__single_courses_text">
                  <p className="title">{item.title}</p>
                  <div className="row mt-3">
                    {/* <div></ */}
                    <div className="col-6 d-flex">
                      <div>
                        {/* <FaCalendar
                          style={{ fontSize: "24px", color: "#4c75ae" }}
                        /> */}
                        <CalendarDays size={"30px"} color="#3bb995" />
                      </div>
                      <div className="mx-1">
                        <p style={{ fontSize: "14px",textTransform:"uppercase",fontWeight:"bold" }}>
                          Start Date
                        </p>
                        <p style={{ fontSize: "12px", color: "#4c75ae" }}>
                          {item?.startDate}
                        </p>
                      </div>
                    </div>
                    <div className="col-6 d-flex">
                      <div>
                        <GiDuration
                          style={{ fontSize: "30px", color: "#3bb995" }}
                        />
                      </div>
                      <div className="mx-1">
                        <p style={{ fontSize: "14px",textTransform:"uppercase",fontWeight:"bold" }}>
                          Duration
                        </p>
                        <p style={{ fontSize: "12px", color: "#4c75ae" }}>
                          {item?.Duration}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    {/* <div></ */}
                    <div className="col-6 d-flex">
                      <div>
                        <PiCertificateFill
                          style={{ fontSize: "30px", color: "#3bb995" }}
                        />
                      </div>
                      <div className="mx-1">
                        <p style={{ fontSize: "14px",textTransform:"uppercase",fontWeight:"bold"}}>
                          Study Mode
                        </p>
                        <p style={{ fontSize: "12px", color: "#4c75ae" }}>
                          {item?.studyMode}
                        </p>
                      </div>
                    </div>
                    <div className="col-6 d-flex">
                      <div>
                        <MdOutlineAccessTimeFilled
                          style={{ fontSize: "30px", color: "#3bb995" }}
                        />
                      </div>
                      <div className="mx-1">
                        <p style={{ fontSize: "14px",textTransform:"uppercase",fontWeight:"bold" }}>
                          Weekly Study
                        </p>
                        <p style={{ fontSize: "12px", color: "#4c75ae" }}>
                          {item?.WeaklyStudy}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button
                      type="button"
                      class="btn "
                      onClick={() => handleShow(item)}
                      style={{
                        border: "1px solid #4c75ae",
                        borderRadius: "4px",
                        color: "#4c75ae",
                        
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </Slider>
  );
};

export default CourseSlider;
