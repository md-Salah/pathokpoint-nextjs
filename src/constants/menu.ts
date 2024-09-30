export const adminMenuItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    submenus: [],
  },
  {
    name: "Inventory",
    href: "",
    submenus: [
      {
        name: "Book",
        href: "/admin/books",
      },
      {
        name: "Author",
        href: "/admin/authors",
      },
      {
        name: "Category",
        href: "/admin/categories",
      },
      {
        name: "Publisher",
        href: "/admin/publishers",
      },
      {
        name: "Tag",
        href: "/admin/tags",
      },
    ],
  },
  {
    name: "Order",
    href: "/admin/orders",
    submenus: [],
  },
  {
    name: "User",
    href: "/admin/users",
    submenus: [],
  },
  {
    name: "Coupon",
    href: "/admin/coupons",
    submenus: [],
  },
  {
    name: "Review",
    href: "/admin/reviews",
    submenus: [],
  },

  {
    name: "Courier",
    href: "/admin/couriers",
    submenus: [],
  },
  {
    name: "Image",
    href: "/admin/images",
    submenus: [],
  },
  {
    name: "Transaction",
    href: "/admin/transactions",
    submenus: [],
  },
];

export const importantLinks = [
  {
    name: "My Orders",
    href: "/user/my-order",
  },
  {
    name: "Contact Us",
    href: "/info/contact-us",
  },
  {
    name: "FAQ",
    href: "/info/faq",
  },
];

export const menuItems = [
  {
    name: "বই",
    query: "/tag/all?page=1&per_page=40",
    hrefPrefix: "/books?tag__slug__in=",
    filter: "",
  },
  {
    name: "বিষয়",
    query: "/category/all?page=1&per_page=40&is_in_menu=true",
    hrefPrefix: "/categories/",
    filter: "",
  },
  {
    name: "লেখক",
    query: "/author/all?page=1&per_page=40&is_in_menu=true",
    hrefPrefix: "/authors/",
    filter: "",
  },
  {
    name: "প্রকাশনী",
    query: "/publisher/all?page=1&per_page=40&is_in_menu=true",
    hrefPrefix: "/publishers/",
    filter: "",
  },
];
