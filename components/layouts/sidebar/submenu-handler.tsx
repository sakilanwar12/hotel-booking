"use client"
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import MenuItem from './menu-item';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
interface SubmenuHandlerProps {
  menu: any,
  collapsed: boolean
}
const SubmenuHandler = ({ menu, collapsed }: SubmenuHandlerProps) => {
  const [open, setOpen] = useState(false);
  if (collapsed) {
    return (
      <div className=' flex flex-col gap-4 items-center'>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className='hover:bg-primary group'>
                <menu.icon className="w-5 h-5  text-primary/80 group-hover:text-primary-foreground" />
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
    )
  } else {
    return (
      <Collapsible>
        <CollapsibleTrigger asChild onClick={() => setOpen(!open)}>
          <div className="flex items-center cursor-pointer py-2 px-1.5 w-full rounded group hover:bg-primary/10">
            {menu.icon && (
              <menu.icon className="w-4 h-4 flex-none me-2 text-primary/80 group-hover:text-primary" />
            )}
            <span className="flex-1 text-xs font-medium font-robotoSlab text-default-700 mt-0.2 group-hover:text-primary">
              {menu.title}
            </span>
            <ChevronRight
              className={cn("w-3 h-3 text-default-500 flex-none transition-transform duration-300 group-hover:text-primary", {
                "rotate-90": open,
              })} />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {
            menu.child.map((childItem: any, index: number) => <MenuItem item={childItem} key={index} />)
          }
        </CollapsibleContent>
      </Collapsible>
    );
  }
};

export default SubmenuHandler;