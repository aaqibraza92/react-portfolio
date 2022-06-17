import React, { useEffect} from "react";
import $ from "jquery";

const Marque = () => {
  useEffect(() => {
    $(window).on("load resize scroll", function () {
      $(".scrollmover").each(function () {
        var windowTop = $(window).scrollTop();
        var elementTop = $(this).offset().top;
        var leftPosition = windowTop - elementTop;
        $(this).find(".textMover").css({ left: leftPosition });
      });

      $(".posRightLeft").each(function () {
        var windowTop = $(window).scrollTop();
        var elementTop = $(this).offset().top;
        var rightPos = windowTop - elementTop;
        $(this).find(".textMover").css({ right: rightPos });
      });
    });
  }, []);
  return (
    <>
      <div className="scrollmover mb0">
        <span className="textMover fs110 fThin mobFs45">
          <span className="numb position-relative fThin">1</span> Mobile Design
          & Development
        </span>

        <span className="textMover fs110 fThin mobFs45">
          <span className="numb position-relative fThin">2</span> Website Design
          & Development
        </span>
        <span className="textMover fs110 fThin mobFs45">
          <span className="numb position-relative fThin">3</span> Mobile Design
          & Development
        </span>
      </div>

      <div className="posRightLeft mb80">
        <span className="textMover fs110 fThin mobFs45">
          <span className="numb position-relative fThin">4</span> Mobile Design
          & Development
        </span>

        <span className="textMover fs110 fThin mobFs45">
          <span className="numb position-relative fThin">5</span> Website Design
          & Development
        </span>

        <span className="textMover fs110 fThin ">
          <span className="numb position-relative fThin">6</span> Website Design
          & Development
        </span>
      </div>
    </>
  );
};

export default Marque;
