import React from "react";
import "./style.css";

function MiaParallax() {
  window.addEventListener("scroll", function (e) {
    let top = this.pageYOffset;

    let layers = document.getElementsByClassName("parallax");
    let layer, speed, yPos;
    for (var i = 0; i < layers.length; i++) {
      if (top < 420) {
        layer = layers[i];
        speed = layer.getAttribute("data-speed");
        yPos = -((top * speed) / 100);
        layer.setAttribute(
          "style",
          "transform: translate3d(0px, " + yPos + "px, 0px)"
        );
      }
    }
  });

  return (
    <>
      <div id="parallax-wrapper">
        {/* sky layer */}
        <img
          alt="layer-1"
          src={require("../../assets/images/Mia/layer-1.png")}
          className="parallax"
          data-speed="11"
        />
        {/* back mountains */}
        <img
          alt="layer-2"
          src={require("../../assets/images/Mia/layer-2.png")}
          className="parallax"
          data-speed="16"
        />
        {/* second mountains */}
        <img
          alt="layer-3"
          id="layer-3"
          src={require("../../assets/images/Mia/layer-3.png")}
          className="parallax"
          data-speed="19"
        />
        {/* faded trees */}
        <img
          alt="layer-4"
          id="layer-4"
          src={require("../../assets/images/Mia/layer-4.png")}
          className="parallax"
          data-speed="30"
        />
        {/* less faded trees */}
        <img
          alt="layer-5"
          id="layer-5"
          src={require("../../assets/images/Mia/layer-5.png")}
          className="parallax"
          data-speed="59"
        />
        {/* front trees */}
        <img
          alt="layer-6"
          id="layer-6"
          src={require("../../assets/images/Mia/layer-6.png")}
          className="parallax"
          data-speed="159"
        />
        {/* text */}
        {/* <img
          alt="layer-7"
          src={require("../../assets/images/Mia/layer-7.png")}
          className="parallax"
          data-speed="-35"
        /> */}
      </div>
    </>
  );
}

export default MiaParallax;
