"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useSidebar } from "@/store";
import { cn } from "@/lib/utils";
import MenuItem from "./menu-item";
import { MenuProps } from "@/lib/menus";
import SiteLogo from "@/components/site-logo";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface MobileSidebar {
  menus: MenuProps[];
  collapsed: boolean;
}

const MobileSidebar = ({ menus, collapsed }: MobileSidebar) => {
  const { setCollapsed } = useSidebar();
  return (
    <div
      className={cn(
        "fixed start-0 top-0 z-[9999] h-screen w-[220px] -translate-x-[220px] border-r border-border bg-card transition-all duration-300",
        {
          "translate-x-0": collapsed,
        },
      )}
    >
      <div className="flex items-center justify-between py-2.5 pe-2">
        <SiteLogo className="ps-3.5"/>
        <Button
          size="icon"
          color="secondary"
          className="border border-transparent hover:border-default-200"
          onClick={() => setCollapsed(!collapsed)}
        >
          <X className="h-4 w-4 text-default-900" />
        </Button>
      </div>
      <ScrollArea className="flex-1">
        {menus.map((item, index) => (
          <MenuItem
            key={`menu-item-${index}`}
            item={item}
            collapsed={collapsed}
          />
        ))}
      </ScrollArea>
    </div>
  );
};

export default MobileSidebar;
