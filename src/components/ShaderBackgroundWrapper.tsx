"use client";

import * as React from "react";
import ShaderBackground from "./ShaderBackground";

export default function ShaderBackgroundWrapper() {
  const [theme, setTheme] = React.useState<string>("vanilla");

  React.useEffect(() => {
    // Get initial theme
    const htmlElement = document.documentElement;
    setTheme(htmlElement.getAttribute("data-theme") || "vanilla");

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          const newTheme = htmlElement.getAttribute("data-theme") || "vanilla";
          setTheme(newTheme);
        }
      });
    });

    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  if (theme !== "shader") {
    return null;
  }

  return <ShaderBackground />;
}
