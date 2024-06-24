
"use client";

import SiteLogo from "@/components/site-logo";
import { ScrollArea } from "@/components/ui/scroll-area";
import { menus } from "@/config/menus";
import MenuItem from "./menu-item";
import SubmenuHandler from "./submenu-handler";
import { useSidebar } from "@/store";
import { cn } from "@/lib/utils";
const Sidebar = () => {
  const { collapsed, setCollapsed } = useSidebar();
  return (
    <div className={cn("fixed top-0 left-0 w-[220px] h-screen border-r border-border z-10 bg-card", {
      "w-16": collapsed
    })}>
      <div className="flex items-center justify-between py-4 px-4">
        <SiteLogo className="flex-none" />
        <div
          className="flex flex-col cursor-pointer gap-[3px]"
          onClick={() => setCollapsed(!collapsed)}
        >
          <span className="inline-block h-0.5 w-4 bg-primary"></span>
          <span className="inline-block h-0.5 w-2.5 bg-primary"></span>
          <span className="inline-block h-0.5 w-4 bg-primary"></span>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col px-2">
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
