# News Aggregator

## Overview

The News Aggregator is a web application that consolidates the latest headlines from multiple newspapers, including Times of India, Hindustan Times, and others, onto a single page. Users can quickly browse and stay updated with news from various sources without switching between websites.

## Features

- Fetches real-time headlines from multiple news sources.
- Displays news in a clean and organized manner.
- Allows users to filter headlines based on their preferred categories (Politics, Sports, Technology, etc.).
- Responsive design for mobile and desktop users.
- Automatic updates to keep headlines fresh.

## Technologies Used

- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js, Express.js
- **Data Fetching**: News API (or web scraping techniques)
- **Hosting**: Vercel/Netlify for frontend, Heroku/Render for backend

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- Node.js & npm
- Git

### Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/news-aggregator.git
   cd news-aggregator
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables for API keys (if using News API):
   ```sh
   echo "REACT_APP_NEWS_API_KEY=your_api_key" > .env
   ```
4. Start the application:
   ```sh
   npm start
   ```

## Usage

- Open `http://localhost:3000` in your browser.
- Browse the latest headlines from various sources.
- Filter headlines based on categories.

## Future Enhancements

- User authentication for personalized news feeds.
- Bookmarking favorite news articles.
- Dark mode for better readability.
- Push notifications for breaking news.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

<img width="1460" alt="Screenshot 2025-03-24 at 1 35 09 AM" src="https://github.com/user-attachments/assets/098a1f62-8267-4f32-a81d-21cbc0ee795f" />
