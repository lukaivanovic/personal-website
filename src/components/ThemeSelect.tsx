"use client";

import * as React from "react";
import { Select } from "@base-ui-components/react/select";
import Caret from "@/assets/Caret";

const themes = [
  { label: "Vanilla", value: "vanilla" },
  { label: "8-ball", value: "8-ball" },
  { label: "Cool Blue", value: "cool-blue" },
  { label: "Hazelnut", value: "hazelnut" },
  { label: "Enigma", value: "shader" },
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
  if (typeof document === "undefined") return "8-ball";
  return document.documentElement.getAttribute("data-theme") || "8-ball";
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
      <Select.Trigger className="px-1 cursor-pointer md:cursor-default flex flex-row items-center gap-1 hover:bg-foreground hover:text-background active:bg-foreground active:text-background">
        {themes.find((theme) => theme.value === value)?.label || "8-ball"}
        <Caret className="rotate-90" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner
          className="outline-none select-none z-10"
          sideOffset={8}
          alignItemWithTrigger={false}
          align="end"
        >
          <Select.Popup className="bg-foreground text-background text-body px-1">
            <Select.List className="relative py-1">
              {themes.map(({ label, value: themeValue }) => (
                <Select.Item
                  key={label}
                  value={themeValue}
                  className="w-full cursor-pointer md:cursor-default hover:bg-background hover:text-foreground active:bg-background active:text-foreground px-1 group flex flex-row items-center gap-1"
                >
                  <Caret
                    className={`${
                      value === themeValue ? "visible" : "invisible"
                    } group-hover:visible invisible transition-opacity duration-200`}
                  />

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
