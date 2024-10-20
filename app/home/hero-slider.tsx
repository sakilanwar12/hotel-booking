"use client";

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
    dots: false,
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
            <div className="h-[550px] w-full lg:h-[600px] ">
              <Image
                src={item}
                alt="hero"
                width={1200}
                height={600}
                className="h-full w-full object-cover object-center "
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="-mt-[318px] grid grid-cols-2 gap-2 px-3 lg:grid-cols-4 lg:gap-6 lg:px-20">
        <CategoryCard
          href="#"
          title="Extra Savings  with Meem Credit Cards"
          image="/images/all/img-2.jpg"
        />
        <CategoryCard
          href="#"
          title="Extra Savings  with Meem Credit Cards"
          image="/images/all/img-2.jpg"
        />
        <CategoryCard
          href="#"
          title="Extra Savings  with Meem Credit Cards"
          image="/images/all/img-2.jpg"
        />
        <CategoryCard
          href="#"
          title="Extra Savings  with Meem Credit Cards"
          image="/images/all/img-2.jpg"
        />
      </div>
    </div>
  );
};

export default HeroSlider;
