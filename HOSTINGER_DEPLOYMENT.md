# Hostinger Deployment Guide for Oksingreen Website

This guide will help you deploy the Oksingreen website to Hostinger using Node.js hosting (required for MongoDB API routes).

## Prerequisites

1. Hostinger account with Node.js hosting enabled
2. MongoDB Atlas account (or local MongoDB)
3. FTP/SSH access to your Hostinger account

## Step 1: Prepare Your Project

1. **Build the project locally** (optional, for testing):
   ```bash
   npm install
   npm run build
   npm start
   ```

2. **Create `.env.production` file** with your production environment variables:
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   NODE_ENV=production
   ```

## Step 2: Upload to Hostinger

### Option A: Using File Manager (FTP)

1. Log in to your Hostinger hPanel
2. Go to **File Manager**
3. Navigate to your domain's root directory (usually `public_html` or `domains/yourdomain.com/public_html`)
4. Upload all project files **except**:
   - `node_modules/` (will be installed on server)
   - `.env.local` (use `.env.production` instead)
   - `.next/` (will be built on server)
   - `.git/` (if present)

### Option B: Using Git (if available)

1. Connect your repository to Hostinger
2. Pull the code to your hosting directory

## Step 3: Configure Node.js on Hostinger

1. In hPanel, go to **Node.js** section
2. **Create a new Node.js application**:
   - **Node.js Version**: Select the latest LTS version (18.x or 20.x)
   - **Application Root**: Set to your domain root (e.g., `public_html`)
   - **Application URL**: Your domain (e.g., `https://yourdomain.com`)
   - **Application Startup File**: `server.js` (we'll create this)

3. **Set Environment Variables**:
   - Go to **Environment Variables** section
   - Add: `MONGODB_URI` = your MongoDB Atlas connection string
   - Add: `NODE_ENV` = `production`
   - Add: `PORT` = `3000` (or the port Hostinger assigns)

## Step 4: Create Server File

Create a `server.js` file in your project root:

```javascript
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
```

## Step 5: Install Dependencies and Build

1. **SSH into your Hostinger server** (or use Terminal in hPanel):
   ```bash
   cd /path/to/your/domain/public_html
   npm install --production
   npm run build
   ```

2. **Start the Node.js application**:
   - In hPanel Node.js section, click **Start** or **Restart** your application

## Step 6: Configure .htaccess (if needed)

The `.htaccess` file is already configured for Node.js hosting. If Hostinger uses a reverse proxy, you may need to adjust the port in `.htaccess`.

## Step 7: Verify Deployment

1. Visit your domain: `https://yourdomain.com`
2. Test the contact form to ensure MongoDB connection works
3. Check all pages load correctly

## Troubleshooting

### API Routes Not Working
- Ensure Node.js application is running in hPanel
- Check that `MONGODB_URI` environment variable is set correctly
- Verify MongoDB Atlas allows connections from your Hostinger server IP

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check Node.js version matches locally and on server
- Review build logs in Hostinger hPanel

### Port Issues
- Check what port Hostinger assigns to your Node.js app
- Update `server.js` and `.htaccess` with the correct port

## Environment Variables Checklist

Make sure these are set in Hostinger Node.js environment variables:
- ✅ `MONGODB_URI` - Your MongoDB Atlas connection string
- ✅ `NODE_ENV` - Set to `production`
- ✅ `PORT` - Port assigned by Hostinger (usually 3000)

## Support

For Hostinger-specific issues, contact Hostinger support.
For application issues, check the logs in hPanel > Node.js > Logs.

