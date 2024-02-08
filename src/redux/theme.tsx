"use client";
import { useAppSelector } from "@/hooks/storeHook";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useAppSelector((state) => state.theme);
  return <div data-theme={theme}>{children}</div>;
};
