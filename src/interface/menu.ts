export interface MenuItem {
  name: string;
  slug: string;
  submenus: SubMenuItem[];
  type: string;
}

export interface SubMenuItem {
  name: string;
  slug: string;
}
