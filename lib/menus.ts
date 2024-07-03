import { Components, Grid, Home, ThreeCard } from "@/components/svg";

export interface SubmenuProps {
  title: string;
  href: string;
}
export interface MenuProps {
  title: string;
  href: string;
  icon?: any;
  child?: SubmenuProps[]
}
export const menus:MenuProps[] = [
  {
    title: "Dashboard",
    href: "#",
    icon: Home,
    child: [
      {
        title: "Dashboard",
        href:"/dashboard"
      },
      {
        title: "Ecommerce",
        href:"#"
      }
    ]
  },
  {
    title: "Pages & Layouts",
    href: "#",
    icon: Grid,
    child: [
      {
        title: "Education Apps",
        href: "education-apps",
      },
      {
        title:"Ecommerce",
        href:"ecommerce"
      }
    ]
  },
  {
    title: "Forms",
    href: "#",
    icon: ThreeCard,
    child: [
      {
        title: "Input",
        href: "#",
      },
      {
        title:"Input Group",
        href:"#"
      }
    ]
  },
  {
    title: "Components",
    href: "#",
    icon: Components,
    child: [
      {
        title: "Accordion",
        href: "/accordion",
      },
      {
        title:"Button",
        href:"/button"
      }
    ]
  }

]