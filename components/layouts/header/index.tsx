"use client"

import Notification from "./notifications";
import ThemeButton from "./theme-button";
import { useSidebar } from "@/store";
import { cn } from "@/lib/utils";
import UserProfile from "./user-profile";
import ShoppingCart from "./cart";
import SearchContent from "./search-content";
import { Icon } from "@/components/ui/icon";

const Header = () => {
  const { collapsed, setCollapsed } = useSidebar();
  return (
    <header className="h-16 shadow bg-card sticky top-0 z-50">
      <div className="flex justify-end h-full items-center  gap-2">
        <div className=" flex items-center gap-4 lg:gap-6 justify-end pe-6 lg:pe-10">
          <SearchContent />
          <ThemeButton />
          <ShoppingCart />
          <Notification />
          <UserProfile />
          <div
            className={cn("flex flex-col items-center justify-center  gap-0.5 transition-all duration-300  w-7 h-7 rounded bg-primary/10 hover:bg-primary/20  lg:hidden cursor-pointer", {
              "bg-primary/10": collapsed
            })}
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon icon="heroicons:bars-3" className={cn("w-5 h-5 text-primary", {
              "hidden": collapsed
            })} />
            <Icon icon="heroicons:x-mark-20-solid" className={cn("w-5 h-5 text-primary hidden",
              {
                "block": collapsed
              }
            )} />

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;