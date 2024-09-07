

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
export const menus: MenuProps[] = [
  {
    title: "Dashboard",
    icon: "material-symbols-light:dashboard-customize-outline-rounded",
    href: "/dashboard",
    child: [
      {
        title: "Dashboard",
        href: "/dashboard"
      },
      {
        title: "Ecommerce",
        href: "#"
      }
    ]
  },
  {
    title: "Apps",
    href: "#",
    icon: "arcticons:amazon-appstore",
    child: [
      {
        title: "Education Apps",
        href: "education-apps",
      },
      {
        title: "Ecommerce",
        href: "ecommerce"
      }
    ]
  },
  {
    title: "Forms",
    href: "#",
    icon: "cil:input-hdmi",
    child: [
      {
        title: "Input",
        href: "#",
      },
      {
        title: "Input Group",
        href: "#"
      }
    ]
  },
  {
    title: "Components",
    href: "#",
    icon: "arcticons:graphene-apps",
    child: [
      {
        title: "Accordion",
        href: "/accordion",
      },
      {
        title: "Button",
        href: "/button"
      }
    ]
  },
  {
    title: "Pages",
    href: "#",
    icon: "simple-line-icons:docs",
    child: [
      {
        title: "Authentication",
        href: "education-apps",
      },
      {
        title: "Ecommerce",
        href: "ecommerce"
      }
    ]
  },

]