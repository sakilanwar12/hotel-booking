import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import Typography from "@/components/ui/typography";
import { Resturant } from "@/data/resturant";
import { Check, Clock, Laugh, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResturantCard = ({ item }: { item: Resturant }) => {
  const {
    title,
    permalink,
    image,
    rating,
    reviews,
    price,
    discountedPrice,
    distance,
    storeStatus,
    location,
    services,
  } = item;
  return (
    <Card>
      <CardContent>
        <Link href={permalink}>
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="h-fit w-full rounded object-cover"
          />
        </Link>
        <div className="flex justify-between">
          <Typography as="h3">
            <Link href={permalink}>{title}</Link>
          </Typography>
          <div className="rounded-br-md rounded-tl-md bg-default-400 px-5 text-lg font-bold text-default-900">
            {rating}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-default-900" />
            <span className="text-sm font-medium text-default-900">
              {distance}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Laugh className="h-5 w-5 text-default-900" />
            <span className="text-sm font-medium text-default-900">
              {storeStatus}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="la:truck-pickup" className="h-5 w-5 text-default-900" />
            <span className="text-sm font-medium text-default-900 line-through">
              {price}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-default-900" />
            <span className="text-sm font-medium text-default-900">
              Pick up here
            </span>
          </div>
        </div>
        <Typography as="p" className="mt-4 flex items-center gap-1 justify-center">
          <MapPin className="h-5 w-5 text-default-900" />
          {location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResturantCard;
