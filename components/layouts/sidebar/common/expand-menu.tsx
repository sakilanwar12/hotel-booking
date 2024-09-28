"use client"
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import MenuItem from './menu-item';
import { useState } from 'react';
import { Icon } from '@/components/ui/icon';
import { usePathname } from 'next/navigation';

interface ExpandMenuProps {
  menu: any
}
const ExpandMenu = ({ menu }: ExpandMenuProps) => {
  const [open, setOpen] = useState<boolean>(false);
 const pathName = usePathname();
 const activeMenu = pathName.includes(menu.href);
  return (
    <Collapsible>
      <CollapsibleTrigger asChild onClick={() => setOpen(!open)}>
        <div className={cn("flex items-center cursor-pointer py-3 px-2.5 w-full rounded group hover:bg-primary/10", {
          "bg-primary/10": activeMenu || open
        })}>
          {
            menu.icon &&  <Icon icon={menu.icon} className="w-4 h-4 flex-none me-2 text-default-700  group-hover:text-primary" />
          }
          <span className="flex-1 text-xs font-medium font-robotoSlab text-default-700 mt-0.2 group-hover:text-primary">
            {menu.title}
          </span>
          <ChevronRight
            className={cn("w-4 h-4 text-default-500 flex-none transition-transform duration-300 group-hover:text-primary", {
              "rotate-90": open,
              "hidden":menu.child.length === 0
            })} />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        {
          menu.child.map((childItem: any, index: number) => <MenuItem
            item={childItem}
            key={index}
          />)
        }
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ExpandMenu;