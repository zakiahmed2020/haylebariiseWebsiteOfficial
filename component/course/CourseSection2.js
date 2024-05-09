"use client";
// import { courseDataArray } from "@/data/Data";
// import Link from "next/link";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { CalendarDays } from "lucide-react";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaCalendar } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
const CourseSection2 = () => {
  const [Course, setCourse] = useState([]);
  const [CourseDetail, setCourseDetail] = useState({});
  const [inputValues, setinputValues] = useState({});
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    async function getCourse() {
      try {
        const getData = await fetch(
          "https://haylebariiseapi.up.railway.app/course"
        );
        const res = await getData.json();
        setCourse(res);
      } catch (error) {
        console.log("err");
      }
    }
    getCourse();
  }, []);

  const [show, setShow] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    console.log(data);
    setShow(true);
    setCourseDetail(data);
  };
  const handleChangeinput = (e) => {
    setinputValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...inputValues, courseId: CourseDetail._id };
    try {
      setisLoading(true);
      fetch("https://haylebariiseapi.up.railway.app/regestration", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data);

      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  };
  return (
    <section className="tf__courses_2 tf__courses_3 mt_110">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_20">
              <h5>OUR POPULAR COURSES</h5>
              <h2>Educational For Students Popular Courses.</h2>
            </div>
          </div>
        </div>
        <div className="row">
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
        </div>
      </div>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>{CourseDetail.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="tf__courses_details ">
            <div className="container">
              <div className="row">
                {/* col-xl-8 col-lg-8 */}
                <div className="col-12">
                  <div className="tf__courses_details_area">
                    <div className="tf__courses_details_img">
                      <img
                        src={CourseDetail.image?.url}
                        alt="courses"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="tf__courses_details_header d-flex flex-wrap align-items-center">
                      <ul className="text d-flex flex-wrap align-items-center">
                        <div className="img">
                          <img
                            src={CourseDetail.lecturerImg?.url}
                            alt="instuuctor"
                            className="img-fluid w-100"
                          />
                        </div>
                        <li className="mx-2">
                          <h4>author</h4>
                          <p>{CourseDetail.lecturer}</p>
                        </li>
                        <li>
                          <h4>start Date</h4>
                          <p>{CourseDetail.startDate}</p>
                        </li>
                        <li>
                          <h4>Duration</h4>
                          <p>{CourseDetail.Duration}</p>
                        </li>
                        <li>
                          <h4>Study Mode</h4>
                          <p>{CourseDetail.studyMode}</p>
                        </li>

                        {/* <li>
                    <a className="common_btn" href="#">
                      enrole
                    </a>
                  </li> */}
                      </ul>
                    </div>
                    <Box sx={{ width: "100%", typography: "body1" }}>
                      <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                          <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                          >
                            <Tab label="Module" value="1" />
                            <Tab label="summary" value="3" />
                            <Tab label="requirements" value="2" />
                            <Tab label="Enrole" value="4" />
                          </TabList>
                        </Box>
                        <TabPanel value="1">
                          {CourseDetail?.Criculum?.map((data) => {
                            return <li>- {data}</li>;
                          })}
                        </TabPanel>
                        <TabPanel value="3">{CourseDetail?.summary}</TabPanel>
                        <TabPanel value="2">
                          {CourseDetail?.requirements}
                        </TabPanel>
                        <TabPanel value="4">
                          <form onSubmit={handleSubmit}>
                            <input
                              type="text"
                              onChange={handleChangeinput}
                              id="name"
                              placeholder="fullname"
                            />
                            <input
                              type="email"
                              className="mt-2"
                              onChange={handleChangeinput}
                              id="email"
                              placeholder="email"
                            />
                            <input
                              type="number"
                              className="my-2"
                              onChange={handleChangeinput}
                              id="phone"
                              placeholder="phone"
                            />
                            <input
                              type="text"
                              onChange={handleChangeinput}
                              id="address"
                              placeholder="address"
                            />
                            <button
                              disabled={isLoading}
                              type="submit"
                              className="btn"
                            >
                              {" "}
                              {isLoading ? "..." : "Enrole"}
                            </button>
                          </form>
                        </TabPanel>
                      </TabContext>
                    </Box>
                  </div>
                </div>
                {/* <div className="col-xl-4 col-lg-4">
            <div className="tf__sidebar" id="sticky_sidebar">
              <div className="tf__sidebar_search">
                <form>
                  <input type="text" placeholder="Search..." />

                </form>
              </div>
              <div className="tf__sidebar_blog sidebar_item">
                <h3>popular courses</h3>
                <ul>
                  {Course.map((item) => (
                    <li key={item.id}>
                      <div className="img">
                        <img
                          src={item.image?.url}
                          alt="course img"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        <p>
                          <i className="fa fa-calendar-alt"></i>{item?.startDate}
                        </p>
                       {item?.title}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tf__sidebar_category sidebar_item">
                <h3>Categories</h3>
                <ul>
                  <li>
                    <a href="#">
                      {" "}
                      Business <span>(08)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Maintenance <span>(14)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Professional <span>(20)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Technology<span>(29)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Single-Business<span>(32)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Innovation <span>(22)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
              </div>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default CourseSection2;
