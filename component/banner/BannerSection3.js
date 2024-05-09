"use client";
import getLanguageJSON from "@/app/Language/page";
import { useEduorContext } from "@/context/EduorContext";
import Link from "next/link";

const BannerSection3 = () => {
  const { handleVideoShow } = useEduorContext();
  const Language=getLanguageJSON()
  // console.log(Language.Banner)
  return (
    <section
      className="tf__banner_2 tf__banner_3"
      style={{ marginTop: "-60px" }}
    >
      <div className="container">
        <div className="row" style={{ marginBottom: "20px" }}>
          <div className="col-xl-8 col-md-10 col-lg-8">
            <div className="tf__banner_text wow fadeInUp ">
              <h5>{Language?.Banner?.h5}</h5>
              <h1>
              {Language?.Banner?.h1}
              </h1>
              <p>
              {Language?.Banner?.p}
              </p>
              <ul className="d-flex flex-wrap align-items-center">
                <li>
                  <Link className="common_btn_3" href="/courses">
                  {Language?.Banner?.Link}
                  </Link>
                </li>
                <li>
                  <a
                    className="venobox play_btn"
                    role="button"
                    onClick={handleVideoShow}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection3;
