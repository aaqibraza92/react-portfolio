import React from "react";
import { Link } from "react-router-dom";

const MenuNav = (props) => {
    const closeFn=(status)=>{
        props.closeCallback(status);        

    }
  return (
    <>
      <button onClick={()=>closeFn(false)}>
      <svg
        className="closeAction d-flex justify-content-end"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 13.426 13.423"
      >
        <path
          id="Icon_ionic-ios-close"
          data-name="Icon ionic-ios-close"
          d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z"
          transform="translate(-11.285 -11.289)"
          fill="#fffefe"
        />
      </svg>
      </button>
   

      <div className="menuWrapper h-100 d-flex align-items-center justify-content-center">
        <div className="tiles">
          <div className="tiles__line">
            <div
              className="tiles__line-img tiles__line-img--large"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/4.24fd614c.jpg"})`,
              }}
            ></div>
            <div
              className="tiles__line-img"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/6.786c7db4.jpg"})`,
              }}
            ></div>
            <div
              className="tiles__line-img"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/4.24fd614c.jpg"})`,
              }}
            ></div>
            <div
              className="tiles__line-img tiles__line-img--large"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/6.786c7db4.jpg"})`,
              }}
            ></div>
            <div
              className="tiles__line-img"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/4.24fd614c.jpg"})`,
              }}
            ></div>
            <div
              className="tiles__line-img"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/4.24fd614c.jpg"})`,
              }}
            ></div>
          </div>
          <div className="tiles__line">
            <div
              className="tiles__line-img"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/4.24fd614c.jpg"})`,
              }}
            ></div>
            <div
              className="tiles__line-img"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/4.24fd614c.jpg"})`,
              }}
            ></div>
            <div
              className="tiles__line-img tiles__line-img--large"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/4.24fd614c.jpg"})`,
              }}
            ></div>
            <div
              className="tiles__line-img"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/4.24fd614c.jpg"})`,
              }}
            ></div>
            <div
              className="tiles__line-img"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/4.24fd614c.jpg"})`,
              }}
            ></div>
            <div
              className="tiles__line-img tiles__line-img--large"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/4.24fd614c.jpg"})`,
              }}
            ></div>
          </div>
          <div className="tiles__line">
            <div
              className="tiles__line-img"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/4.24fd614c.jpg"})`,
              }}
            ></div>
            <div
              className="tiles__line-img tiles__line-img--large"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/4.24fd614c.jpg"})`,
              }}
            ></div>
            <div
              className="tiles__line-img"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/4.24fd614c.jpg"})`,
              }}
            ></div>
            <div
              className="tiles__line-img"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/4.24fd614c.jpg"})`,
              }}
            ></div>
            <div
              className="tiles__line-img tiles__line-img--large"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/4.24fd614c.jpg"})`,
              }}
            ></div>
            <div
              className="tiles__line-img"
              style={{
                backgroundImage: `url(${"https://tympanus.net/Development/Theodore/4.24fd614c.jpg"})`,
              }}
            ></div>
          </div>
        </div>

        <ul className="pl0 text-center noUl fullNav">
          <li className="active-nav">
            <Link
              to="/services"
              className="fw700 fs80 colorWhite position-relative text-capitalize hover-target"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="fw700 fs80 colorWhite position-relative text-capitalize"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="fw700 fs80 colorWhite position-relative text-capitalize"
            >
              Industries
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="fw700 fs80 colorWhite position-relative text-capitalize"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className="fw700 fs80 colorWhite position-relative text-capitalize"
            >
              Contact Us
            </Link>
          </li>
        </ul>
     
    
      </div>
    </>
  );
};

export default MenuNav;
