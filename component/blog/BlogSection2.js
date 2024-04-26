"use client";
// import p from "next/p";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
const BlogSection2 = () => {
  const [blogDetail, setblogDetail] = useState({});

  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getCourse() {
      try {
        const getData = await fetch(
          "https://haylebariiseapi.up.railway.app/blogs"
        );
        const res = await getData.json();
        // console.log(res)
        setBlogs(res);
      } catch (error) {
        console.log(error);
      }
    }
    getCourse();
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    // console.log(data)
    setShow(true);
    setblogDetail(data);
  };

  return (
    <section className="tf__blog_2 mt_95">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5>LATEST NEWS & BLOG</h5>
              <h2>Our latest Blog And News.</h2>
            </div>
          </div>
        </div>
        <div className="">
          {/* <div className="col-xl-5 col-lg-5 wow fadeInLeft">
            <div className="tf__single_blog">
              <p
                className="tf__single_blog_img"
                href={`blog/${Blogs.title}`}
              >
                <img
                  src={Blogs.imgSrc}
                  alt="blog"
                  className="img-fluid w-100"
                />
              </p>
              <div className="tf__single_blog_text">
                <p className="category light_blue" href="/blog">
                  {firstBlog.category}
                </p>
                <p className="title" href={`blog/${firstBlog.slug}`}>
                  {firstBlog.title}
                </p>
                <p>{firstBlog.desc}</p>
                <p className="read_btn" href={`blog/${firstBlog.slug}`}>
                  Read More <i className="fas fa-chevron-circle-right"></i>
                </p>
              </div>
            </div>
          </div> */}
          <div className="">
            <div className="row">
              {Blogs?.map((item) => (
                <div className="col-12 col-md-6 col-lg-4 wow fadeInLeft">
                  <div className="tf__single_blog">
                    <p
                      className="tf__single_blog_img"
                      // href={`blog/${item.title}`}
                    >
                      <img
                        src={item.image?.url}
                        alt="blog"
                        className="img-fluid w-100"
                      />
                    </p>
                    <div className="tf__single_blog_text">
                      {/* <p className="category light_blue" href="/blog">
                  {item.category}
                </p> */}
                      <p className="title">{item.title}</p>

                      <p>{item.description}</p>
                      <button
                        className="read_btn"
                        onClick={() => handleShow(item)}
                      >
                        Read More{" "}
                        <i className="fas fa-chevron-circle-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
          <Modal.Title>{blogDetail.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="tf__blog_details_page mt_195 xs_mt_100">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-8">
                  <div className="tf__blog_details_area">
                    <div className="tf__blog_details_img wow fadeInUp">
                      <img
                        src={blogDetail?.image?.url}
                        alt="blog details"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="tf__blog_details_text wow fadeInUp">
                      <ul className="date d-flex flex-wrap">
                        {/* <li>
                    <i className="far fa-user-edit"></i> {blogDetail.title}
                  </li> */}
                        <li>
                          <i className="fal fa-calendar-alt"></i>{" "}
                          {blogDetail.Date}
                        </li>
                      </ul>

                      <p>{blogDetail.description}</p>
                      {blogDetail?.image2?.url && (
                        <div className="tf__blog_details_center_img">
                          <img
                            src={blogDetail?.image2?.url}
                            alt="blog details"
                            className="img-fluid w-100"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="tf__sidebar" id="sticky_sidebar">
                    <div className="tf__sidebar_blog sidebar_item">
                      <h3>Recent Blogs</h3>
                      <ul>
                        {Blogs?.map((item) => (
                          <li key={item.id}>
                            <div className="img">
                              <img
                                src={item.image?.url}
                                alt="blog"
                                className="img-fluid w-100"
                              />
                            </div>
                            <div className="text">
                              <p>
                                <i className="far fa-calendar-alt"></i>{" "}
                                {item.Date}
                              </p>
                              <p>{item.title}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default BlogSection2;
