# Static Images Organization

## New Folder Structure

### `/public/images/logo/`
- `TWUC.png` - Main TWUC logo used in navbar and branding

### `/public/images/hero/`  
- `img1.jpg` - Hero slider image 1
- `img2.jpg` - Hero slider image 2

### `/public/images/leaders/`
- `chairman.jpg` - Chairman profile image
- `executive.jpg` - Executive Director profile image

### `/public/photos/`
- `img3.jpg` - Photo gallery image 3
- `img4.jpg` - Photo gallery image 4

### `/public/videos/`
- Video files for video gallery (currently empty - add video files as needed)

### `/public/notices/`
- PDF notice files (currently empty - add PDF files as needed)

## Updated Components

### Components using `/images/logo/TWUC.png`:
- `src/layouts/Navbar.jsx`

### Components using `/images/hero/` images:
- `src/components/Hero.jsx` (img1.jpg, img2.jpg)
- `src/pages/gallery/PhotosPage.jsx` (img1.jpg, img2.jpg) 
- `src/pages/works/OurWorksPage.jsx` (img1.jpg, img2.jpg)

### Components using `/photos/` images:
- `src/components/Hero.jsx` (img3.jpg, img4.jpg)
- `src/pages/gallery/PhotosPage.jsx` (img3.jpg, img4.jpg)
- `src/pages/works/OurWorksPage.jsx` (img3.jpg, img4.jpg)

### Components using `/images/leaders/` images:
- `src/pages/HomePage.jsx` (chairman.jpg, executive.jpg)
- `src/pages/gallery/PhotosPage.jsx` (chairman.jpg, executive.jpg)

## Benefits of This Organization

1. **Better Organization**: Images are logically grouped by usage
2. **Easy Maintenance**: Clear separation between different types of assets
3. **Static Hosting Ready**: All assets are in public folder for direct access
4. **Clean Codebase**: No more import statements for static images
5. **SEO Friendly**: Images accessible via direct URLs
6. **Consistent Structure**: Matches existing `/photos/` and `/videos/` folders

## Asset Paths Reference

All assets are now accessed via relative URLs from the public folder:
- Logo: `/images/logo/TWUC.png`
- Hero: `/images/hero/img1.jpg`, `/images/hero/img2.jpg`
- Photos: `/photos/img3.jpg`, `/photos/img4.jpg`  
- Leaders: `/images/leaders/chairman.jpg`, `/images/leaders/executive.jpg`
- Videos: `/videos/` (add video files as needed)
- Notices: `/notices/` (add PDF files as needed)
