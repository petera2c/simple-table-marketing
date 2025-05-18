"use client";

import { useState, useEffect } from "react";

export const useDemoCode = (demoPath?: string) => {
  const [demoCode, setDemoCode] = useState("");

  useEffect(() => {
    if (!demoPath) return;
    const fetchDemoCode = async () => {
      const response = await fetch(`/txt-demos/${demoPath}`);
      console.log(`/txt-demos/${demoPath}`);
      console.log(response);
      const text = await response.text();
      console.log(text);
      setDemoCode(text);
    };

    fetchDemoCode();
  }, [demoPath]);

  return demoCode;
};
