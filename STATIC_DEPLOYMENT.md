# Static Frontend Deployment Guide for Hostinger

This guide will help you deploy the Oksingreen website as a static frontend to Hostinger.

## Build Steps

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Build the static site**:
   ```bash
   npm run build
   ```
   
   This will create an `out/` folder with all static files.

3. **Verify the build**:
   - Check that the `out/` folder was created
   - The folder should contain `index.html` and all static assets

## Upload to Hostinger

1. **Log in to Hostinger hPanel**
2. **Go to File Manager**
3. **Navigate to your domain's root directory** (usually `public_html`)
4. **Upload all contents from the `out/` folder** to `public_html`
   - Select all files and folders from `out/`
   - Upload them to `public_html`
   - Make sure `.htaccess` is uploaded (it's in the `public/` folder and will be copied to `out/`)

## File Structure After Upload

Your `public_html` should contain:
```
public_html/
├── .htaccess
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── Website Images/
├── logo/
├── hero/
└── ... (other static files)
```

## Important Notes

- ✅ **Static Export**: The site is now a static frontend (no server-side rendering)
- ✅ **No API Routes**: The contact form will show a success message but won't save to MongoDB yet
- ✅ **All Pages Work**: All routes (/, /about, /contact, /blogs) will work via `.htaccess` routing
- ⚠️ **Contact Form**: Currently shows success message. Backend API can be added later.

## Testing

1. Visit your domain: `https://yourdomain.com`
2. Test all pages:
   - Homepage: `/`
   - About: `/about/`
   - Contact: `/contact/`
   - Blogs: `/blogs/`
3. Test the contact form (it will show success message)

## Next Steps (Optional - Backend Integration)

When you're ready to add the MongoDB backend:
1. Switch to Node.js hosting on Hostinger
2. Revert `next.config.js` to remove `output: 'export'`
3. Deploy with API routes enabled
4. See `HOSTINGER_DEPLOYMENT.md` for full Node.js deployment guide

## Troubleshooting

### 404 Errors on Routes
- Make sure `.htaccess` is uploaded to `public_html`
- Check that `.htaccess` has correct permissions

### Images Not Loading
- Verify all image folders are uploaded
- Check image paths in the code match the folder structure

### Build Errors
- Run `npm install` first
- Check Node.js version (should be 18.x or higher)
- Review error messages in terminal

