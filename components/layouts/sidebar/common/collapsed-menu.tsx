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
interface CollapsedMenuProps {
  menu: any
}
const CollapsedMenu = ({ menu }: CollapsedMenuProps) => {
  return (
    <div className=' flex flex-col gap-4 items-center'>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="w-full flex justify-center group">
              <Button size="icon" variant="ghost">
                {
                  menu.icon && <Icon icon={menu.icon} className="w-4 h-4 flex-none me-2 text-default-700 " />
                }
              </Button>
            </div>
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