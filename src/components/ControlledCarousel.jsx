import { useState } from "react";
import { Carousel, CarouselCaption } from "react-bootstrap";

export const ControlledCarousel = ({ images, captions,slide=true,fade=false }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect} slide={slide} fade={fade}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image} alt={captions[index]} />
            <CarouselCaption className="caption">
              <p>{captions[index]}</p>
            </CarouselCaption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};
