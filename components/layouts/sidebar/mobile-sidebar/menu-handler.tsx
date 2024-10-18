"use client"
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { useState } from 'react';
import MenuItemLink from './menu-item-link';

interface ExpandMenuProps {
  menu: any,
  toggleCollapsed: () => void
}
const MenuHandler = ({ menu, toggleCollapsed }: ExpandMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible>
      <CollapsibleTrigger asChild onClick={() => setOpen(!open)}>
        <div className="flex items-center cursor-pointer py-2 px-1.5 w-full rounded group hover:bg-primary/10">
          {menu.icon && (
            <menu.icon className="w-4 h-4 flex-none me-2 text-primary/80 group-hover:text-primary" />
          )}
          <span className="flex-1 text-xs font-medium text-default-700 mt-0.2 group-hover:text-primary">
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
          menu.child.map((childItem: any, index: number) => <MenuItemLink
            item={childItem}
            key={index}
            toggleCollapsed={toggleCollapsed}
          />)
        }
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MenuHandler;