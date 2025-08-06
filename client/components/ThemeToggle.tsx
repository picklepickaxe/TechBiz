import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a preference stored
    const stored = localStorage.getItem('techbiz-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (stored === 'dark' || (!stored && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('techbiz-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('techbiz-theme', 'light');
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="border-techbiz-purple/30 hover:border-techbiz-purple hover:bg-techbiz-purple/10 transition-colors"
    >
      <div className="flex items-center gap-2">
        {isDark ? (
          <>
            <Sun className="h-4 w-4 text-techbiz-purple" />
            <span className="text-sm font-medium text-techbiz-purple">Light</span>
          </>
        ) : (
          <>
            <Moon className="h-4 w-4 text-techbiz-purple" />
            <span className="text-sm font-medium text-techbiz-purple">Dark</span>
          </>
        )}
      </div>
    </Button>
  );
}
