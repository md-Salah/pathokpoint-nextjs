export const isEnglish = (str: string) => {
  return /^[A-Za-z0-9 -,.]*$/.test(str);
}

export const truncateWithEllipsis = (str: string, maxLength: number) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + '...';
}
