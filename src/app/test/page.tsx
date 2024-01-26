'use client';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Test = () => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false}>
        <div>
          <img src="banner/b (1).png" />
        </div>
        <div>
          <img src="banner/b (2).png" />
        </div>
        <div>
          <img src="banner/b (3).png" />
        </div>
      </Carousel>
    </div>
  );
};

export default Test;
