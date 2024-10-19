export interface MenuProps {
  title: string;
  href: string;
  icon?: string;
}
export const menus: MenuProps[] = [
  {
    title: "Home",
    icon: "heroicons:home",
    href: "/home",
  },
  {
    title: "Save",
    icon: "cil:save",
    href: "/save",
  },
  {
    title: "Support",
    icon: "heroicons-outline:support",
    href: "/support",
  },
  {
    title: "Cart List",
    icon: "heroicons:shopping-cart",
    href: "/cart-list",
  },
  {
    title: "Orders",
    icon: "heroicons:clipboard-document-list-solid",
    href: "/orders",
  },
  {
    title: "Category",
    icon: "tabler:category-filled",
    href: "/category",
  },
  {
    title: "Hotel",
    icon: "fa-solid:hotel",
    href: "/hotel",
  },
  {
    title: "Weeding Venue",
    icon: "cil:weightlifitng",
    href: "/weeding-venue",
  },
  {
    title: "Weeding Event",
    icon: "heroicons:calendar-date-range",
    href: "/weeding-event",
  },
];

export const mobileFooterMenu: MenuProps[] = [
  {
    title: "Home",
    icon: "heroicons:home",
    href: "/home",
  },
  {
    title: "Orders",
    icon: "heroicons:clipboard-document-list",
    href: "/orders",
  },
  {
    title: "Category",
    icon: "fluent:grid-20-regular",
    href: "/category",
  },
  {
    title: "Save",
    icon: "mdi-light:content-save",
    href: "/save",
  },
];
