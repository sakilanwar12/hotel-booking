import { cn } from "@/lib/utils";
import Link from "next/link";

const MenuItemLink = ({ className, item, toggleCollapsed }: any) => {
  const { title, href } = item;

  return (
    <Link
      href={href}
      onClick={() => toggleCollapsed()}
      className={cn("text-sm  text-default-700 block ps-7 py-1", className)}>
      {title}
    </Link>
  );
};

export default MenuItemLink;