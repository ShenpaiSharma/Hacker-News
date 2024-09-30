## Features

- Next.js App Router
- React Server Components (RSCs) and Suspense
- Server Actions for mutations
- Beautifully designed components from shadcn/ui
- Styling with Tailwind CSS
- Browse stories: Top, Newest, Best, Show, Ask, Jobs.
- Search for stories.
- User authentication: Create an account or log in using your Hacker News account to access personalized features.
- Mark stories as favorite.
- Upvote stories or comments.
- Add comments.
- View user profile: About, Submitted, Comments, Favorites, Upvoted(private).
- Responsive design: Friendly to both mobile and desktop.
- Automatic light/dark mode based on system settings.

## Running Locally

Requires Node.js 18.17 or later.

0. Clone the project.
```bash
git clone https://github.com/WhiteDG/nextjs-hackernews.git](https://github.com/ShenpaiSharma/Hacker-News.git

cd Hacker-News
```

1. Install dependencies.
```bash
npm install
```
2. Run the development server with hot reload.
```bash
npm run dev
```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. Build for production
```bash
pnpm run build
```

## APIs
This project leverages the power of various APIs to provide an enriched user experience:
- [HackerNews Official API](https://github.com/HackerNews/API)
  - Get stories
  - Get comments
  - Get user profiles
