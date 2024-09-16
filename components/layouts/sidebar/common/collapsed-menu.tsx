"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import MenuItem from './menu-item';
import { Button } from '@/components/ui/button';
import { Icon } from "@/components/ui/icon";
import { usePathname } from "next/navigation";
interface CollapsedMenuProps {
  menu: any
}
const CollapsedMenu = ({ menu }: CollapsedMenuProps) => {
  const pathname = usePathname();
  const activeMenu = menu.child.find((item: any) => item.href === pathname);
  console.log(menu )
  return (
    <div className=' flex flex-col gap-5 items-center'>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon" variant={activeMenu ? 'outline' : 'ghost'} className="rounded">
              {
                menu.icon && <Icon icon={menu.icon} className="w-4 h-4 flex-none  text-default-700 " />
              }
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side='right'
            align='start'
            className='w-40'
          >
            {
              menu.child.map((childItem: any, index: number) =>
                <MenuItem
                  item={childItem}
                  key={index}
                  className=' ps-0'
                />)
            }
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default CollapsedMenu;