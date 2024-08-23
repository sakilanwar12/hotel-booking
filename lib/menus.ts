

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