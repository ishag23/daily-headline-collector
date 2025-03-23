
import { useState, useEffect } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { NEWS_SOURCES } from '@/utils/constants';
import { cn } from '@/lib/utils';

interface HeaderProps {
  onSourceFilter: (sourceId: string | null) => void;
  currentSource: string | null;
}

const Header = ({ onSourceFilter, currentSource }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 backdrop-blur-md",
        isScrolled ? "bg-white/80 dark:bg-black/30 shadow-subtle" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              HeadlineHub
            </h1>
            <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              Beta
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => onSourceFilter(null)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                !currentSource ? "bg-primary text-white" : "hover:bg-secondary"
              )}
            >
              All Sources
            </button>
            
            {NEWS_SOURCES.map((source) => (
              <button
                key={source.id}
                onClick={() => onSourceFilter(source.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  currentSource === source.id ? "bg-primary text-white" : "hover:bg-secondary"
                )}
              >
                {source.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-2 animate-scale-in origin-top">
            <div className="flex flex-col space-y-1">
              <button 
                onClick={() => {
                  onSourceFilter(null);
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "px-4 py-3 rounded-lg text-left text-sm font-medium transition-all",
                  !currentSource ? "bg-primary text-white" : "hover:bg-secondary"
                )}
              >
                All Sources
              </button>
              
              {NEWS_SOURCES.map((source) => (
                <button
                  key={source.id}
                  onClick={() => {
                    onSourceFilter(source.id);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "px-4 py-3 rounded-lg text-left text-sm font-medium transition-all",
                    currentSource === source.id ? "bg-primary text-white" : "hover:bg-secondary"
                  )}
                >
                  {source.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
