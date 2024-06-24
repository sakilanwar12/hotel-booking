
import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

interface MenuItemProps {
  item: {
    title: string;
    href: string;
  };
  className?: string;
}

const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(
  function MenuItem({ item, className }, ref) {
    const { title, href } = item;

    return (
      <Link
        href={href}
        ref={ref}
        className={cn("text-sm font-robotoSlab text-default-700 block ps-7 py-1", className)}>
        {title}
      </Link>
    );
  }
);

MenuItem.displayName = "MenuItem";

export default MenuItem;

