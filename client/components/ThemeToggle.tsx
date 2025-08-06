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
      className="relative overflow-hidden border-techbiz-blue-primary/30 hover:border-techbiz-blue-primary hover:bg-techbiz-blue-primary/10 transition-all duration-300"
    >
      <div className="relative flex items-center gap-2">
        {isDark ? (
          <>
            <Sun className="h-4 w-4 text-techbiz-blue-primary animate-float" />
            <span className="text-sm font-medium">Light</span>
          </>
        ) : (
          <>
            <Moon className="h-4 w-4 text-techbiz-blue-primary animate-float-reverse" />
            <span className="text-sm font-medium">Dark</span>
          </>
        )}
      </div>
      
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-techbiz-blue-primary/5 to-techbiz-blue-secondary/5 animate-gradient-shift opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </Button>
  );
}
