export const isEnglish = (str: string) => {
  return /^[A-Za-z0-9 -,.]*$/.test(str);
};

export const getSubmenuItemPath = (subMenuItem: any, menuType: any) => {
  switch (menuType) {
    case "admin":
      return subMenuItem.slug;
      break;
    case "category":
      return `category/${subMenuItem.slug}`;
      break;
    case "publisher":
      return `publisher/${subMenuItem.slug}`;
      break;
    case "author":
      return `author/${subMenuItem.slug}`;
      break;
    default:
      return "";
      break;
  }
};

export const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};
