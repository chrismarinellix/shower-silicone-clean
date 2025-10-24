# Kartell Caulking Website

Professional bathroom silicone removal and replacement services website for Kartell Caulking, serving Sandringham, Victoria and surrounding Melbourne suburbs.

## Features

- **Responsive Design**: Mobile-friendly, works on all devices
- **Informational Pages**: Comprehensive information about silicone services
- **Learning Center**: Gamified educational modules about bathroom silicone
- **Blog**: SEO-friendly blog posts with educational content
- **Contact Form**: Easy quote request system
- **Careers Page**: Job application for casual positions

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Styling with CSS variables

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

The development server will run at `http://localhost:5173`

## Deployment to Netlify

### Option 1: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Or deploy directly
netlify deploy --prod
```

### Option 2: Deploy via Netlify Web Interface

1. Push your code to GitHub/GitLab/Bitbucket
2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect your Git provider and select the repository
5. Netlify will auto-detect the settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 3: Drag and Drop

1. Build the project: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder onto the page
4. Your site will be deployed instantly!

## Project Structure

```
silicone-spa/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media
│   ├── components/     # Reusable components
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── data/           # Data files
│   │   └── blogPosts.js
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── WhatWeDo.jsx
│   │   ├── WhyReplace.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── WhenToReplace.jsx
│   │   ├── Learning.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Contact.jsx
│   │   └── Careers.jsx
│   ├── styles/         # CSS files
│   ├── App.jsx         # Main app component
│   ├── App.css         # Global styles
│   └── main.jsx        # Entry point
├── netlify.toml        # Netlify configuration
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Updating Contact Information

Update contact details in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

### Adding Blog Posts

Add new blog posts to `src/data/blogPosts.js`:

```javascript
{
  id: 4,
  slug: 'your-post-slug',
  title: 'Your Post Title',
  excerpt: 'Brief description',
  date: '2024-03-20',
  author: 'Kartell Caulking Team',
  category: 'Maintenance',
  content: `Your markdown content here...`
}
```

### Styling

- Main colors are defined in `src/App.css` using CSS variables
- Component-specific styles are in `src/styles/`
- Modify the `:root` variables in `App.css` to change the color scheme

## Business Information

**Kartell Caulking**
20 Reno Road
Sandringham VIC 3191
Phone: 0417 035 368
Email: info@kartellcaulking.com.au

## License

© 2024 Kartell Caulking. All rights reserved.
