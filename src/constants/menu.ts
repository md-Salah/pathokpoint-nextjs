export const adminMenuItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    submenus: [],
    type: "admin",
  },
  {
    name: "Orders",
    href: "/admin/orders",
    submenus: [],
    type: "admin",
  },
  {
    name: "Inventory",
    href: "",
    submenus: [
      {
        name: "Books",
        href: "/admin/books",
      },
      {
        name: "Authors",
        href: "/admin/authors",
      },
      {
        name: "Category",
        href: "/admin/categories",
      },
      {
        name: "Publishers",
        href: "/admin/publishers",
      },
      {
        name: "Tags",
        href: "/admin/tags",
      },
    ],
    type: "admin",
  },

  {
    name: "Images",
    href: "/admin/images",
    submenus: [],
    type: "admin",
  },
  {
    name: "Coupon",
    href: "/admin/coupon",
    submenus: [],
    type: "admin",
  },
  {
    name: "Reviews",
    href: "/admin/reviews",
    submenus: [],
    type: "admin",
  },
  {
    name: "User",
    href: "/admin/users",
    submenus: [],
    type: "admin",
  },
  {
    name: "Courier",
    href: "/admin/couriers",
    submenus: [],
    type: "admin",
  },
  {
    name: "Transaction",
    href: "",
    type: "admin",
    submenus: [
      {
        name: "Payment Gateway",
        href: "/admin/transaction/payment-gateway",
      },
      {
        name: "Activity Log",
        href: "/admin/transaction/activity-log",
      },
      {
        name: "Email Log",
        href: "/admin/transaction/email-log",
      },
    ],
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
  },
  {
    name: "বিষয়",
    query: "/category/all?page=1&per_page=40",
    hrefPrefix: "/categories/",
  },
  {
    name: "লেখক",
    query: "/author/all?page=1&per_page=40",
    hrefPrefix: "/authors/",
  },
  {
    name: "প্রকাশনী",
    query: "/publisher/all?page=1&per_page=40",
    hrefPrefix: "/publishers/",
  },
];
