"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingCartIcon, X } from "lucide-react";
import Image from "next/image";
import { Fragment, useState } from "react";
const ShoppingCart = () => {
    const [items, setItems] = useState<any[]>([
        {
            id: 1,
            name: "Bentwood Chair",
            quantity: 5,
            pricePerUnit: 18,
            totalPrice: 89,
            image: "/images/products/img-2.png"
        },
        {
            id: 2,
            name: "Borosil Paper Cup",
            quantity: 3,
            pricePerUnit: 250,
            totalPrice: 750,
            image: "/images/products/img-3.png"
        },
        {
            id: 3,
            name: "Gray Styled T-Shirt",
            quantity: 1,
            pricePerUnit: 1250,
            totalPrice: 1250,
            image: "/images/products/img-6.png"
        },
        {
            id: 4,
            name: "Stillbird Helmet",
            quantity: 2,
            pricePerUnit: 495,
            totalPrice: 990,
            image: "/images/products/img-5.png"
        },
        {
            id: 5,
            name: "Borosil Paper Cup",
            quantity: 3,
            pricePerUnit: 250,
            totalPrice: 750,
            image: "/images/products/img-3.png"
        },
        {
            id: 6,
            name: "Gray Styled T-Shirt",
            quantity: 1,
            pricePerUnit: 1250,
            totalPrice: 1250,
            image: "/images/products/img-6.png"
        },
        {
            id: 7,
            name: "Stillbird Helmet",
            quantity: 2,
            pricePerUnit: 495,
            totalPrice: 990,
            image: "/images/products/img-5.png"
        }
    ])


    return (
        <DropdownMenu >
            <DropdownMenuTrigger>
                <ShoppingCartIcon className="w-6 h-6 text-default-700" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="lg:w-96">
                <DropdownMenuItem className="flex justify-between items-center">
                    <span className="text-base text-default-900 font-medium">My Cart</span>
                    <Badge>4 items</Badge>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <ScrollArea className="h-[400px]">
                    {items.map((item) => (
                        <Fragment key={item.id}>
                            <DropdownMenuItem
                                className="flex justify-between items-center py-1">
                                <div className="flex-1 flex items-center gap-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                    <div>
                                        <h3 className="text-sm font-medium text-default-900">{item.name}</h3>
                                        <p className="text-sm text-default-500">{item.quantity} x ${item.pricePerUnit}</p>
                                    </div>
                                </div>
                                <p className="flex-none text-sm font-medium text-default-900 me-4">${item.totalPrice}</p>
                                <div
                                    className="flex-none me-2 cursor-pointer h-5 w-5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground rounded"
                                    onClick={() => setItems(items.filter((i) => i.id !== item.id))}
                                >
                                    <X className="w-4 h-4" />
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                        </Fragment>
                    ))}
                </ScrollArea>
                <DropdownMenuItem>
                    <div className="w-full">
                        <div className="flex justify-between items-center w-full px-2 mb-2">
                            <span className="text-sm font-medium text-default-900">Total</span>
                            <span className="text-sm font-medium text-default-900">${items.reduce((total, item) => total + item.totalPrice, 0)}</span>
                        </div>
                        <Button className="w-full">Checkout</Button>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ShoppingCart;