import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { Resturant } from "@/data/resturant";
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
          <div className="text-lg font-bold text-default-900 bg-default-400 px-5 rounded-br-md rounded-tl-md">{rating}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResturantCard;
