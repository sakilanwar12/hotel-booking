import { Components, Grid, Home, ThreeCard } from "@/components/svg";

export const menus = [
  {
    title: "Dashboard",
    href: "#",
    icon: Home,
    child: [
      {
        title: "Dashboard",
        href:"dashboard"
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
        title: "Alert",
        href: "#",
      },
      {
        title:"Avatar",
        href:"#"
      }
    ]
  },
  {
    title: "Utilities",
    href: "#",
  }

]