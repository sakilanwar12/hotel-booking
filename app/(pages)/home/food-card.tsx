import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { ArrowRight, ChevronRight, Heart, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FoodCard = () => {
  return (
    <Card>
      <CardContent>
        <div className="relative z-10 flex justify-center">
          <Image
            src="/images/foods/food-1.png"
            alt="Food"
            width={200}
            height={200}
          />
        </div>
        <div className="-mt-24 rounded-md rounded-t-[40px] border border-border/40 p-5 pt-24 shadow-lg drop-shadow-2xl">
          <div className="flex items-center border-b border-border pb-3">
            <div className="flex-1">
              <Typography as="h3">Stripes Epic Meal</Typography>
            </div>
            <div className="flex-none">
              <Heart className="h-5 w-5 text-primary transition-all duration-300 hover:scale-105 hover:text-primary/80" />
            </div>
          </div>
          <Typography as="p" className="mt-3">
            3 stripes + fries + drink
          </Typography>
          <div className="mt-5 flex items-center justify-between rounded-md bg-default-100 p-2.5">
            <span className="text-lg text-default-900 font-medium">15 SAR</span>
            <Button asChild variant="outline">
              <Link href="#">
                Customize <ArrowRight className="ms-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex justify-center mt-6">
          <Button color="danger"><PlusIcon className="w-4 h-4 me-1"/> Add to Cart</Button>
          </div>
       
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
