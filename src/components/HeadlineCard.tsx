
import { Headline } from '@/utils/constants';
import { format } from 'date-fns';
import { ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HeadlineCardProps {
  headline: Headline;
  index: number;
}

const HeadlineCard = ({ headline, index }: HeadlineCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Stagger the animation for each card
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    
    return () => clearTimeout(timer);
  }, [index]);
  
  const formattedTime = format(
    new Date(headline.timestamp), 
    'h:mm a'
  );
  
  return (
    <a 
      href={headline.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "block h-full",
        "opacity-0 translate-y-4",
        isVisible && "opacity-100 translate-y-0",
        "transition-all duration-500 ease-out"
      )}
    >
      <div className="h-full border rounded-xl overflow-hidden group hover-elevate bg-card p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="w-6 h-6 mr-2 overflow-hidden rounded-sm">
              <img 
                src={headline.sourceLogo} 
                alt={headline.source}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {headline.source}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            {formattedTime}
          </span>
        </div>
        
        <h3 className="text-lg font-medium leading-tight mb-3 group-hover:text-primary transition-colors">
          {headline.title}
        </h3>
        
        <div className="mt-auto flex items-center text-xs text-muted-foreground">
          <ExternalLink size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="group-hover:underline">Read full article</span>
        </div>
      </div>
    </a>
  );
};

export default HeadlineCard;
