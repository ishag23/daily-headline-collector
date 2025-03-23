
import { Headline } from '@/utils/constants';
import HeadlineCard from './HeadlineCard';
import { useEffect, useRef } from 'react';

interface HeadlineGridProps {
  headlines: Headline[];
  isLoading: boolean;
}

const HeadlineGrid = ({ headlines, isLoading }: HeadlineGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isLoading && gridRef.current) {
      // Add a reveal animation effect
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        { threshold: 0.1 }
      );
      
      // Observe each article element
      const articles = gridRef.current.querySelectorAll('article');
      articles.forEach((article) => observer.observe(article));
      
      return () => observer.disconnect();
    }
  }, [isLoading]);
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div 
            key={index} 
            className="h-[180px] rounded-xl bg-secondary/60 animate-pulse"
          />
        ))}
      </div>
    );
  }
  
  if (headlines.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">No headlines found</h3>
        <p className="text-muted-foreground">
          Please try again later or select a different source.
        </p>
      </div>
    );
  }
  
  return (
    <div 
      ref={gridRef} 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {headlines.map((headline, index) => (
        <HeadlineCard 
          key={headline.id} 
          headline={headline} 
          index={index}
        />
      ))}
    </div>
  );
};

export default HeadlineGrid;
