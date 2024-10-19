"use client";
import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import CategoryCard from "@/components/category-card";

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
      <Slider {...settings}>
        {sliders.map((item, index) => (
          <div key={index}>
            <div
              className="h-[600px] w-full rounded-b-md bg-cover bg-center flex flex-col justify-end"
              style={{ backgroundImage: `url(${item})` }}
            >
              <div className="px-4  grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
                <CategoryCard href="#" title="Extra Savings  with Meem Credit Cards" image="/images/all/branding-1.png" />
                <CategoryCard href="#" title="Extra Savings  with Meem Credit Cards" image="/images/all/branding-1.png" />
                <CategoryCard href="#" title="Extra Savings  with Meem Credit Cards" image="/images/all/branding-1.png" />
                <CategoryCard href="#" title="Extra Savings  with Meem Credit Cards" image="/images/all/branding-1.png" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
