"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import MenuItem from "../common/menu-item";
import CollapsedMenu from "../common/collapsed-menu";
import ExpandMenu from "../common/expand-menu";

interface MainSidebarProps {
  collapsed: boolean,
  menus: any
}

const MainSidebar = ({ menus, collapsed }: MainSidebarProps) => {

  return (
    <div className={cn("fixed top-0 start-0 w-[220px] h-screen shadow z-10 bg-card transition-all duration-300 pt-20 -translate-x-[220px] lg:translate-x-0", {
      "w-[220px] lg:w-16 translate-x-0": collapsed
    })}>
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-1 px-2">
          {
            menus.map((menu: any, index: number) => {
              if (!menu.child) {
                return (
                  <MenuItem
                    key={`menu-item-${index}`}
                    item={menu}
                  />
                );
              }
              if (collapsed) {
                return (
                  <CollapsedMenu
                    key={`menu-item-${index}`}
                    menu={menu}
                  />
                );
              }
              return (
                <ExpandMenu
                  key={`menu-item-${index}`}
                  menu={menu}
                />
              );
            })
          }
        </div>
      </ScrollArea>
    </div>
  );
};

export default MainSidebar;
