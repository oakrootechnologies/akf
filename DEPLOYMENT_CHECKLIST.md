# Hostinger Deployment Checklist

## ✅ Pre-Deployment Verification

### 1. Build Verification
- [x] Build completed successfully
- [x] `out/` folder created
- [x] All static files generated

### 2. File Structure Check
Your `out/` folder should contain:
```
out/
├── .htaccess ✅
├── index.html ✅
├── _next/ (JavaScript and CSS files) ✅
├── logo/
│   ├── instaLOGO.png ✅
│   └── reallogo.png ✅
├── Website Images/
│   ├── heropro/
│   │   ├── 1.png ✅
│   │   ├── 2.png ✅
│   │   ├── 3.png ✅
│   │   ├── 4.png ✅
│   │   └── 5.png ✅
│   └── ... (all other images)
└── ... (other folders)
```

## 📤 Upload Instructions

### Step 1: Access Hostinger File Manager
1. Log in to Hostinger hPanel
2. Go to **File Manager**
3. Navigate to `public_html` (or your domain's root directory)

### Step 2: Clear Existing Files (if any)
⚠️ **IMPORTANT**: Before uploading, check if there are existing files:
- If this is a fresh deployment, you can delete everything in `public_html`
- If you have other files, be careful not to delete them

### Step 3: Upload Files
1. **Select ALL files and folders** from your local `out/` folder
2. Upload them to `public_html` on Hostinger
3. **Make sure to preserve folder structure**:
   - Upload folders as folders (not individual files)
   - Keep the exact same folder names (case-sensitive)

### Step 4: Verify Upload
After upload, check that these files exist in `public_html`:
- ✅ `.htaccess` file (should be in root)
- ✅ `index.html` file (should be in root)
- ✅ `logo/` folder with images
- ✅ `Website Images/` folder with all subfolders
- ✅ `_next/` folder with static assets

## 🔍 Troubleshooting

### Issue: Images Not Loading
**Possible Causes:**
1. **Case Sensitivity**: Linux servers are case-sensitive
   - Check: `logo/instaLOGO.png` vs `logo/instalogo.png`
   - Solution: Ensure exact case matches

2. **Missing Files**: Files not uploaded
   - Solution: Re-upload missing files/folders

3. **Path Issues**: Wrong base path
   - Check: Images should use `/logo/` not `./logo/` or `logo/`
   - Solution: Paths are correct in code, verify upload

### Issue: 404 Errors on Routes
**Solution:**
- Ensure `.htaccess` file is uploaded to root
- Check file permissions (should be 644)
- Verify `.htaccess` content is correct

### Issue: CSS/JavaScript Not Loading
**Solution:**
- Ensure `_next/` folder is uploaded completely
- Check browser console for 404 errors
- Verify file paths in browser DevTools

## 🧪 Testing After Deployment

1. **Homepage**: Visit `https://oksingreen.com`
   - Check if images load
   - Check if navigation works
   - Check if hero slider works

2. **Other Pages**:
   - `/about/` - About page
   - `/contact/` - Contact page
   - `/blogs/` - Blogs page

3. **Browser Console**:
   - Open DevTools (F12)
   - Check Console tab for errors
   - Check Network tab for failed requests (404s)

## 📝 Quick Fix Commands (if needed)

If you have SSH access to Hostinger:
```bash
cd public_html
ls -la  # List all files
ls -la logo/  # Check logo folder
ls -la "Website Images/heropro/"  # Check hero images
```

## ⚠️ Common Mistakes

1. ❌ Uploading `out/` folder itself instead of its contents
2. ❌ Not preserving folder structure
3. ❌ Case sensitivity issues (Linux servers)
4. ❌ Missing `.htaccess` file
5. ❌ Not uploading all subfolders in `Website Images/`

## ✅ Success Indicators

When everything is working correctly:
- ✅ All images display properly
- ✅ Navigation links work
- ✅ Hero slider shows images
- ✅ Product cards show images
- ✅ No 404 errors in browser console
- ✅ CSS styling is applied correctly

