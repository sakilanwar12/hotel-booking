"use client";

import Slider from "react-slick";
import Image from "next/image";
import { VenuesData } from "@/data/venues";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
interface DataProps {
  data: VenuesData[];
}

const Sliders = ({ data }: DataProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slick-gap custom-slick-arrow">
      <Slider {...settings}>
        {data.map((item, index) => {
          const {
            title,
            permalink,
            image,
            ratting,
            location,
            promotion,
            offer,
            amount,
            peoples,
            tea,
            rooms,
            count,
          } = item;
          return (
            <Card className="shadow-none " key={index}>
              <CardContent className="p-4">
                <Link
                  href={permalink}
                  className="block h-[180px] overflow-hidden rounded-md"
                >
                  <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    className="h-full w-full rounded-md object-cover transition-all duration-300 hover:scale-125"
                  />
                </Link>
                <Link href={permalink} className="mt-4 block">
                  <h3 className="text-lg font-medium text-default-900 hover:text-primary">
                    {title}
                  </h3>
                </Link>
                <div className="mt-3 flex items-center gap-2.5">
                  <Icon
                    icon="heroicons:star-16-solid"
                    className="h-4 w-4 flex-none text-yellow-400"
                  />
                  <div>
                    <span className="text-default-800">{ratting}</span>
                    <span className="text-default-700">(15)</span>
                  </div>
                  <div className="text-sm text-default-800">.{location}</div>
                </div>
                <div className="mt-2 flex items-center gap-2.5">
                  <Icon
                    icon="iconoir:pin-solid"
                    className="h-4 w-4 flex-none text-danger"
                  />
                  <span>{promotion} promotion</span>
                  <span>{offer}</span>
                </div>
                <div className="mt-2 flex justify-between">
                  <div className="flex items-center gap-1">
                    <Icon
                      icon="heroicons:currency-dollar"
                      className="h-4 w-4 text-default-900"
                    />
                    <span className="text-sm text-default-700">
                      From ${amount}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon
                      icon="heroicons:user-group"
                      className="h-4 w-4 text-default-900"
                    />
                    <span className="text-sm text-default-700">
                      {peoples.from} to {peoples.to}
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2.5">
                  <Badge variant="outline">{tea} tea people</Badge>
                  <Badge variant="outline">{rooms} Rooms</Badge>
                  <Badge variant="outline">+{count} more</Badge>
                </div>
                <p className="mt-4 flex items-center gap-1 text-sm text-default-700">
                  <Icon
                    icon="entypo:shareable"
                    className="h-4 w-4 text-primary"
                  />
                  Respond within 24 hours
                </p>
              </CardContent>
            </Card>
          );
        })}
      </Slider>
    </div>
  );
};

export default Sliders;
