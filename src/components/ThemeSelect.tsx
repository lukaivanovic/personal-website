"use client";

import * as React from "react";
import { Select } from "@base-ui-components/react/select";

const themes = [
  { label: "8-ball", value: "8-ball" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Cool Blue", value: "cool-blue" },
  { label: "Hazelnut", value: "hazelnut" },
];

function setTheme(theme: string) {
  const htmlElement = document.documentElement;

  // Use View Transitions API if available
  if (typeof document !== "undefined" && document.startViewTransition) {
    document.startViewTransition(() => {
      htmlElement.setAttribute("data-theme", theme);
    });
  } else {
    // Fallback without transitions
    htmlElement.setAttribute("data-theme", theme);
  }
}

function getCurrentTheme(): string {
  if (typeof document === "undefined") return "stone";
  return document.documentElement.getAttribute("data-theme") || "stone";
}

export default function ThemeSelect() {
  const [value, setValue] = React.useState<string>(() => getCurrentTheme());

  React.useEffect(() => {
    // Set initial value based on current theme
    setValue(getCurrentTheme());
  }, []);

  const handleValueChange = React.useCallback((newValue: string | null) => {
    if (newValue) {
      setValue(newValue);
      setTheme(newValue);
    }
  }, []);

  return (
    <Select.Root items={themes} value={value} onValueChange={handleValueChange}>
      <Select.Trigger className="cursor-default">
        {themes.find((theme) => theme.value === value)?.label || "Stone"}
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner
          className="outline-none select-none z-10"
          sideOffset={8}
          alignItemWithTrigger={false}
          align="end"
        >
          <Select.Popup className="bg-foreground text-background text-body px-2">
            <Select.List className="relative py-1">
              {themes.map(({ label, value }) => (
                <Select.Item key={label} value={value}>
                  <Select.ItemText>{label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
