"use client"
import SiteLogo from "@/components/site-logo";
import GrayScaleButton from "./gray-scale-button";
import Notification from "./notifications";
import SearchContent from "./search-content";
import ShortCut from "./short-cut";
import ThemeButton from "./theme-button";
import { useSidebar } from "@/store";
import { cn } from "@/lib/utils";
import UserProfile from "./user-profile";

const Header = () => {
  const { collapsed, setCollapsed } = useSidebar();
  return (
    <header className="h-16 border-b bg-card">
      <div className="flex h-full items-center  gap-2">
        <div className="flex-none flex items-center gap-4 ">
          <div className="flex items-center justify-between py-4 px-4 relative z-50">
            <SiteLogo className="flex-none" />
            <div className={cn("ms-20 transition-all duration-300", {
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
          <SearchContent />
        </div>
        <div className="flex-1 flex items-center  gap-4 justify-end pe-10">
          <Notification />
          <GrayScaleButton />
          <ThemeButton />
          <ShortCut />
          <UserProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;