## Running Locally

Requires Node.js 18.17 or later.

1. Clone the project.
```bash
git clone https://github.com/WhiteDG/nextjs-hackernews.git](https://github.com/ShenpaiSharma/Hacker-News.git
```
```
cd Hacker-News
```
2. Copy `.env.example` to `.env.local` and update the variables.
```bash
cp .env.example .env.local
```
3. Install dependencies.
```bash
npm install
```
4. Run the development server with hot reload.
```bash
npm run dev
```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

6. Build for production
```bash
npm run build
```

## Deployed Version

You can view the live version of this Hacker News clone at the following link: [Hacker News Clone](https://hacker-news-eight-iota.vercel.app/). This allows you to interact with the app without running it locally.


## APIs
This project leverages the power of various APIs to provide an enriched user experience:
- [HackerNews Official API](https://github.com/HackerNews/API)
  - Get stories
  - Get comments
  - Get user profiles
 
# Hacker News Clone Documentation

## Features

This Hacker News clone is built with modern web technologies and includes the following features:

- **Next.js App Router:** This feature allows for smooth and fast navigation between different pages in the application.

- **Beautifully Designed Components:** The app has an attractive and user-friendly design, making it visually appealing.

- **Story Browsing:** Users can explore stories by different categories:
  - **Top:** The stories that have received the most votes.
  - **Newest:** The latest submissions to the site.
  - **Best:** Stories that are rated highly by users.
  - **Ask:** Questions that users have posted.
  - **Jobs:** Job listings from various companies.

- **Responsive Design:** The application looks good and functions well on both mobile and desktop devices, adapting to different screen sizes.
