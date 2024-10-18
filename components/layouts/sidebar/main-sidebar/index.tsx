"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import MenuItem from "./menu-item";
import { useSidebar } from "@/store";
import { MenuProps } from "@/lib/menus";

interface MainSidebarProps {
  collapsed: boolean;
  isLaptop: boolean;
  menus: MenuProps[];
}

const MainSidebar = ({ collapsed, menus,isLaptop }: MainSidebarProps) => {
  return (
    <div
      className={cn(
        "fixed start-0 top-0 h-screen w-[220px] -translate-x-[220px] bg-card pt-20 shadow transition-all duration-300 lg:translate-x-0",
        {
          "w-20": collapsed || isLaptop,
        },
      )}
    >
      <ScrollArea className="flex-1">
        <div
          className={cn("flex flex-col gap-1 px-2", {
            "gap-1": collapsed,
          })}
        >
          {menus.map((item, index) => (
            <MenuItem
              key={`menu-item-${index}`}
              item={item}
              collapsed={collapsed}
              isLaptop={isLaptop}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MainSidebar;
