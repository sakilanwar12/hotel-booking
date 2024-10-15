"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import Typography from "@/components/ui/typography";
import { type Hotel } from "@/data/hotels";
import { Bath, BedDouble, MapPin } from "lucide-react";
import Link from "next/link";

import Image from "next/image";
const HotelCard = ({ item }: { item: Hotel }) => {
  const { id, title, permalink, location, rating, utils, price, images } = item;
  return (
    <Card className="border border-border/40 shadow-lg drop-shadow-2xl">
      <CardContent>
        <div className="relative">
          <Swiper
            className="hotelSlider"
            slidesPerView={1}
            pagination={{
              el: `.hotelSlider-pagination-${id}`,
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {images.map((slideImage, index) => (
              <SwiperSlide key={`item-${index}`} className="h-[230px] w-full">
                <Image
                  src={slideImage}
                  alt="hotel"
                  width={500}
                  height={500}
                  className="h-full w-full rounded-t-md object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute bottom-2 start-1/2 -translate-x-1/2 z-50 bg-black/60 px-2.5 rounded-full ">
            <div className={`hotelSlider-pagination-${id} [&>span]:bg-white/80 [&>span]:w-2.5 [&>span]:h-2.5 [&>span]:rounded-full [&>span]:mx-1 [&>span]:transition-all [&>span]:duration-300 [&>span]:ease-in-out]
            [&>span.swiper-pagination-bullet-active]:bg-white   [&>span.swiper-pagination-bullet-active]:w-3.5
            `}></div>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <Typography as="h3">
            <Link href={permalink}>{title}</Link>
          </Typography>
          <div className="flex items-center gap-1">
            <Icon
              icon="heroicons:star-16-solid"
              className="h-5 w-5 text-danger"
            />
            <Typography as="span">{rating}</Typography>
          </div>
        </div>
        <div className="mt-1 flex items-center gap-1">
          <MapPin className="h-4 w-4 text-default-700" />
          <Typography as="p">{location}</Typography>
        </div>
        <div className="mt-4 flex justify-between">
          <div className="flex items-center gap-1">
            <Badge variant="outline">
              <BedDouble className="h-3.5 w-3.5 text-default-700" />{" "}
              {utils?.bed} beds
            </Badge>
            <Badge variant="outline">
              <Bath className="h-3.5 w-3.5 text-default-700" /> {utils?.bath}{" "}
              Baths
            </Badge>
          </div>
          <Button size="icon" className="bg-danger/10 hover:bg-danger/20">
            <Icon
              icon="heroicons:heart-20-solid"
              className="h-5 w-5 text-danger"
            />
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between">
          <Typography as="span">${price}</Typography>
          <Typography as="span">per night</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
