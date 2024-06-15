export const isEnglish = (str: string) => {
  return /^[A-Za-z0-9 -,.]*$/.test(str);
};

export const getAdminHeader = (pathname: string): string => {
  switch (pathname) {
    case "dashboard":
      return "Dashboard";
      break;
    case "product-management":
      return "Product Management";
      break;
    case "images":
      return "Images";
      break;
    case "order-management":
      return "Order Management";
      break;
    case "coupon":
      return "Coupon";
      break;
    case "reviews":
      return "Reviews";
      break;
    case "users":
      return "Users";
      break;
    case "couriers":
      return "Couriers";
      break;
    case "transaction":
      return "Transaction";
      break;
    default:
      return "";
      break;
  }
};
