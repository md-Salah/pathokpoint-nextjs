export const isEnglish = (str: string) => {
  return /^[A-Za-z0-9 -,.]*$/.test(str);
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
