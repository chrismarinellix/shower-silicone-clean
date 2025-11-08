# Kartell Caulking Website

Professional bathroom silicone removal and replacement services website for Kartell Caulking, serving Sandringham, Victoria and surrounding Melbourne suburbs.

## Features

- **Fully Responsive Design**: Mobile-first design with clamp-based typography that scales perfectly on all devices
- **Modern UI**: Vibrant orange gradient theme with glassmorphic design elements
- **Kartell Anthem Music Player**: Interactive audio player with real-time visualizer bars and synchronized scrolling lyrics
- **Informational Pages**: Comprehensive information about silicone services
- **Learning Center**: Gamified educational modules about bathroom silicone
- **SEO Optimized Blog**: Educational content with proper metadata
- **Contact Form**: Professional quote request system with validation
- **Careers Page**: Job application for casual positions
- **Legal Pages**: Comprehensive Terms & Conditions and Payment Terms sections

## Tech Stack

- **React 18** - Modern UI framework with hooks
- **Vite 7** - Lightning-fast build tool and dev server
- **React Router DOM 6** - Client-side routing
- **Ant Design 5** - Professional React UI component library
- **HTML5 Audio API** - Native audio playback with precise time synchronization
- **Vanilla JavaScript** - Performance-optimized lyrics sync and animation
- **Inter Font** - Clean, modern typography via Google Fonts

## Design System

### Color Palette

```css
Primary Orange: #FF6B35
Secondary Orange: #F7931E
Dark Background: #1a1a1a
Light Background: #f5f5f5 / #f8f9fa
Text: #1a1a1a (headings), #2C2C2C (body), #6B6B6B (secondary)
```

### Responsive Typography

All text uses `clamp()` for fluid scaling:
- **H1 Hero**: `clamp(2rem, 5vw, 3.5rem)` - scales from 32px to 56px
- **H2 Sections**: `clamp(1.75rem, 4vw, 2.5rem)` - scales from 28px to 40px
- **Subtitles**: `clamp(1rem, 2.5vw, 1.4rem)` - scales from 16px to 22.4px

### Spacing

- **Hero Sections**: `padding: 80px 20px 60px`
- **Content Sections**: `padding: 60px 20px`
- **Container Max Width**: `1200px`

## Local Development

### Prerequisites
- Node.js 18 or higher
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will run at `http://localhost:5173` (or next available port)

## Deployment

### Current Deployment

**Primary URL**: https://shower-silicone-melbourne.netlify.app
**Alternative URL**: https://kartell-caulking.netlify.app

### Deploy via Netlify CLI

```bash
# Build the project
npm run build

# Deploy to production
netlify deploy --prod --dir=dist
```

### Netlify Configuration

The site uses `netlify.toml` for configuration:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect rule for React Router

## Project Structure

```
silicone-spa/
├── public/
│   ├── images/              # Image assets
│   │   ├── logo.png
│   │   ├── bathroom-*.jpg
│   │   ├── service-*.jpg
│   │   └── blog/*.jpg
│   ├── simple.html          # Main landing page with music player
│   └── kartell-song.mp3     # Kartell Anthem audio file
├── src/
│   ├── components/
│   │   ├── Navigation.jsx   # Header with responsive menu
│   │   └── Footer.jsx       # Footer with contact info
│   ├── data/
│   │   └── blogPosts.js     # Blog content data
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── WhatWeDo.jsx     # Services overview
│   │   ├── WhyReplace.jsx   # Benefits/value prop
│   │   ├── HowItWorks.jsx   # Process explanation
│   │   ├── WhenToReplace.jsx # Quiz/assessment
│   │   ├── Learning.jsx     # Educational modules
│   │   ├── Blog.jsx         # Blog listing
│   │   ├── BlogPost.jsx     # Blog article view
│   │   ├── Contact.jsx      # Quote form
│   │   └── Careers.jsx      # Job applications
│   ├── App.jsx              # Main app with routing
│   ├── App.css              # Global styles
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── netlify.toml             # Netlify config
├── package.json
├── vite.config.js
└── README.md
```

## Kartell Anthem Music Player

The landing page features an interactive music player with the Kartell Anthem - a custom-written song that serves as the company jingle.

### Features

