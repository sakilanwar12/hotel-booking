
"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { menus } from "@/config/menus";
import MenuItem from "./menu-item";
import SubmenuHandler from "./submenu-handler";
import { useSidebar } from "@/store";
import { cn } from "@/lib/utils";
const Sidebar = () => {
  const { collapsed } = useSidebar();
  return (
    <div className={cn("fixed top-0 left-0 w-[220px] h-screen border-r border-border z-10 bg-card transition-all duration-300 pt-16", {
      "w-16": collapsed
    })}>

      <ScrollArea className="flex-1">
        <div className="flex flex-col  px-2">
          {menus.map((menu, index) => {
            if (!menu.child) {
              return <MenuItem
                key={index}
                item={menu}
              />;
            }
            if (menu.child) {
              return <SubmenuHandler
                menu={menu}
                key={index}
                collapsed={collapsed}
              />;
            }
            return null;
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
