import { MenuItem } from "@/interface";
import { authors } from "./books";
import { categories } from "./categories";
import { publishers } from "./publishers";

export const menuItems = [
  {
    name: "হোম",
    path: "/",
  },
  {
    name: "অফার",
    path: "/offer",
  },
  {
    name: "বেস্ট সেলার",
    path: "/best-seller-books",
  },
  {
    name: "লেখক",
    path: "/authors",
  },
  {
    name: "বিষয়",
    path: "/categories",
  },
  {
    name: "প্রকাশনী",
    path: "/publishers",
  },
];

export const banners = [
  {
    name: "বই মেলা ২০২১",
    path: "/",
    src: "/banner/b (1).png",
  },
  {
    name: "বই মেলা ২০২১",
    path: "/",
    src: "/banner/b (2).png",
  },
  {
    name: "বই মেলা ২০২১",
    path: "/",
    src: "/banner/b (3).png",
  },
];

export const adminMenuItems: MenuItem[] = [
  {
    name: "Dashboard",
    slug: "/admin/dashboard",
    submenus: [],
    type: "admin",
  },
  {
    name: "Product Management",
    slug: "",
    submenus: [
      {
        name: "Books",
        slug: "/admin/product-management/books",
      },
      {
        name: "Authors",
        slug: "/admin/product-management/authors",
      },
      {
        name: "Category",
        slug: "/admin/product-management/categories",
      },
      {
        name: "Publishers",
        slug: "/admin/product-management/publishers",
      },
      {
        name: "Tags",
        slug: "/admin/product-management/tags",
      },
    ],
    type: "admin",
  },
  {
    name: "Images",
    slug: "/admin/images",
    submenus: [],
    type: "admin",
  },
  {
    name: "Order Management",
    slug: "/admin/order-management",
    submenus: [],
    type: "admin",
  },
  {
    name: "Coupon",
    slug: "/admin/coupon",
    submenus: [],
    type: "admin",
  },
  {
    name: "Reviews",
    slug: "/admin/reviews",
    submenus: [],
    type: "admin",
  },
  {
    name: "User",
    slug: "/admin/users",
    submenus: [],
    type: "admin",
  },
  {
    name: "Courier",
    slug: "/admin/couriers",
    submenus: [],
    type: "admin",
  },
  {
    name: "Transaction",
    slug: "",
    type: "admin",
    submenus: [
      {
        name: "Payment Gateway",
        slug: "/admin/transaction/payment-gateway",
      },
      {
        name: "Activity Log",
        slug: "/admin/transaction/activity-log",
      },
      {
        name: "Email Log",
        slug: "/admin/transaction/email-log",
      },
    ],
  },
];

export const frontendMenuItems: MenuItem[] = [
  {
    name: "ইসলামিক ক্যাটাগরি",
    slug: "",
    submenus: categories.map((category) => ({
      name: category.name,
      slug: `/category/${category.slug}`,
    })),
    type: "frontend",
  },
  {
    name: "প্রকাশনী",
    slug: "",
    submenus: publishers.map((publisher) => ({
      name: publisher.name,
      slug: `/publisher/${publisher.slug}`,
    })),
    type: "frontend",
  },
  {
    name: "লেখক",
    slug: "",
    submenus: authors.map((author) => ({
      name: author.name,
      slug: `/author/${author.slug}`,
    })),
    type: "frontend",
  },
  {
    name: "বইমেলা ২০২৪",
    slug: "tag/boi-mela-2024",
    submenus: [],
    type: "frontend",
  },
];
