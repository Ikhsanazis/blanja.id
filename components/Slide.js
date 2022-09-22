import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Slider() {
  const slider = [
    { image: "/images/slidepict1.png" },
    { image: "/images/slidepict2.png" },
    { image: "/images/slidepict1.png" },
    { image: "/images/slidepict2.png" },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="">
      <div className="col-12">
        <div className="">
          <div className="mt-5">
            <Carousel centerMode={true} responsive={responsive} showDots>
              {slider.map((item, index) => (
                <div key={index} className="mx-1 mb-3">
                  <Image
                    src={item.image}
                    alt="trend"
                    width={456}
                    height={180}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
