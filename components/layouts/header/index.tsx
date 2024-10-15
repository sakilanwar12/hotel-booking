"use client";

import ThemeButton from "./theme-button";
import { useSidebar } from "@/store";
import { cn } from "@/lib/utils";
import UserProfile from "./user-profile";
import SearchContent from "./search-content";
import { Icon } from "@/components/ui/icon";

const Header = () => {
  const { collapsed, setCollapsed } = useSidebar();
  return (
    <header className="sticky top-0 z-50 h-16 bg-card shadow">
      <div className="flex h-full items-center  justify-between ">
        <div></div>
        <div>
          <SearchContent />
        </div>
        <div className="flex  items-center justify-end gap-4 pe-6 lg:gap-6">
          <ThemeButton />
          <UserProfile />
          <div
            className={cn(
              "flex h-7 w-7 cursor-pointer flex-col items-center justify-center gap-0.5 rounded bg-primary/10 transition-all duration-300 hover:bg-primary/20 lg:hidden",
              {
                "bg-primary/10": collapsed,
              },
            )}
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon
              icon="heroicons:bars-3"
              className={cn("h-5 w-5 text-primary", {
                hidden: collapsed,
              })}
            />
            <Icon
              icon="heroicons:x-mark-20-solid"
              className={cn("hidden h-5 w-5 text-primary", {
                block: collapsed,
              })}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
