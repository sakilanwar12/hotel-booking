
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

interface MenuItemProps {
  item: {
    title: string;
    href: string;
  };
  className?: string;
}

const MenuItem = ({ item, className }: MenuItemProps) => {
  const { title, href } = item;
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn("text-sm font-robotoSlab text-default-700  ps-4 py-1 flex items-center gap-2 ",
        {
          "text-primary": pathname === href
        },
        className
      )}>
      <span className={cn("w-1 h-1 rounded-full bg-primary/30",
        {
          "bg-primary": pathname === href
        }
      )}></span>
      {title}
    </Link>
  );
}




export default MenuItem;

