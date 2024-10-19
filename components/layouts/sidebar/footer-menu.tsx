import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { mobileFooterMenu } from "@/lib/menus";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store";
import { IconifyIcon } from "@iconify/react/dist/iconify.js";
import { MenuIcon } from "lucide-react";

const FooterMenu = () => {
  const { collapsed, setCollapsed } = useSidebar();
  return (
    <Card className="fixed bottom-0 start-0 z-50 w-full rounded-none lg:hidden">
      <CardContent className="py-1">
        <div className="container">
          <div className="flex justify-center gap-5 py-3">
            {mobileFooterMenu.map((item, index) => (
              <div
                key={`footer-menu-${index}`}
                className="flex flex-col items-center gap-2 text-xs font-medium text-default-900 hover:text-primary"
              >
                <Icon
                  icon={item.icon as string | IconifyIcon}
                  className="h-4 w-4"
                />
                <span>{item.title}</span>
              </div>
            ))}
            <div
              className={cn(
                "flex cursor-pointer flex-col items-center gap-2 text-xs font-medium text-default-900 hover:text-primary",
                { "text-primary": collapsed },
              )}
              onClick={() => setCollapsed(!collapsed)}
            >
              <MenuIcon className="h-4 w-4" />
              <span>Menu</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FooterMenu;
