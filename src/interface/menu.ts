export interface MenuItem {
  name: string;
  href: string;
  submenus: SubMenuItem[];
  type: string;
}

export interface SubMenuItem {
  name: string;
  href: string;
}
