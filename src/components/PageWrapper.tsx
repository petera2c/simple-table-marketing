"use client";

import { ConfigProvider, theme } from "antd";
import { useThemeContext } from "../providers/ThemeProvider";
import useScrollRestoration from "../hooks/useScrollRestoration";

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  useScrollRestoration();
  const themeContext = useThemeContext();

  return (
    <ConfigProvider
      theme={{
        algorithm: themeContext.theme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          fontFamily: "nunito",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
