import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { type Food } from "@/data/foods";
import { ArrowRight, ChevronRight, Heart, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ item }: { item: Food }) => {
  const { image, title, food_package, price, rating } = item;

  return (
    <Card>
      <CardContent>
        <div className="relative z-10 flex justify-center">
          <Image
            src={image}
            alt="Food"
            width={200}
            height={200}
          />
        </div>
        <div className="-mt-24 rounded-md rounded-t-[40px] border border-border/40 p-5 pt-24 shadow-lg drop-shadow-2xl">
          <div className="flex items-center border-b border-border pb-3">
            <div className="flex-1">
              <Typography as="h3">{title}</Typography>
            </div>
            <div className="flex-none">
              <Heart className="h-5 w-5 text-primary transition-all duration-300 hover:scale-105 hover:text-primary/80" />
            </div>
          </div>
          <Typography as="p" className="mt-3">
            {food_package.map((packageItem: string, index:number) => (
              <span
                key={index}
                className="me-1"
              >
                {packageItem} 
                {index !== food_package.length - 1 && " +"}
              </span>
            ))}
          </Typography>
          <div className="mt-5 flex items-center justify-between rounded-md bg-default-100 p-2.5">
            <span className="text-lg font-medium text-default-900">{price}</span>
            <Button asChild variant="outline">
              <Link href="#">
                Customize <ArrowRight className="ms-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-6 flex justify-center">
            <Button color="danger">
              <PlusIcon className="me-1 h-4 w-4" /> Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
