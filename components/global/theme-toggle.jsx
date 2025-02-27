"use client";

import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-4 flex items-center justify-center bg-primary/80 hover:bg-primary/10 rounded-full h-10 w-10"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? (
        <MoonIcon className="!size-5 text-background" />
      ) : (
        <SunIcon className="!size-5 text-background" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
