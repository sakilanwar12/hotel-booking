"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useSidebar } from "@/store";
import { cn } from "@/lib/utils";
import MenuHandler from "./menu-handler";
import MenuItemLink from "./menu-item-link";

interface MobileSidebar {
  menus: any;
}

const MobileSidebar = ({ menus }: MobileSidebar) => {
  const { collapsed, setCollapsed } = useSidebar();
  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <div className={cn("fixed top-0 start-0 w-[220px] h-screen border-r border-border z-10 bg-card transition-all duration-300 pt-16 -translate-x-[220px] ", {
      "translate-x-0": collapsed
    })}>
      <ScrollArea className="flex-1">
        <div className="flex flex-col px-2">
          {
            menus.map((menu: any, index: number) => {
              if (!menu.child) {
                return (
                  <MenuItemLink
                    key={`menu-item-${index}`}
                    item={menu}
                    toggleCollapsed={toggleCollapsed}
                  />
                );
              }
              return (
                <MenuHandler
                  key={`menu-item-${index}`}
                  menu={menu}
                  toggleCollapsed={toggleCollapsed}
                />
              );
            })
          }
        </div>
      </ScrollArea>
    </div>
  );
};

export default MobileSidebar;
