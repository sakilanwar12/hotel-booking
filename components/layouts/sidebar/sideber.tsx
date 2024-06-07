import SiteLogo from "@/components/site-logo";
import { Gear } from "@/components/svg";
import { ScrollArea } from "@/components/ui/scroll-area";
import { menus } from "@/config/menus";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-[240px] h-screen border-r border-border z-10 bg-card flex">
      <div className="flex-none w-[72px]  h-full border-r flex flex-col">
        <SiteLogo className="flex-none mb-2" />
        <ScrollArea className="flex-1">
          <div className="flex flex-col gap-3 items-center">
            {
              menus.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <TooltipProvider key={index} delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link
                          href={item.href}
                          className="w-10 h-10 rounded  grid place-content-center hover:bg-primary/10 "
                        >
                          <IconComponent className="w-6 h-6" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>{item.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })
            }
          </div>
        </ScrollArea>

        <div className="flex-none flex flex-col items-center gap-3 p-2">
          <Gear className="w-6 h-6" />
          <Avatar className="cursor-pointer">
            <AvatarImage src="images/all/author.jpg"></AvatarImage>
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex-1 h-screen p-4">
        Hello
      </div>
    </div>
  );
};

export default Sidebar;