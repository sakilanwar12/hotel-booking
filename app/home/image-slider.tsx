"use client";
import Image from "next/image";
import Slider from "react-slick";
interface DataProps {
  item: {
    images: string[];
  };
}
const ImageSlider = ({ item }: DataProps) => {
  const settings = {
    arrows:false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="image-slider">
      <Slider {...settings}>
        {item.images.map((img, index: number) => (
          <div
            key={`weeding-slider-img-${index}`}
            className="h-[200px] rounded-md"
          >
            <Image
              src={img}
              alt="hero"
              width={600}
              height={400}
              className="h-full w-full rounded-md object-cover object-center"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
