export interface MenuItem {
  name: string;
  query: string;
  hrefPrefix: string;
}


export interface SubMenuItem {
  id: string;
  name: string;
  slug: string;
}

export interface AdminSubMenuItem {
  name: string;
  href: string;
}

export interface AdminMenuItem {
  name: string;
  href: string;
  submenus: AdminSubMenuItem[];
}
