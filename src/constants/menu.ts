import { MenuItem } from '@/interface';

export const adminMenuItems: MenuItem[] = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    submenus: [],
    type: "admin",
  },
  {
    name: "Product Management",
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
    name: "Order Management",
    href: "/admin/orders",
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

export const menuItems: MenuItem[] = [
  {
    name: "বই",
    href: "",
    submenus: [
      {
        name: "বাংলাদেশি বই",
        href: "/books",
      },
      {
        name: "ভারতীয় বাংলা বই",
        href: "/books",
      },
      {
        name: "বিদেশী ভাষার বই",
        href: "/books?language=english",
      },
      {
        name: "ইসলামিক বই",
        href: "/books",
      },
      {
        name: "অনুবাদ বই",
        href: "/books",
      },
      {
        name: "সেবা ও পাঞ্জেরী প্রকাশনীর বই",
        href: "/books",
      },
      {
        name: "Vintage Books",
        href: "/books?is_vintage=true",
      },
      {
        name: "Recently Added Books",
        href: "/books?order_by=created_at",
      },
    ],
    type: "frontend",
  },
  {
    name: "বিষয়",
    href: "",
    submenus: [
      {
        name: "কবিতা,উপন্যাস ও ছোটগল্প",
        href: "/books",
      },
      {
        name: "প্রবন্ধ ও আত্মজীবনী",
        href: "/books",
      },
      {
        name: "সংস্কৃতি ও ইতিহাস",
        href: "/books",
      },
      {
        name: "রাজনীতি ও দর্শন",
        href: "/books",
      },
      {
        name: "ইসলাম ও ইসলামের ইতিহাস",
        href: "/books",
      },
      {
        name: "রহস্য ও গোয়েন্দা",
        href: "/books",
      },
      {
        name: "ভৌতিক ও থ্রিলার",
        href: "/books",
      },
      {
        name: "সায়েন্স ফিকশন",
        href: "/books",
      },
      {
        name: "মুক্তিযুদ্ধ",
        href: "/books",
      },
      {
        name: "কমিক্স",
        href: "/books",
      },
    ],
    type: "frontend",
  },
  {
    name: "লেখক",
    href: "",
    submenus: [
      {
        name: "হুমায়ূন আহমেদ",
        href: "/authors/margaret-mitchell",
      },
      {
        name: "আহমদ ছফা",
        href: "/authors/margaret-mitchell",
      },
      {
        name: "আরিফ আজাদ",
        href: "/authors/margaret-mitchell",
      },
      {
        name: "সাদাত হোসাইন",
        href: "/authors/margaret-mitchell",
      },
      {
        name: "কাজী নজরুল ইসলাম",
        href: "/authors/margaret-mitchell",
      },
      {
        name: "রবীন্দ্রনাথ ঠাকুর",
        href: "/authors/margaret-mitchell",
      },
      {
        name: "মহিউদ্দীন আহমদ",
        href: "/authors/margaret-mitchell",
      },
      {
        name: "শহীদুল জহির",
        href: "/authors/margaret-mitchell",
      },
      {
        name: "আখতারুজ্জামান ইলিয়াস",
        href: "/authors/margaret-mitchell",
      },
      {
        name: "সমরেশ মজুমদার",
        href: "/authors/margaret-mitchell",
      },
      {
        name: "সুনীল গঙ্গ্যোপাধ্যায়",
        href: "/authors/margaret-mitchell",
      },
      {
        name: "Chetan Bhagat",
        href: "/authors/margaret-mitchell",
      },
      {
        name: "Anita Desai",
        href: "/authors/margaret-mitchell",
      },
      {
        name: "Jeffrey Archer",
        href: "/authors/margaret-mitchell",
      },
      {
        name: "John Grisham",
        href: "/authors/margaret-mitchell",
      },
    ],
    type: "frontend",
  },
  {
    name: "প্রকাশনী",
    href: "",
    submenus: [
      {
        name: "প্রথমা",
        href: "/publishers/maktabatuul-islam",
      },
      {
        name: "ইউনিভার্সিটি প্রেস লিমিটেড",
        href: "/publishers/maktabatuul-islam",
      },
      {
        name: "মাওলা ব্রাদার্স",
        href: "/publishers/maktabatuul-islam",
      },
      {
        name: "অন্যপ্রকাশ",
        href: "/publishers/maktabatuul-islam",
      },
      {
        name: "গার্ডিয়ান",
        href: "/publishers/maktabatuul-islam",
      },
      {
        name: "সমকালীন",
        href: "/publishers/maktabatuul-islam",
      },
      {
        name: "সময়",
        href: "/publishers/maktabatuul-islam",
      },
      {
        name: "সেবা  প্রকাশনী",
        href: "/publishers/maktabatuul-islam",
      },
      {
        name: "অনন্যা",
        href: "/publishers/maktabatuul-islam",
      },
      {
        name: "বাতিঘর",
        href: "/publishers/maktabatuul-islam",
      },
      {
        name: "অন্বেষন",
        href: "/publishers/maktabatuul-islam",
      },
      {
        name: "আনন্দ(ভারত)",
        href: "/publishers/maktabatuul-islam",
      },
      {
        name: "দে'জ(ভারত)",
        href: "/publishers/maktabatuul-islam",
      },
      {
        name: "Penguin",
        href: "/publishers/penguin",
      },
      {
        name: "Bantam",
        href: "/publishers/bantam",
      },
      {
        name: "Harper Collins",
        href: "/publishers/harper-collins",
      },
    ],
    type: "frontend",
  },
  {
    name: "My Orders",
    href: "/user/my-orders",
    submenus: [],
    type: "frontend",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
    submenus: [],
    type: "frontend",
  },
  {
    name: "FAQ",
    href: "/faq",
    submenus: [],
    type: "frontend",
  },
];
