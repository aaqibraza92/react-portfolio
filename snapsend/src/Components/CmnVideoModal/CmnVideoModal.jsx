import React from "react";
import { useState } from "react";
import ModalVideo from "react-modal-video";
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

      <button onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <g
            id="Group_52298"
            data-name="Group 52298"
            transform="translate(-494 -580)"
          >
            <g
              id="Group_52237"
              data-name="Group 52237"
              transform="translate(494 580)"
            >
              <g
                id="Ellipse_96"
                data-name="Ellipse 96"
                fill="none"
                stroke="#fff"
                stroke-width="2"
              >
                <circle cx="24" cy="24" r="24" stroke="none" />
                <circle cx="24" cy="24" r="23" fill="none" />
              </g>
            </g>
            <path
              id="Polygon_2"
              data-name="Polygon 2"
              d="M8.607,0l8.607,14.084H0Z"
              transform="translate(525.825 596.175) rotate(90)"
              fill="#fff"
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
