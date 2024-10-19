import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
interface CategoryCardProps {
  href: string;
  title: string;
  image: string;
}
const CategoryCard = ({ href, title, image }: CategoryCardProps) => {
  return (
    <Link href={href} className="cursor-pointer">
      <Card className="rounded-none border-none shadow-none">
        <CardContent>
          <h3 className="mb-3 text-sm font-medium text-default-900 lg:text-lg">
            {title}
          </h3>
          <div className="hidden md:block">
            <Image
              src={image}
              alt="branding"
              width={300}
              height={300}
              className="h-[120px] w-full object-cover lg:h-full"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
