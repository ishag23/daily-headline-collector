
import { NEWS_SOURCES, Headline } from "@/utils/constants";

// In a real application, this would be a server-side API call
// Here we're simulating fetching headlines with mock data
export const fetchHeadlines = async (): Promise<Headline[]> => {
  // This is a mock implementation
  // In a production environment, you would make actual API calls to a backend service
  // that handles the web scraping of headlines from various news sources
  
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return mockHeadlines;
  } catch (error) {
    console.error("Error fetching headlines:", error);
    throw new Error("Failed to fetch headlines");
  }
};

// Mock data to simulate headlines
const mockHeadlines: Headline[] = [
  {
    id: "1",
    title: "PM Modi meets top CEOs, discusses investment opportunities in India",
    source: "Times of India",
    sourceLogo: NEWS_SOURCES[0].logoUrl,
    url: "#",
    timestamp: new Date().toISOString(),
  },
  {
    id: "2",
    title: "IPL 2023: Chennai Super Kings defeat Mumbai Indians in thrilling match",
    source: "Hindustan Times",
    sourceLogo: NEWS_SOURCES[1].logoUrl,
    url: "#",
    timestamp: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Union Budget 2023: Government announces major tax reforms",
    source: "NDTV",
    sourceLogo: NEWS_SOURCES[2].logoUrl,
    url: "#",
    timestamp: new Date().toISOString(),
  },
  {
    id: "4",
    title: "NASA's new spacecraft makes successful landing on Mars",
    source: "The Hindu",
    sourceLogo: NEWS_SOURCES[3].logoUrl,
    url: "#",
    timestamp: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Indian economy shows signs of recovery, GDP growth projected at 7.5%",
    source: "Indian Express",
    sourceLogo: NEWS_SOURCES[4].logoUrl,
    url: "#",
    timestamp: new Date().toISOString(),
  },
  {
    id: "6",
    title: "Supreme Court delivers landmark judgment on privacy rights",
    source: "Times of India",
    sourceLogo: NEWS_SOURCES[0].logoUrl,
    url: "#",
    timestamp: new Date().toISOString(),
  },
  {
    id: "7",
    title: "Heavy rainfall causes flooding in major cities across the country",
    source: "Hindustan Times",
    sourceLogo: NEWS_SOURCES[1].logoUrl,
    url: "#",
    timestamp: new Date().toISOString(),
  },
  {
    id: "8",
    title: "Indian cricket team announces squad for upcoming World Cup",
    source: "NDTV",
    sourceLogo: NEWS_SOURCES[2].logoUrl,
    url: "#",
    timestamp: new Date().toISOString(),
  },
  {
    id: "9",
    title: "New health policy focuses on affordable healthcare for all",
    source: "The Hindu",
    sourceLogo: NEWS_SOURCES[3].logoUrl,
    url: "#",
    timestamp: new Date().toISOString(),
  },
  {
    id: "10",
    title: "Tech companies announce major investments in AI research in India",
    source: "Indian Express",
    sourceLogo: NEWS_SOURCES[4].logoUrl,
    url: "#",
    timestamp: new Date().toISOString(),
  },
  {
    id: "11",
    title: "Parliament passes new education bill with focus on skill development",
    source: "Times of India",
    sourceLogo: NEWS_SOURCES[0].logoUrl,
    url: "#",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: "12",
    title: "Stock market hits all-time high as foreign investments surge",
    source: "Hindustan Times",
    sourceLogo: NEWS_SOURCES[1].logoUrl,
    url: "#",
    timestamp: new Date(Date.now() - 7200000).toISOString(),
  },
];
