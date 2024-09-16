import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const Footer = () => {
    const links = [
        {
            title: "Documentations",
            href: "#"
        },
        {
            title: "Support",
            href: "#"
        },
        {
            title: "Contact Us",
            href: "#"
        }
    ]
    return (
        <Card>
            <CardContent className="py-4">
                <div className="flex flex-col   md:flex-row">
                    <div className="flex-1">
                        <h5 className="text-center md:text-start lg:ms-56">&copy;2024 Theme Ocean</h5>
                    </div>
                    <div className="flex-none flex flex-wrap justify-center items-center gap-3.5">
                        {
                            links.map((item, index) => (
                                <Link key={index} href={item.href} className="text-sm font-robotoSlab text-default-700 hover:opacity-80">{item.title}</Link>
                            ))
                        }
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Footer;