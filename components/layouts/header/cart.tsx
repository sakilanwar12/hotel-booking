"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ShoppingCartIcon, X } from "lucide-react";
import Image from "next/image";
import { Fragment, useState } from "react";

const cartData = [
  {
    id: 1,
    name: "Bentwood Chair",
    quantity: 5,
    pricePerUnit: 18,
    totalPrice: 89,
    image: "/images/products/img-2.png",
  },
  {
    id: 2,
    name: "Borosil Paper Cup",
    quantity: 3,
    pricePerUnit: 250,
    totalPrice: 750,
    image: "/images/products/img-3.png",
  },
  {
    id: 3,
    name: "Gray Styled T-Shirt",
    quantity: 1,
    pricePerUnit: 1250,
    totalPrice: 1250,
    image: "/images/products/img-6.png",
  },
  {
    id: 4,
    name: "Stillbird Helmet",
    quantity: 2,
    pricePerUnit: 495,
    totalPrice: 990,
    image: "/images/products/img-5.png",
  },
  {
    id: 5,
    name: "Borosil Paper Cup",
    quantity: 3,
    pricePerUnit: 250,
    totalPrice: 750,
    image: "/images/products/img-3.png",
  },
  {
    id: 6,
    name: "Gray Styled T-Shirt",
    quantity: 1,
    pricePerUnit: 1250,
    totalPrice: 1250,
    image: "/images/products/img-6.png",
  },
  {
    id: 7,
    name: "Stillbird Helmet",
    quantity: 2,
    pricePerUnit: 495,
    totalPrice: 990,
    image: "/images/products/img-5.png",
  },
];
type CartData = (typeof cartData)[number];
const ShoppingCart = () => {
  const [items, setItems] = useState<CartData[]>(cartData);

  return (
    <Popover>
      <PopoverTrigger>
        <ShoppingCartIcon
          className="h-6 w-6 cursor-pointer text-default-700"
        />
      </PopoverTrigger>

      <PopoverContent align="end" className="px-0 lg:w-96">
        <div className="flex items-center justify-between px-4 pb-3">
          <span className="text-base font-medium text-default-900">
            My Cart
          </span>
          <Badge>4 items</Badge>
        </div>
        <Separator />
        <ScrollArea className="h-[400px]">
          {items.map((item) => (
            <Fragment key={item.id}>
              <div className="flex items-center justify-between px-2 py-1">
                <div className="flex flex-1 items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-default-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-default-500">
                      {item.quantity} x ${item.pricePerUnit}
                    </p>
                  </div>
                </div>
                <p className="me-4 flex-none text-sm font-medium text-default-900">
                  ${item.totalPrice}
                </p>
                <div
                  className="me-2 flex h-5 w-5 flex-none cursor-pointer items-center justify-center rounded hover:bg-primary hover:text-primary-foreground"
                  onClick={() =>
                    setItems(items.filter((i) => i.id !== item.id))
                  }
                >
                  <X className="h-4 w-4" />
                </div>
              </div>
              <Separator />
            </Fragment>
          ))}
        </ScrollArea>
        <div className="w-full px-3 py-3">
          <div className="mb-2 flex w-full items-center justify-between px-2">
            <span className="text-sm font-medium text-default-900">Total</span>
            <span className="text-sm font-medium text-default-900">
              ${items.reduce((total, item) => total + item.totalPrice, 0)}
            </span>
          </div>
          <Button className="w-full">Checkout</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ShoppingCart;
