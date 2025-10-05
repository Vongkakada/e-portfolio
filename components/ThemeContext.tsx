import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem('theme') as Theme | null;

    if (initialTheme) {
      setTheme(initialTheme);
      root.classList.toggle('dark', initialTheme === 'dark');
    } else {
      const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = systemIsDark ? 'dark' : 'light';
      setTheme(initial);
      root.classList.toggle('dark', systemIsDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    const root = window.document.documentElement;
    
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    root.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
