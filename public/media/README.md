# GBSS Website Media Directory

This directory is the central repository for all images, photos, and videos used across the GBSS website.

## Directory Structure

Here is how the media files are organized:

```
public/media/
├── home/                      # Assets for the Home page (e.g., hero circle image, banner)
├── about/                     # Assets for the About Us page (e.g., founder story collage)
├── donate/                    # Assets for the Donate page (e.g., UPI QR code image)
└── gallery/                   # Assets for the Gallery page (divided by actual category)
    ├── before-after/          # Before & After care photos
    ├── facility/              # Exterior, living quarters, dining areas
    ├── events/                # Raksha Bandhan, cultural events, volunteer days
    └── medical/               # Doctor visits, first aid, checkups
```

## How to use in code (Next.js)

Since this directory is under the `public/` folder, Next.js serves these files statically starting at `/media/`.

To display an image or video in your React/Next.js components, reference the path starting with `/media/`:

### Example for Image Component:
```tsx
import Image from 'next/image';

<Image 
  src="/media/home/hero-banner.jpg" 
  alt="Residents at GBSS shelter" 
  width={600} 
  height={400} 
/>
```

### Example for HTML5 Video Component:
```tsx
<video controls className="w-full rounded-card">
  <source src="/media/gallery/events/raksha_bandhan.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```
