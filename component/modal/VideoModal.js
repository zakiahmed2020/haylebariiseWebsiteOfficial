"use client";
import { useEduorContext } from "@/context/EduorContext";
import { Modal } from "react-bootstrap";

const VideoModal = () => {
  const { showVideo, handleVideoClose } = useEduorContext();
  // const embedUrl = "https://youtu.be/embed/nbfyjQUbdIQ";
  const embedUrl = "https://www.youtube.com/embed/nbfyjQUbdIQ";
  return (
    <Modal
      show={showVideo.state}
      onHide={handleVideoClose}
      size="lg"
      centered
      className="modal-video"
      id="LKQIY6EGFR9TU"
    >
      <Modal.Header className="vidoe-modal-header" closeButton></Modal.Header>
      <Modal.Body className="modal-video-body">
        <div className="modal-video-inner" id="modal-video-inner-LKQIY6EGFR9TU">
          <div className="modal-video-movie-wrap">
            <iframe
              className="video-modal-iframe"
              src={showVideo.url}
              allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
              llowFullScreen
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VideoModal;
