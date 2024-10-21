"use client";

import Slider from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ImageSlider from "./image-slider";
import Typography from "@/components/ui/typography";
import { Icon } from "@/components/ui/icon";

const sliderData = [
  {
    id: 1,
    title: "Jack Films Nagpur",
    location: "Nagpur",
    price: "₹35,000",
    service: "Photo & Video Per Day",
    rating: 5.0,
    reviews: 10,
    enquiryLink: "#",
    contactLink: "#",
    images: [
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
    ],
  },
  {
    id: 2,
    title: "Jack Films Nagpur",
    location: "Nagpur",
    price: "₹35,000",
    service: "Photo & Video Per Day",
    rating: 5.0,
    reviews: 10,
    enquiryLink: "#",
    contactLink: "#",
    images: [
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
    ],
  },
  {
    id: 3,
    title: "Jack Films Nagpur",
    location: "Nagpur",
    price: "₹35,000",
    service: "Photo & Video Per Day",
    rating: 5.0,
    reviews: 10,
    enquiryLink: "#",
    contactLink: "#",
    images: [
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
    ],
  },
  {
    id: 4,
    title: "Jack Films Nagpur",
    location: "Nagpur",
    price: "₹35,000",
    service: "Photo & Video Per Day",
    rating: 5.0,
    reviews: 10,
    enquiryLink: "#",
    contactLink: "#",
    images: [
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
    ],
  },
  {
    id: 5,
    title: "Jack Films Nagpur",
    location: "Nagpur",
    price: "₹35,000",
    service: "Photo & Video Per Day",
    rating: 5.0,
    reviews: 10,
    enquiryLink: "#",
    contactLink: "#",
    images: [
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
      "https://i.ibb.co/mqq9tQ4/photo-grapy4.jpg",
    ],
  },
];

const WeedingSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
    <div className="weeding-slider custom-slick-arrow">
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <Card key={`weeding-slider-${index}`}>
            <CardContent className="p-4">
              <ImageSlider item={item} />
              <div className="flex justify-between mt-3">
                <div>
                  <Typography as="h3">{item.title}</Typography>
                  <Typography as="p">{item.location}</Typography>
                </div>
                <div className="text-end">
                  <Typography as="h3">{item.price}</Typography>
                  <Typography as="p">{item.service}</Typography>
                </div>
              </div>
              <div className="flex items-center gap-2 my-3">
                <Icon icon="heroicons:star-solid" className="h-4 w-4 text-yellow-400" />
                <Typography as="span" className="text-yellow-600 font-bold">5.0</Typography>
                <Typography as="span">10 reviews</Typography>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button asChild variant="outline" size="lg">
                  <Link href={item.enquiryLink}>Send Enquiry</Link>
                </Button>
                <Button asChild variant="outline" color="danger" size="lg">
                  <Link href={item.enquiryLink}>Contact</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default WeedingSlider;
