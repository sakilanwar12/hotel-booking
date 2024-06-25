"use client"
import SiteLogo from "@/components/site-logo";
import GrayScaleButton from "./gray-scale-button";
import Notification from "./notifications";
import SearchContent from "./search-content";
import ShortCut from "./short-cut";
import ThemeButton from "./theme-button";
import { useSidebar } from "@/store";
import { cn } from "@/lib/utils";

const Header = () => {
  const { collapsed, setCollapsed } = useSidebar();
  return (
    <header className="h-14    border-b bg-card">
      <div className="flex h-full items-center  gap-2">
        <div className="flex-none flex items-center gap-4 ">
          <div className="flex items-center justify-between py-4 px-4 relative z-50">
            <SiteLogo className="flex-none" />
            <div className={cn("pl-28 transition-all duration-300", {
              "pl-10": collapsed
            })}>
              <div
                className={cn("flex flex-col  justify-center cursor-pointer gap-[3px] transition-all duration-300 w-7 h-7 rounded-full bg-primary/10", {
                  "": collapsed
                })}
                onClick={() => setCollapsed(!collapsed)}
              >
                <span className="inline-block h-0.5 w-4 bg-primary"></span>
                <span className="inline-block h-0.5 w-2.5 bg-primary"></span>
                <span className="inline-block h-0.5 w-4 bg-primary"></span>
              </div>
            </div>
          </div>
          <SearchContent />
        </div>
        <div className="flex-1 flex items-center  gap-4 justify-end">

          <Notification />
          <GrayScaleButton />
          <ThemeButton />
          <ShortCut />
        </div>
      </div>
    </header>
  );
};

export default Header;