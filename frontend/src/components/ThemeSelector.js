import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Palette, Sun, Moon, Sparkles } from 'lucide-react';
import { themes } from '../data/mock';

const ThemeSelector = ({ currentTheme, onThemeChange, position = "bottom-right" }) => {
  const getThemeIcon = (themeKey) => {
    switch(themeKey) {
      case 'colorful': return <Sparkles className="h-4 w-4" />;
      case 'dark': return <Moon className="h-4 w-4" />;
      case 'light': return <Sun className="h-4 w-4" />;
      default: return <Palette className="h-4 w-4" />;
    }
  };

  const getPositionClasses = () => {
    switch(position) {
      case 'top-right': return 'top-4 right-4';
      case 'top-left': return 'top-4 left-4';
      case 'bottom-left': return 'bottom-4 left-4';
      default: return 'bottom-4 right-4';
    }
  };

  return (
    <div className={`fixed ${getPositionClasses()} z-40 flex flex-col gap-2`}>
      <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-xs">
        Tema
      </Badge>
      <div className="flex flex-col gap-1">
        {Object.entries(themes).map(([key, theme]) => (
          <Button
            key={key}
            size="sm"
            variant={currentTheme === key ? "default" : "outline"}
            onClick={() => onThemeChange(key)}
            className={`w-10 h-10 p-0 backdrop-blur-sm ${
              currentTheme === key 
                ? 'bg-purple-600 hover:bg-purple-700' 
                : 'bg-white/90 hover:bg-white border-gray-300'
            }`}
            title={theme.name}
          >
            {getThemeIcon(key)}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;