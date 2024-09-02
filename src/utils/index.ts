export const isEnglish = (str: string) => {
  return /^[A-Za-z0-9 -,.]*$/.test(str);
};

export const truncateWithEllipsis = (str: string, maxLength: number) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + "...";
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const isEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isPhoneNumber = (phone: string) => {
  return /^[0-9]{11}$/.test(phone);
};

export const capitalizeFirstLetterOfEachWord = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const title = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

export const dateTime = (timestamp: string) => {
  const dt = new Date(timestamp);
  const now = new Date();

  const isToday =
    dt.getDate() === now.getDate() &&
    dt.getMonth() === now.getMonth() &&
    dt.getFullYear() === now.getFullYear();

  const isYesterday =
    dt.getDate() === now.getDate() - 1 &&
    dt.getMonth() === now.getMonth() &&
    dt.getFullYear() === now.getFullYear();

  const showYear = dt.getFullYear() !== now.getFullYear();

  let date = dt.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    ...(showYear ? { year: "numeric" } : {}),
  });

  if (isToday) {
    date = "Today";
  } else if (isYesterday) {
    date = "Yesterday";
  }

  const time = dt.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const datetime = `${date} - ${time}`;

  return {
    date,
    time,
    datetime,
  };
};

export const isStaff = (role: string) =>
  ["admin", "staff", "super-admin"].includes(role);
