"use client";

import SiteLogo from "@/components/site-logo";
import { ScrollArea } from "@/components/ui/scroll-area";
import { menus } from "@/config/menus";
import SubMenu from "./sub-menu";
import MenuItem from "./menu-item";
import { ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({});
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const toggleMenu = (index: number) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const getHeight = (index: number) => {
    return openMenus[index] && contentRefs.current[index]
      ? `${contentRefs.current[index]?.scrollHeight ?? 0}px`
      : "0px";
  };

  useEffect(() => {
    Object.keys(openMenus).forEach((key) => {
      const index = parseInt(key);
      if (openMenus[index] && contentRefs.current[index]) {
        contentRefs.current[index]!.style.height = `${contentRefs.current[index]?.scrollHeight ?? 0}px`;
      }
    });
  }, [openMenus]);

  return (
    <div className="fixed top-0 left-0 w-[220px] h-screen border-r border-border z-10 bg-card">
      <div className="flex items-center justify-between py-4 px-4">
        <SiteLogo className="flex-none" />
        <div className="flex flex-col cursor-pointer gap-[3px]">
          <span className="inline-block h-0.5 w-4 bg-primary"></span>
          <span className="inline-block h-0.5 w-2.5 bg-primary"></span>
          <span className="inline-block h-0.5 w-4 bg-primary"></span>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col px-2">
          {menus.map((menu, index) => {
            if (!menu.child) {
              return <MenuItem key={index} menu={menu} />;
            }

            if (menu.child) {
              return (
                <div key={index}>
                  <div
                    className="flex items-center cursor-pointer py-2 px-1.5 rounded group hover:bg-primary/10"
                    onClick={() => toggleMenu(index)}
                  >
                    {menu.icon && (
                      <menu.icon className="w-4 h-4 flex-none me-2 text-primary/90 group-hover:text-primary" />
                    )}
                    <span className="flex-1 text-xs font-medium text-default-700 mt-[3px] group-hover:text-primary">
                      {menu.title}
                    </span>
                    <ChevronRight
                      className={cn(
                        "w-3 h-3 text-default-500 flex-none transition-transform duration-300",
                        {
                          "rotate-90": openMenus[index],
                        }
                      )}
                    />
                  </div>
                  <div
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                    className="overflow-hidden transition-all duration-300"
                    style={{ height: getHeight(index) }}
                  >
                    {menu.child.map((childItem, subIndex) => (
                      <SubMenu key={subIndex} childItem={childItem} />
                    ))}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;

// "use client";

// import SiteLogo from "@/components/site-logo";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { menus } from "@/config/menus";
// import SubMenu from "./sub-menu";
// import MenuItem from "./menu-item";
// import { ChevronRight } from "lucide-react";
// import { useState, useRef, useEffect } from "react";
// import { cn } from "@/lib/utils";

// const Sidebar = () => {
//   const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({});
//   const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

//   const toggleMenu = (index: number) => {
//     setOpenMenus((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   const getHeight = (index: number) => {
//     return openMenus[index] && contentRefs.current[index]
//       ? `${contentRefs.current[index]?.scrollHeight ?? 0}px`
//       : "0px";
//   };

//   useEffect(() => {
//     Object.keys(openMenus).forEach((key) => {
//       const index = parseInt(key);
//       if (openMenus[index] && contentRefs.current[index]) {
//         contentRefs.current[index]!.style.height = `${contentRefs.current[index]?.scrollHeight ?? 0}px`;
//       }
//     });
//   }, [openMenus]);

//   return (
//     <div className="fixed top-0 left-0 w-[220px] h-screen border-r border-border z-10 bg-card">
//       <div className="flex items-center justify-between py-4 px-4">
//         <SiteLogo className="flex-none" />
//         <div className="flex flex-col cursor-pointer gap-[3px]">
//           <span className="inline-block h-0.5 w-4 bg-primary"></span>
//           <span className="inline-block h-0.5 w-2.5 bg-primary"></span>
//           <span className="inline-block h-0.5 w-4 bg-primary"></span>
//         </div>
//       </div>
//       <ScrollArea className="flex-1">
//         <div className="flex flex-col px-2">
//           {menus.map((menu, index) => {
//             if (!menu.child) {
//               return <MenuItem key={index} menu={menu} />;
//             }

//             if (menu.child) {
//               return (
//                 <div key={index}>
//                   <div
//                     className="flex items-center cursor-pointer py-2 px-1.5 rounded group hover:bg-primary/10"
//                     onClick={() => toggleMenu(index)}
//                   >
//                     {menu.icon && (
//                       <menu.icon className="w-4 h-4 flex-none me-2 text-primary/90 group-hover:text-primary" />
//                     )}
//                     <span className="flex-1 text-xs font-medium text-default-700 mt-[3px] group-hover:text-primary">
//                       {menu.title}
//                     </span>
//                     <ChevronRight
//                       className={cn(
//                         "w-3 h-3 text-default-500 flex-none transition-transform duration-300",
//                         {
//                           "rotate-90": openMenus[index],
//                         }
//                       )}
//                     />
//                   </div>
//                   <div
//                     ref={(el) => (contentRefs.current[index] = el)}
//                     className="overflow-hidden transition-all duration-300"
//                     style={{ height: getHeight(index) }}
//                   >
//                     {menu.child.map((childItem, subIndex) => (
//                       <SubMenu key={subIndex} childItem={childItem} />
//                     ))}
//                   </div>
//                 </div>
//               );
//             }
//           })}
//         </div>
//       </ScrollArea>
//     </div>
//   );
// };

// export default Sidebar;
