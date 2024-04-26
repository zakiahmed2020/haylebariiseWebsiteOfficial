"use client";
import { useEduorContext } from "@/context/EduorContext";
import Link from "next/link";
import React from "react";

const AllEventSection = () => {
  const {
    currentEventItems,
    currentEventPage,
    handleEventPageChange,
    totalEventPages,
  } = useEduorContext();
  return (
    <section className="tf__event_page mt_190 xs_mt_95">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5>OUR Upcoming Events</h5>
              <h2>Complete About Students Advance Course.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {currentEventItems.map((item) => (
            <div className="col-xl-4 col-md-6 wow fadeInUp" key={item.id}>
              <div className="tf__single_event">
                <div className="tf__single_event_img">
                  <img
                    src={item.imgSrc}
                    alt="event"
                    className="img-fluid w-100"
                  />
                  <a className={`event_category ${item.color}`} href="#">
                    {item.category}
                  </a>
                </div>
                <div className="tf__single_event_text">
                  <ul>
                    <li>
                      <i className="far fa-map-marker-alt"></i> {item.location}
                    </li>
                    <li>
                      <i className="far fa-clock"></i> {item.time}
                    </li>
                  </ul>
                  <Link className="title" href={`/events/${item.slug}`}>
                    {item.title}
                  </Link>
                  <p>{item.desc}</p>
                  <div className="tf__single_event_footer">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tf__pagination mt_50">
          <div className="row">
            <div className="col-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a
                      className={`page-link ${
                        currentEventPage === 1 ? "disabled" : ""
                      }`}
                      aria-label="Previous"
                      onClick={() =>
                        handleEventPageChange(currentEventPage - 1)
                      }
                    >
                      <i className="far fa-angle-left"></i>
                    </a>
                  </li>
                  {Array.from({ length: totalEventPages }, (_, index) => (
                    <li className="page-item" key={index}>
                      <a
                        className={`page-link ${
                          currentEventPage === index + 1 ? "active" : ""
                        }`}
                        onClick={() => handleEventPageChange(index + 1)}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a
                      className={`page-link ${
                        currentEventPage === totalEventPages ? "disabled" : ""
                      }`}
                      aria-label="Next"
                      onClick={() =>
                        handleEventPageChange(currentEventPage + 1)
                      }
                    >
                      <i className="far fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllEventSection;
