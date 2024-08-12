export const isEnglish = (str: string) => {
  return /^[A-Za-z0-9 -,.]*$/.test(str);
}

// export const truncateWithEllipsis = (str: string, maxLength: number) => {
//   if (str.length <= maxLength) {
//     return str;
//   }
//   return str.substring(0, maxLength) + '...';
// }

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getSubmenuItemPath = (subMenuItem: any, menuType: any) => {
  switch (menuType) {
    case "admin":
      return subMenuItem.slug;
    case "category":
      return `category/${subMenuItem.slug}`;
    case "publisher":
      return `publisher/${subMenuItem.slug}`;
    case "author":
      return `author/${subMenuItem.slug}`;
    default:
      return "";
  }
};

export const isEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};


export const isPhoneNumber = (phone: string) => {
  return /^[0-9]{11}$/.test(phone);
};

// export const capitalizeFirstLetterOfEachWord = (str: string) => {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// };

// export const truncateString = (str: string, num: number) => {
//   if (str.length <= num) {
//     return str;
//   }
//   return str.slice(0, num) + "...";
// }
