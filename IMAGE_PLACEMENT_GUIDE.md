# Image Placement Guide for Amenities & Location Map

## Amenities Component Images

Place the following images in `/public/amenities/` folder:

### Infrastructure Section
- `roads.jpg` - Wide Internal Roads
- `water.jpg` - Water Supply
- `electricity.jpg` - Electricity Connection
- `sewer.jpg` - Sewer System
- `boundary.jpg` - Boundary Wall
- `gate.jpg` - Secure Main Gate

### Recreational Section
- `parks.jpg` - Green Parks
- `jogging.jpg` - Jogging Tracks
- `sports.jpg` - Sports Area
- `community.jpg` - Community Space
- `gardens.jpg` - Landscaped Gardens
- `greenbelt.jpg` - Green Belt

### Nearby Facilities
- `hospital.jpg` - Hospitals & Clinics
- `school.jpg` - Schools & Colleges
- `shopping.jpg` - Shopping Centers
- `airport.jpg` - Noida Airport
- `expressway.jpg` - Expressways
- `filmcity.jpg` - Film City

---

## Location Map Component Images

Place the following images in `/public/location/` folder:

### Nearby Locations
- `airport.jpg` - Noida International Airport Jewar
- `expressway.jpg` - Yamuna Expressway
- `greenfield.jpg` - Greenfield Expressway
- `filmcity.jpg` - Noida International Film City

### Connectivity Benefits
- `cities.jpg` - Well-Connected Cities
- `railway.jpg` - Railway Stations
- `corridor.jpg` - Urban Corridor
- `commute.jpg` - Easy Commute

---

## Image Specifications

### Amenities Cards
- Recommended Size: 400x300px or higher
- Aspect Ratio: 16:9
- Format: JPG/PNG
- Quality: High resolution for sharp display

### Location Cards
- Size: 200x200px or higher
- Aspect Ratio: 1:1 (Square)
- Format: JPG/PNG

### Benefit Cards
- Size: 400x300px or higher
- Aspect Ratio: 16:9
- Format: JPG/PNG

---

## How Components Use Images

1. **Amenities.jsx** - Displays 6 images at a time (based on active tab)
   - Desktop: 3 columns × 2 rows
   - Tablet: 2 columns
   - Mobile: 1 column

2. **LocationMap.jsx** - Displays images in two sections
   - Location cards: 4 thumbnail images
   - Benefit cards: 4 full-width-of-card images

Both components have responsive image sizing with hover zoom effects.

---

## Responsive Image Heights (CSS)

- **Desktop Amenities**: 220px
- **Tablet Amenities**: 200px
- **Mobile Amenities**: 160px → 140px

- **Desktop Benefit Cards**: 180px
- **Tablet Benefit Cards**: 140px
- **Mobile Benefit Cards**: 120px

- **Location Images**: 100px (fixed size, thumbnail style)

All images use `object-fit: cover` for perfect aspect ratio display.