- **Animated Visualizer**: 5 vertical bars that pulse and animate in sync with the audio
- **Synchronized Lyrics**: Lyrics scroll and highlight in real-time as the song plays
- **Smooth Transitions**: CSS cubic-bezier easing for seamless lyric transitions
- **Responsive Design**: Optimized for both mobile and desktop devices
- **Performance Optimized**: DOM elements built once, only CSS properties updated during playback

### Technical Implementation

The music player is implemented in `public/simple.html` using:

1. **HTML5 Audio API**: Provides precise time tracking for lyric synchronization
2. **timeupdate Event**: Fires continuously during playback to sync lyrics (every ~250ms)
3. **CSS Animations**: Visualizer bars use staggered animations with different delays
4. **Lyrics Array**: Timestamps calibrated to match vocal timing across the entire 230-second song
5. **Build-Once Pattern**: DOM elements created once, then only style properties are updated for smooth 60fps animations

### Lyrics Synchronization

Lyrics are stored as an array of objects with precise timestamps:

```javascript
const lyrics = [
  { time: 4.2, text: "I've seen foundations crumble" },
  { time: 7.2, text: "watched the water seep on through" },
  // ... 80+ more lines
];
```

Timing is shifted 0.8-1 second earlier than vocals to account for visual perception lag, ensuring text appears just before it's sung.

### Audio File

- **Location**: `public/kartell-song.mp3`
- **Duration**: 230 seconds (3:50)
- **Format**: MP3
- **Source**: Custom-written and recorded for Kartell Caulking

## Legal & Terms

The landing page includes comprehensive legal sections:

### Terms & Conditions

Located at the bottom of `public/simple.html`, covering:
- Residential service scope (excludes commercial properties)
- Service guarantee and workmanship warranty
- Liability limitations
- Quote validity and pricing
- Cancellation and rescheduling policy
- Site access requirements
- Customer obligations for preparation

### Payment Terms

Multiple payment options clearly outlined:
- **Cash**: Accepted on completion
- **Bank Transfer**: Direct deposit details provided
- **Credit Card**: Payment processing available
- **Commercial Exclusion**: Services limited to residential properties only

Payment is due upon completion of work. All prices include GST where applicable.

## Customization

### Updating Contact Information

Contact details appear in multiple files:
- `src/components/Footer.jsx` - Footer contact section
- `src/pages/Contact.jsx` - Contact page with full details
- Update phone, email, and address consistently

### Adding Blog Posts

Add new posts to `src/data/blogPosts.js`:

```javascript
{
  id: 4,
  slug: 'your-post-slug',
  title: 'Your Post Title',
  excerpt: 'Brief description for listing page',
  date: '2024-03-20',
  author: 'Kartell Caulking Team',
  category: 'Maintenance', // or 'How-To', 'Tips & Tricks', 'Before & After'
  image: '/images/blog/your-image.jpg',
  content: `
    # Your Markdown Content Here

    Write your blog post content using markdown syntax...
  `
}
```

### Changing Colors

Update the orange gradient to different colors:

1. **In component files**: Search for `#FF6B35` and `#F7931E` and replace
2. **In App.css**: Update CSS variables for global changes
3. **Button shadows**: Update `rgba(255, 107, 53, 0.3)` to match new color

### Adding Images

Place images in `public/images/`:
- Service images: `public/images/service-*.jpg`
- Blog images: `public/images/blog/*.jpg`
- Before/after: `public/images/bathroom-*.jpg`

Reference in code as: `/images/your-image.jpg`

## SEO & Performance

### Best Practices Implemented

- Semantic HTML structure
- Responsive images
- Fast page loads with Vite
- Client-side routing (SPA)
- Mobile-first responsive design

### Google Search Console

To track Google indexing:
1. Visit: https://search.google.com/search-console
2. Add property: `kartell-caulking.netlify.app`
3. Verify ownership via Netlify
4. Submit sitemap (if generated)
5. Check indexing status in "Pages" section

Quick check: `site:kartell-caulking.netlify.app` in Google

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Business Information

**Kartell Caulking**
20 Reno Road
Sandringham VIC 3191
Phone: 0417 035 368
Email: info@kartellcaulking.com.au

**Service Areas**: Sandringham, Hampton, Brighton, Black Rock, Beaumaris, Cheltenham, Mentone, Moorabbin, Highett, and surrounding Melbourne suburbs.

## License

© 2024 Kartell Caulking. All rights reserved.
