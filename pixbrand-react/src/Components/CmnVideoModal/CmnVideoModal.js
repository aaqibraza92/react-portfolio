import React from "react";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

const VideoModal = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={props.videoID}
        onClose={() => setOpen(false)}
      />

      <button className="noBtn" onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 100 100"
        >
          <g
            id="Group_50346"
            data-name="Group 50346"
            transform="translate(-914 -1128)"
          >
            <circle
              id="Ellipse_2"
              data-name="Ellipse 2"
              cx="50"
              cy="50"
              r="50"
              transform="translate(914 1128)"
              fill="#fff"
            />
            <path
              id="Polygon_2"
              data-name="Polygon 2"
              d="M10.454,2.827a2,2,0,0,1,3.422,0l8.617,14.237A2,2,0,0,1,20.782,20.1H3.548a2,2,0,0,1-1.711-3.036Z"
              transform="translate(976.165 1165.835) rotate(90)"
              fill="#ff0a2b"
            />
          </g>
        </svg>
      </button>
    </React.Fragment>
  );
};

// const ModalVideo = (props) => {
//   return <>

//   </>;
// };

export default VideoModal;
