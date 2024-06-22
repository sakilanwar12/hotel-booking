"use client"

import SiteLogo from "@/components/site-logo";
import { ScrollArea } from "@/components/ui/scroll-area";
import { menus } from "@/config/menus";
import SubMenu from "./sub-menu";
import MenuItem from "./menu-item";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({});

  const toggleMenu = (index: number) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <div className="fixed top-0 left-0 w-[220px] h-screen border-r border-border z-10 px-4 bg-card">
      <div className="flex items-center justify-between  py-4">
        <SiteLogo className="flex-none " />
        <div className='flex flex-col cursor-pointer gap-[3px]'>
          <span className='inline-block h-0.5 w-4 bg-primary'></span>
          <span className='inline-block h-0.5 w-2.5 bg-primary'></span>
          <span className='inline-block h-0.5 w-4 bg-primary'></span>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-3 ">
          {
            menus.map((menu, index) => {
              if (!menu.child) {
                return <MenuItem key={index} menu={menu} />
              }

              if (menu.child) {

                return (
                  <div key={index}>
                    <div
                      className="flex"
                      onClick={() => toggleMenu(index)}
                    >
                      {menu.icon && <menu.icon className="w-4 h-4 flex-none" />}
                      <span className="flex-1 text-sm font-medium text-default-700 mt-">  {menu.title}</span>
                      <ChevronRight className="w-3 h-3 text-default-700 flex-none" />
                    </div>
                    <div
                      className={cn("pl-4", {
                        "hidden": !openMenus[index],
                        "block": openMenus[index],
                      })}
                    >
                      {
                        menu.child.map((childItem, index) => <SubMenu
                          key={index}
                          childItem={childItem} />)
                      }
                    </div>

                  </div>
                )
              }
            })


          }
        </div>
      </ScrollArea>

    </div>
  );
};

export default Sidebar;