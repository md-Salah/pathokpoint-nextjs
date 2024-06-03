export const isEnglish = (str: string) => {
  return /^[A-Za-z0-9 -,.]*$/.test(str);
}
