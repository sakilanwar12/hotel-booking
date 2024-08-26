import { LayoutGrid } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import Image from 'next/image';


const Apps = () => {
    const appsData = [
        {
            id: 1,
            name: "calendar",
            image: "/images/brand/calender.png",
            href: "#"
        },
        {
            id: 2,
            name: "figma",
            image: "/images/brand/figma.png",
            href: "#"
        },
        {
            id: 3,
            name: "Docs",
            image: "/images/brand/google-docs.png",
            href: "#"
        },
        {
            id: 4,
            name: "Sheets",
            image: "/images/brand/google-sheets.png",
            href: "#"
        },
        {
            id: 5,
            name: "google",
            image: "/images/brand/google.png",
            href: "#"
        },
        {
            id: 6,
            name: "powerpoint",
            image: "/images/brand/microsoft-powerpoint.png",
            href: "#"
        },
        {
            id: 7,
            name: "Word",
            image: "/images/brand/microsoft-word.png",
            href: "#"
        },
        {
            id: 8,
            name: "Sketch",
            image: "/images/brand/sketch.png",
            href: "#"
        },
        {
            id: 9,
            name: "Translate",
            image: "/images/brand/translate.png",
            href: "#"
        }
    ];
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <LayoutGrid className="w-5 h-5 text-default-700" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="lg:w-96">
                <DropdownMenuLabel className='py-2 text-lg'>Related Apps</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="grid grid-cols-3 gap-3 p-2">
                    {appsData.map((app) => (
                        <Link key={app.id} href={app.href} className='flex flex-col items-center py-4 rounded-md gap-2 w-full border border-border hover:bg-default-100'>
                            <Image
                                src={app.image}
                                alt={app.name}
                                width={40}
                                height={40}
                                className="w-7 h-7"
                            />
                            <span className='text-xs font-medium text-default-900 '>{app.name}</span>
                        </Link>
                    )
                    )}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button className="w-full" asChild>
                        <Link href="#">View all</Link>
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Apps;