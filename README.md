# OksinGreen - Beautiful Plant & Tree Store

A modern, fabulous frontend website built with Next.js, featuring a beautiful UI for showcasing plants and trees.

## Features

- 🎨 Modern and beautiful UI design
- 🌿 Hero section with stunning visuals
- 🛍️ Product showcase section
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- ⚡ Fast and optimized with Next.js 14

## Getting Started

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

- **Next.js 14** - React framework for production
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

## Project Structure

```
oksingreen/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Products.tsx
│   └── Footer.tsx
├── images/
│   ├── hero/
│   └── products/
└── ...
```

## Build for Production

### Local Build

```bash
npm run build
npm start
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (creates `out/` directory for static export)
- `npm run export` - Alias for build (creates static export)
- `npm run analyze` - Build with bundle analyzer to check bundle sizes
- `npm run perf-check` - Run performance tests (Linux/Mac - requires bash)
- `npm run perf-check:win` - Run performance tests (Windows - PowerShell)
- `npm run lint` - Run ESLint

### Hostinger Deployment (Static Export)

This project is configured for static export and can be deployed to Hostinger's shared hosting.

#### Build Steps:

1. **Build the static site:**
   ```bash
   npm run build
   ```
   This will generate a static site in the `out/` directory.

2. **Upload to Hostinger:**
   - Log in to your Hostinger hPanel
   - Go to File Manager or use FTP
   - Navigate to your domain's `public_html` folder
   - Upload all contents from the `out/` directory to `public_html`
   - Make sure the `.htaccess` file is uploaded (it's in the `public/` folder and will be copied to `out/`)

3. **Verify:**
   - Visit your domain to see the site live
   - Check that all routes work correctly (e.g., `/about`, `/contact`, `/blogs`)

#### Important Notes:

- The site is configured for static export (no server-side rendering)
- Images are unoptimized for static hosting compatibility
- The `.htaccess` file handles routing for Next.js static export
- All static files are in the `out/` directory after build

#### Alternative: Node.js Hosting (if you need SSR)

If you need server-side rendering features, you can use Hostinger's Node.js hosting:

1. Remove `output: 'export'` from `next.config.js`
2. Set `images.unoptimized: false`
3. Upload the entire project to Hostinger
4. Run `npm install` and `npm run build` on the server
5. Use `npm start` or a process manager like PM2


