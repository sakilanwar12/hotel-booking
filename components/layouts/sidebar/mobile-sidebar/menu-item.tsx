import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { MenuProps } from "@/lib/menus";

import { cn } from "@/lib/utils";
import { IconifyIcon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  item: MenuProps;
  collapsed?: boolean;
}

const MenuItem = ({ item, collapsed }: MenuItemProps) => {
  const { title, href, icon } = item;
  const pathname = usePathname();
  return (
    <Button
      asChild
      className={cn(
        "justify-start gap-3 bg-transparent text-sm font-medium text-default-900 shadow-none hover:bg-primary/10 w-full",
        {
         
          "bg-primary/10 text-primary": pathname === href,
        },
      )}
    >
      <Link href={href} className="flex items-center">
        <Icon icon={icon as string | IconifyIcon} className="h-4 w-4" />
        {title}
      </Link>
    </Button>
  );
};

export default MenuItem;
