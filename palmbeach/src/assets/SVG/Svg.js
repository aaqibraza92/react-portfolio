const Svg = {
  navbar: (
    <>
      <svg
        width="48"
        height="12"
        viewBox="0 0 48 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="2" fill="black" />
        <rect y="10" width="26.8235" height="2" fill="black" />
      </svg>
    </>
  ),
  forwardarrow: (props) => {
    return (
      <svg
        width="21"
        height="15"
        viewBox="0 0 31 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.0607 13.0607C30.6464 12.4749 30.6464 11.5251 30.0607 10.9393L20.5147 1.3934C19.9289 0.807612 18.9792 0.807612 18.3934 1.3934C17.8076 1.97918 17.8076 2.92893 18.3934 3.51472L26.8787 12L18.3934 20.4853C17.8076 21.0711 17.8076 22.0208 18.3934 22.6066C18.9792 23.1924 19.9289 23.1924 20.5147 22.6066L30.0607 13.0607ZM0 13.5H29V10.5H0V13.5Z"
          fill={props.color}
        />
      </svg>
    );
  },

  PlayVideo: (
    <>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13 10L22 16L13 22V10Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  ),
  Cross: (
    <>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5945 2.36359L7.9585 5.99992L11.5945 9.63608C12.1353 10.1771 12.1353 11.0535 11.5945 11.5946C11.3242 11.8648 10.9699 12 10.6158 12C10.2611 12 9.90682 11.865 9.6368 11.5946L6.00006 7.95798L2.36359 11.5945C2.0934 11.8647 1.73908 12 1.38466 12C1.03034 12 0.676261 11.865 0.405829 11.5945C-0.135001 11.0537 -0.135001 10.1773 0.405829 9.63604L4.04168 5.99988L0.405623 2.36359C-0.135208 1.82276 -0.135208 0.946142 0.405623 0.405312C0.946349 -0.135104 1.82245 -0.135104 2.36338 0.405312L6.00002 4.04164L9.63639 0.405312C10.1774 -0.135104 11.0536 -0.135104 11.5942 0.405312C12.1353 0.946142 12.1353 1.82276 11.5945 2.36359Z"
          fill="white"
        />
      </svg>
    </>
  ),

  arrowForward: (
    <>
      <svg
        width="30"
        height="20"
        viewBox="0 0 19 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.1716 0.464318L18.3536 3.6463C18.5488 3.84156 18.5488 4.15814 18.3536 4.3534L15.1716 7.53539C14.9763 7.73065 14.6597 7.73065 14.4645 7.53539C14.2692 7.34012 14.2692 7.02354 14.4645 6.82828L16.7929 4.49985H0V3.49985H16.7929L14.4645 1.17142C14.2692 0.976162 14.2692 0.65958 14.4645 0.464318C14.6597 0.269056 14.9763 0.269056 15.1716 0.464318Z"
          fill="#000"
        />
      </svg>
    </>
  ),

  fb:(
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0001 0.041626C4.47724 0.041626 0 4.51886 0 10.0417C0 14.995 3.60522 19.0972 8.33225 19.8916V12.128H5.91994V9.33417H8.33225V7.27413C8.33225 4.88389 9.79213 3.58135 11.9247 3.58135C12.9461 3.58135 13.8238 3.65746 14.0786 3.69098V6.18942L12.5995 6.19013C11.44 6.19013 11.2165 6.74102 11.2165 7.54969V9.33274H13.9832L13.6223 12.1265H11.2165V19.9584C16.1642 19.3562 20 15.1495 20 10.0388C20 4.51886 15.5228 0.041626 10.0001 0.041626Z" fill="#010002"/>
</svg>

  ),

  tw:(
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6169 0.00896646C18.763 0.611275 17.8176 1.07195 16.8171 1.37324C16.28 0.755757 15.5663 0.318104 14.7725 0.119469C13.9786 -0.0791667 13.1429 -0.0292013 12.3784 0.262607C11.6138 0.554416 10.9573 1.07399 10.4977 1.75105C10.0381 2.42812 9.7975 3.23001 9.80847 4.04827V4.93995C8.24146 4.98058 6.68873 4.63305 5.28855 3.92829C3.88838 3.22354 2.68424 2.18345 1.78336 0.900645C1.78336 0.900645 -1.78336 8.92575 6.24175 12.4925C4.40536 13.739 2.21775 14.364 0 14.2758C8.02511 18.7342 17.8336 14.2758 17.8336 4.02152C17.8328 3.77315 17.8089 3.52539 17.7622 3.28143C18.6723 2.38395 19.3145 1.25082 19.6169 0.00896646Z" fill="black"/>
</svg>

  ),

  arowDown: (
    <>
      <svg
        width="8"
        height="13"
        viewBox="0 0 8 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.21781 9.42145L4.03583 12.6034C3.84057 12.7987 3.52399 12.7987 3.32872 12.6034L0.146743 9.42145C-0.0485195 9.22619 -0.0485195 8.90961 0.146743 8.71434C0.342005 8.51908 0.658588 8.51908 0.85385 8.71434L3.18228 11.0428L3.18228 0L4.18228 4.37112e-08L4.18228 11.0428L6.5107 8.71434C6.70597 8.51908 7.02255 8.51908 7.21781 8.71434C7.41307 8.90961 7.41307 9.22619 7.21781 9.42145Z"
          fill="white"
        />
      </svg>
    </>
  ),
  facebook: (
    <>
      <svg
        width="8"
        height="13"
        viewBox="0 0 8 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.21781 9.42145L4.03583 12.6034C3.84057 12.7987 3.52399 12.7987 3.32872 12.6034L0.146743 9.42145C-0.0485195 9.22619 -0.0485195 8.90961 0.146743 8.71434C0.342005 8.51908 0.658588 8.51908 0.85385 8.71434L3.18228 11.0428L3.18228 0L4.18228 4.37112e-08L4.18228 11.0428L6.5107 8.71434C6.70597 8.51908 7.02255 8.51908 7.21781 8.71434C7.41307 8.90961 7.41307 9.22619 7.21781 9.42145Z"
          fill="white"
        />
      </svg>
    </>
  ),
  twitter: (
    <>
      <svg
        width="8"
        height="13"
        viewBox="0 0 8 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.21781 9.42145L4.03583 12.6034C3.84057 12.7987 3.52399 12.7987 3.32872 12.6034L0.146743 9.42145C-0.0485195 9.22619 -0.0485195 8.90961 0.146743 8.71434C0.342005 8.51908 0.658588 8.51908 0.85385 8.71434L3.18228 11.0428L3.18228 0L4.18228 4.37112e-08L4.18228 11.0428L6.5107 8.71434C6.70597 8.51908 7.02255 8.51908 7.21781 8.71434C7.41307 8.90961 7.41307 9.22619 7.21781 9.42145Z"
          fill="white"
        />
      </svg>
    </>
  ),
  signature: (
    <>
      <svg
        width="180"
        height="172"
        viewBox="0 0 232 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
      >
        <rect width="232" height="124" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#image0_184:1496"
              transform="translate(0 -0.00115207) scale(0.00357143 0.00668203)"
            />
          </pattern>
          <image
            id="image0_184:1496"
            width="280"
            height="150"
            href="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </>
  ),
};

export default Svg;