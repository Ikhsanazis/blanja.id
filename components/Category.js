import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Category() {
  const category = [
    { image: "/images/pants.png" },
    { image: "/images/tshirt.png" },
    { image: "/images/shoes.png" },
    { image: "/images/shorts.png" },
    { image: "/images/tie.png" },
    { image: "/images/glasses.png" },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
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
          <div className="">
            <h3 className="mt-3 ms-3">Category</h3>
            <p className="ms-3 text-secondary ">
              What are you currently looking for?
            </p>
          </div>
          <div className="mb-5">
            <Carousel partialVisible responsive={responsive}>
              {category.map((item, index) => (
                <div key={index} className="mx-1 ">
                  <Image
                    src={item.image}
                    alt="category"
                    width={250}
                    height={240}
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

export default Category;
