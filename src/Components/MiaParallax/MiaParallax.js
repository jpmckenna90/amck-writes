import React from "react";
import "./style.css";
import { Parallax } from "react-scroll-parallax";

function MiaParallax() {
  // window.addEventListener("scroll", function (e) {
  //   let top = this.pageYOffset;

  //   let layers = document.getElementsByClassName("parallax");
  //   console.log(layers)
  //   let layer, speed, yPos;
  //   for (var i = 0; i < layers.length; i++) {
  //     if (top < 420) {
  //       layer = layers[i];
  //       speed = layer.getAttribute("data-speed");
  //       yPos = -((top * speed) / 100);
  //       layer.setAttribute(
  //         "style",
  //         "transform: translate3d(0px, " + yPos + "px, 0px)"
  //       );
  //     }
  //   }
  // });

  return (
    <>
      <div id="parallax-wrapper">
        {/* sky layer */}
        {/* <Parallax offsetYMin={-100} offsetYMax={100}> */}
          <img
            alt="layer-1"
            id="layer-1"
            src={require("../../assets/images/new-images/Mia-7.png")}
            className="parallax"
            data-speed="11"
          />
        {/* </Parallax> */}
        {/* back mountains */}
        <img
          alt="layer-2"
          id="layer-2"
          src={require("../../assets/images/new-images/Mia-6.png")}
          className="parallax"
          data-speed="16"
        />
        {/* second mountains */}
        <img
          alt="layer-3"
          id="layer-3"
          src={require("../../assets/images/new-images/Mia-5.png")}
          className="parallax"
          data-speed="19"
        />
        {/* faded trees */}
        <img
          alt="layer-4"
          id="layer-4"
          src={require("../../assets/images/new-images/Mia-4.png")}
          className="parallax"
          data-speed="30"
        />
        {/* less faded trees */}
        <img
          alt="layer-5"
          id="layer-5"
          src={require("../../assets/images/new-images/Mia-3.png")}
          className="parallax"
          data-speed="59"
        />
        {/* front trees */}
        <img
          alt="layer-6"
          id="layer-6"
          src={require("../../assets/images/new-images/Mia-2.png")}
          className="parallax"
          data-speed="20"
        />
        {/* text */}
        <img
          alt="layer-7"
          src={require("../../assets/images/new-images/Mia-1.png")}
          className="parallax"
          data-speed="-35"
        />
      </div>
    </>
  );
}

export default MiaParallax;
