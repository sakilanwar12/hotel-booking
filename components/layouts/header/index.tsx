"use client";

import ThemeButton from "./theme-button";
import { useSidebar } from "@/store";
import { cn } from "@/lib/utils";
import UserProfile from "./user-profile";
import SearchContent from "./search-content";
import SiteLogo from "@/components/site-logo";
import ShoppingCart from "./cart";

const Header = () => {
  const { collapsed, setCollapsed } = useSidebar();
  return (
    <header className="sticky top-0 z-[9999] h-16 bg-card shadow">
      <div className="flex h-full items-center justify-between">
        <div className="relative z-50 flex items-center px-4 py-4">
          <div
            className={cn("hidden transition-all duration-300 xl:block", {
              "": collapsed,
            })}
          >
            <div
              className={cn(
                "flex h-7 w-7 cursor-pointer flex-col items-center justify-center gap-0.5 rounded bg-primary/10 transition-all duration-300 hover:bg-primary/20",
                {
                  "bg-primary/20": collapsed,
                },
              )}
              onClick={() => setCollapsed(!collapsed)}
            >
              <span
                className={cn("inline-block h-0.5 w-4 bg-primary/60", {
                  "w-3 translate-x-1 rotate-45 bg-primary": collapsed,
                })}
              ></span>
              <span
                className={cn("inline-block h-0.5 w-4 bg-primary/60", {
                  "bg-primary": collapsed,
                })}
              ></span>
              <span
                className={cn("inline-block h-0.5 w-4 bg-primary/60", {
                  "-mt-[1px] w-3 translate-x-1 -rotate-45 bg-primary":
                    collapsed,
                })}
              ></span>
            </div>
          </div>
          <SiteLogo className="ms-3" />
        </div>
        <div className="hidden md:block">
          <SearchContent />
        </div>
        <div className="flex items-center justify-end gap-4 pe-6 lg:gap-6">
          <div className="md:hidden">
            <SearchContent />
          </div>
          <ThemeButton />
          <ShoppingCart />
          <UserProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;
