"use client";

import { useState, useEffect } from "react";

export const useDemoCode = (demoPath: string) => {
  const [demoCode, setDemoCode] = useState("");

  useEffect(() => {
    const fetchDemoCode = async () => {
      const response = await fetch(`/txt-demos/${demoPath}`);
      const text = await response.text();
      setDemoCode(text);
    };

    fetchDemoCode();
  }, [demoPath]);

  return demoCode;
};
