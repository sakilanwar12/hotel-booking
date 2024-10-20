"use client";

import { menus } from "@/lib/menus";
import { useSidebar } from "@/store";
import { useMediaQuery } from "@/hooks/useMediaquery";
import MainSidebar from "./main-sidebar";
import MobileSidebar from "./mobile-sidebar";

const Sidebar = () => {
  const { collapsed } = useSidebar();
  const isLaptop = useMediaQuery(
    "(min-width: 1024px) and (max-width: 1280px)",
  );
  const isSmallDevice = useMediaQuery("(max-width: 1023px)");

  if(isSmallDevice) {
    return <MobileSidebar menus={menus} collapsed={collapsed} />;
  }

  return <MainSidebar menus={menus} collapsed={collapsed} isLaptop={isLaptop} />;
};

export default Sidebar;
