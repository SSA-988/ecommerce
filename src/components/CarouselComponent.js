import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComponent() {
  return (
    <div>
      <Carousel swipeable={true} autoPlay={true} showArrows={true}>
        <div>
          <img src="https://m.media-amazon.com/images/I/616SqgdNgLL._SX3000_.jpg" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/61dCP8bufeL._SX3000_.jpg" />
        </div>
        <div>
        <img  src="https://m.media-amazon.com/images/I/81NTpbZ58lL._SX3000_.jpg" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
