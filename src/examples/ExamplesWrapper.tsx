"use client";
import React from "react";
import { useThemeContext } from "@/providers/ThemeProvider";
import { useSearchParams } from "next/navigation";
import { Theme } from "simple-table-core";

const ExamplesWrapper = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const { theme: websiteMode } = useThemeContext();
  const theme = (searchParams?.get("theme") as Theme) || websiteMode;

  return (
    <>
      {React.isValidElement(children) ? React.cloneElement(children, { theme } as any) : children}
    </>
  );
};

export default ExamplesWrapper;
