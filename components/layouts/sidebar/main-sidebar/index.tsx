"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import MenuItem from "../common/menu-item";
import CollapsedMenu from "../common/collapsed-menu";
import ExpandMenu from "../common/expand-menu";
import SiteLogo from "@/components/site-logo";
import { useSidebar } from "@/store";

interface MainSidebarProps {
  collapsed: boolean,
  menus: any
}

const MainSidebar = ({ menus }: MainSidebarProps) => {
  const { collapsed, setCollapsed } = useSidebar();
  return (
    <div className={cn("fixed top-0 start-0 w-[220px] h-screen shadow  bg-card transition-all duration-300 -translate-x-[220px] lg:translate-x-0  z-50", {
      "w-[230px] lg:w-16 translate-x-0": collapsed
    })}>
         <div className="flex items-center justify-between py-4 px-4 relative z-50">
            <SiteLogo className="flex-none" />
            <div className={cn("ms-5 transition-all duration-300 hidden lg:block", {
              "ms-28 lg:ms-10": collapsed
            })}>
              <div
                className={cn("flex flex-col items-center justify-center cursor-pointer gap-0.5 transition-all duration-300  w-7 h-7 rounded bg-primary/10 hover:bg-primary/20", {
                  "bg-primary/20": collapsed
                })}
                onClick={() => setCollapsed(!collapsed)}
              >

                <span className={cn("inline-block h-0.5 w-4 bg-primary/60",
                  {
                    "rotate-45 w-3 translate-x-1 bg-primary": collapsed
                  }
                )}></span>
                <span className={cn("inline-block h-0.5 w-4 bg-primary/60",
                  {
                    "bg-primary": collapsed
                  }
                )}></span>
                <span className={cn("inline-block h-0.5 w-4 bg-primary/60",
                  {
                    "-rotate-45 w-3 translate-x-1 -mt-[1px] bg-primary": collapsed
                  }
                )}></span>
              </div>
            </div>
          </div>
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
