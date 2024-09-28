

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
    title: "Home",
    icon: "heroicons:home",
    href: "/home",
    child: []
  },
  {
    title: "Apps",
    href: "#",
    icon: "arcticons:amazon-appstore",
    child: [
      {
        title: "Education Apps",
        href: "education-apps",
      }
    ]
  },
  {
    title: "Pages",
    href: "#",
    icon: "simple-line-icons:docs",
    child: [
      {
        title: "Login",
        href: "/",
      },
      {
        title: "Sign Up",
        href: "/auth/signup"
      },
      {
        title: "Forgot",
        href: "/auth/forgot"
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
        href: "/forms/input",
      },
      {
        title: "Textarea",
        href: "/forms/textarea",
      },
    ]
  },
  {
    title: "Components",
    href: "/accordion",
    icon: "arcticons:graphene-apps",
    child: [
      {
        title: "Accordion",
        href: "/components/accordion",
      },
      {
        title: "Button",
        href: "/components/button"
      },
      {
        title: "Dialog",
        href: "/components/dialog"
      },
    ]
  },
  {
    title: "Table",
    href: "/table/basic",
    icon: "heroicons:table-cells",
    child: [
      {
        title: "Basic Table",
        href: "/table/basic",
      }
    ]
  },



]