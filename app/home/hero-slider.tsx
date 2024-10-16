"use client";
import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

const sliders = [
  "https://i.ibb.co/TMXhmfM/img3.jpg",
  "https://i.ibb.co/TMXhmfM/img3.jpg",
  "https://i.ibb.co/TMXhmfM/img3.jpg",
];
const HeroSlider = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="hero-slider">
      <Slider {...settings} >
        {sliders.map((item, index) => (
          <div className="w-full  rounded-b-md h-[500px]" key={index}>
            <Image
              src={item}
              alt="slider"
              width={1500}
              height={1000}
              className="h-[500px] w-full rounded-b-md  object-center"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
