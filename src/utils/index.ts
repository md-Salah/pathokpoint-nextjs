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

export const capitalizeFirstLetterOfEachWord = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const truncateWithEllipsis = (str: string, maxLength: number) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + '...';
}
