"use client";

import { menus } from "@/config/menus";
import { useSidebar } from "@/store";
import { useMediaQuery } from "@/hooks/useMediaquery";
import MobileSidebar from "./mobile-sidebar";
import MainSidebar from "./main-sidebar";


const Sidebar = () => {
  const { collapsed } = useSidebar();
  const isSmallDevice = useMediaQuery('(max-width: 992px)');

  if (isSmallDevice) {
    return <MobileSidebar
      menus={menus}

    />
  }
  return <MainSidebar
    menus={menus}
    collapsed={collapsed}
  />
};


export default Sidebar;
