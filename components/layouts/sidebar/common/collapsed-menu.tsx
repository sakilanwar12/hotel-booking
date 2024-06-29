"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import MenuItem from './menu-item';
import { Button } from '@/components/ui/button';
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
              <Button size="icon" variant="ghost" className="hover:bg-primary">
                <menu.icon className="w-5 h-5  text-primary/80 group-hover:text-primary-foreground" />
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