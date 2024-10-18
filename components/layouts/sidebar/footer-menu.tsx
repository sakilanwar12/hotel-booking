import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { mobileFooterMenu } from "@/lib/menus";
import { IconifyIcon } from "@iconify/react/dist/iconify.js";

const FooterMenu = () => {
  return (
    <Card className="fixed bottom-0 start-0 z-50 w-full rounded-none lg:hidden">
      <CardContent className="py-2">
        <div className="container">
          <div className="flex justify-center gap-4 py-3">
            {mobileFooterMenu.map((item, index) => (
              <div
                key={`footer-menu-${index}`}
                className="flex flex-col items-center gap-1 text-sm font-medium text-default-900 hover:text-primary"
              >
                <Icon
                  icon={item.icon as string | IconifyIcon}
                />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FooterMenu;
