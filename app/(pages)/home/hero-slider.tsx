"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const HeroSlider = () => {
  const sliders = [
    "/images/all/hero-1.png",
    "/images/all/hero-2.png",
    "/images/all/hero-3.png",
    "/images/all/hero-4.png",
  ];
  return (
    <div className="relative">
        
      <Swiper
        pagination={{
          el: ".hero-pagination",
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
      >
        {sliders.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-[500px] w-full rounded-b-md overflow-hidden">
              <Image
                src={item}
                alt="slider"
                width={1500}
                height={500}
                className="h-full w-full rounded-b-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hero-pagination absolute bottom-4 start-1/2 z-50 flex -translate-x-1/2 justify-center gap-3 [&>span]:h-3 [&>span]:w-3 [&>span]:cursor-pointer [&>span]:rounded-full [&>span]:bg-white [&>span]:transition-all [&>span]:duration-300"></div>
    </div>
  );
};

export default HeroSlider;
