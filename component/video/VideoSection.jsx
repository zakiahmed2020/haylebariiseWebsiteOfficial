"use client";
import { useEduorContext } from "@/context/EduorContext";

const VideoSection = () => {
  const { handleVideoShow } = useEduorContext();

  const videos = [
    {
    url:"https://www.youtube.com/embed/nbfyjQUbdIQ",
    title:"HBTDC in Media"
  },
  {
    url:"https://www.youtube.com/embed/lrp1gzCA2BE?si=wTZ5ZGGC_1Yc4iRw",
    title:"Somalia School Offers Job Training, Hope to Women"
  },
  {
    url:"https://www.youtube.com/embed/F7Ai04ytyOY?si=tu2vVsPC86SFzVHt",
    title:"HBTDC in Media 2"
  },
]

  return (
    <>
    <section className="tf__video mt_100 mb-4">
      <div className="tf__video_overlay pt_100 pb_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 m-auto wow fadeInUp">
              <div className="tf__video_text">
                <a
                  className="venobox play_btn"
                  role="button"
                  onClick={()=>handleVideoShow()}
                >
                  <i className="fas fa-play"></i>
                </a>
                <h4>HBTDC in Media</h4>
                <p>Female Electrician In Somalia from HBTDC.</p>
                <a className="common_btn" href="#">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container mx-auto">
      <div className="row">
     {
      videos.map((video,index)=>(
        <div className="col-sm-12 col-md-4" key={index}>
        <div className="tf__video_item wow fadeInUp">
          <div className="tf__video_item_img">
            <iframe
              width="100%"
              height="300"
              className="border border-success rounded-2"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>  
        </div>
        </div>
      ))
     }
      </div>
    </section>
    </>
  );
};

export default VideoSection;
