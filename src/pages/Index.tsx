
import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Newspaper, RefreshCw } from 'lucide-react';
import Header from '@/components/Header';
import HeadlineGrid from '@/components/HeadlineGrid';
import { fetchHeadlines } from '@/services/headlineService';
import { Headline } from '@/utils/constants';
import { cn } from '@/lib/utils';

const Index = () => {
  const { toast } = useToast();
  const [headlines, setHeadlines] = useState<Headline[]>([]);
  const [filteredHeadlines, setFilteredHeadlines] = useState<Headline[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSource, setCurrentSource] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadHeadlines = async () => {
    try {
      setIsLoading(true);
      const data = await fetchHeadlines();
      setHeadlines(data);
      setFilteredHeadlines(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to load headlines:", error);
      toast({
        title: "Unable to load headlines",
        description: "Please try again later",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadHeadlines();
  }, []);

  useEffect(() => {
    if (currentSource) {
      setFilteredHeadlines(
        headlines.filter((headline) => headline.source.toLowerCase().includes(currentSource.toLowerCase()))
      );
    } else {
      setFilteredHeadlines(headlines);
    }
  }, [currentSource, headlines]);

  const handleSourceFilter = (sourceId: string | null) => {
    setCurrentSource(sourceId);
  };

  const handleRefresh = async () => {
    if (refreshing) return;
    
    setRefreshing(true);
    try {
      await loadHeadlines();
      toast({
        title: "Headlines refreshed",
        description: "Latest headlines have been loaded"
      });
    } catch (error) {
      toast({
        title: "Error refreshing headlines",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSourceFilter={handleSourceFilter} currentSource={currentSource} />
      
      <main className="px-4 pt-24 pb-16 max-w-7xl mx-auto">
        <div className="mb-8 animate-fade-up">
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/40 text-sm text-accent-foreground mb-2">
                <Newspaper size={14} className="mr-1" />
                <span>Latest Headlines</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight">
                Today's Top Stories
              </h1>
            </div>
            
            <button
              onClick={handleRefresh}
              disabled={refreshing || isLoading}
              className={cn(
                "p-2 rounded-full transition-all",
                "hover:bg-secondary",
                (refreshing || isLoading) && "opacity-50 cursor-not-allowed"
              )}
            >
              <RefreshCw 
                size={20} 
                className={cn(
                  "text-muted-foreground", 
                  refreshing && "animate-spin"
                )} 
              />
            </button>
          </div>
        </div>
        
        <HeadlineGrid headlines={filteredHeadlines} isLoading={isLoading} />
      </main>
      
      <footer className="py-6 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            HeadlineHub aggregates headlines from various news sources for informational purposes only.
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} HeadlineHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
