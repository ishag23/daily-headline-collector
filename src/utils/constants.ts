
export const NEWS_SOURCES = [
  {
    id: "times-of-india",
    name: "Times of India",
    url: "https://timesofindia.indiatimes.com/",
    logoUrl: "https://static.toiimg.com/photo/47529300.cms",
    selector: ".top-newslist ul li a",
  },
  {
    id: "hindustan-times",
    name: "Hindustan Times",
    url: "https://www.hindustantimes.com/",
    logoUrl: "https://www.hindustantimes.com/images/app-images/ht/logo_horizontal.png",
    selector: ".hdg3 a",
  },
  {
    id: "ndtv",
    name: "NDTV",
    url: "https://www.ndtv.com/",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c5/NDTV_logo.svg",
    selector: ".newsHdng a",
  },
  {
    id: "the-hindu",
    name: "The Hindu",
    url: "https://www.thehindu.com/",
    logoUrl: "https://www.thehindu.com/theme/images/th-online/logo.png",
    selector: ".title a",
  },
  {
    id: "indian-express",
    name: "Indian Express",
    url: "https://indianexpress.com/",
    logoUrl: "https://images.indianexpress.com/2021/04/indian-express-logo-new.jpg",
    selector: ".title a",
  }
];

export interface Headline {
  id: string;
  title: string;
  source: string;
  sourceLogo: string;
  url: string;
  timestamp: string;
}
