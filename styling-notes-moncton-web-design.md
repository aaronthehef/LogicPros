# Styling Notes: Moncton Web Design Page

## Color Scheme

### Primary Colors
- **Primary Blue**: `#1F7CFF` (used extensively throughout the page)
- **Secondary Blue**: `#1e40af` (darker blue for gradients and hover states)
- **Text Colors**:
  - Primary text: `#314251` (dark blue-gray)
  - Secondary text: `#6c757d` (medium gray)
  - White text on dark backgrounds: `#ffffff`

### Background Colors
- **Hero Section**: Dark gradient background `linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)`
- **Light Sections**: `#f5f8fc` (very light blue-gray)
- **Card Backgrounds**: White with subtle transparency `rgba(255, 255, 255, 0.9)` and `rgba(255, 255, 255, 0.7)`

### Accent Colors
- **Gold/Yellow**: `#FFD700` and `#FFA500` (used for primary buttons and highlights)
- **Green**: `#22c55e` and `#16a34a` (used for feature highlights)
- **Orange**: `#f59e0b` (used in circuit background animations)

### Code Example: Color Implementation
```jsx
// Hero section background
<section style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>

// Service card background
<div style={{
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
  border: '2px solid rgba(31, 124, 255, 0.1)'
}}>

// Text coloring
<h3 style={{ color: '#1F7CFF' }}>Service Title</h3>
<p style={{ color: colors.text.secondary }}>Description text</p>
```

## Icon System

### Service Icons
- Icons are created using inline SVG elements
- Standard size: 40x40 viewBox="0 0 24 24"
- Color: White (`#ffffff`) on colored backgrounds
- Icons are contained in rounded containers with gradient backgrounds

### Icon Container Styling
```jsx
<div className="service-icon" style={{
  width: '80px',
  height: '80px',
  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
  borderRadius: '20px',
  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  margin: '0 auto 1rem auto'
}}>
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* SVG paths here */}
  </svg>
</div>
```

### Icon Types Used
1. **Design Services**: Layered squares/rectangles representing web design
2. **SEO Services**: Magnifying glass with location pin
3. **Marketing**: Growth chart arrow
4. **Security**: Shield with checkmark
5. **Mobile**: Smartphone silhouette
6. **WordPress**: Letter "W" in circle
7. **Analytics**: Bar charts and graphs

### Code Example: Design Service Icon
```jsx
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
```

## Button Formatting

### Primary Buttons (hero-button)
```jsx
<a href="/contact" className="hero-button" style={{
  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
  color: '#000',
  padding: '18px 40px',
  borderRadius: '50px',
  fontSize: '1.1rem',
  fontWeight: '600',
  border: 'none',
  boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  display: 'inline-block',
  textDecoration: 'none'
}}>
  Get Free Quote
</a>
```

### Secondary Buttons
```jsx
<a href="/free-example" className="secondary-button" style={{
  background: 'transparent',
  color: '#1F7CFF',
  border: '2px solid #1F7CFF',
  padding: '18px 40px',
  fontSize: '1.1rem',
  fontWeight: '600',
  borderRadius: '50px',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  textDecoration: 'none',
  display: 'inline-block'
}}>
  See Free Example
</a>
```

### Button Group Example
```jsx
<div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
  <a href="/free-example" className="hero-button">
    Get Your FREE Website Example
  </a>
  
  <a href="/contact" className="hero-button">
    Get Free Quote
  </a>
</div>
```

## Numbering System (Process Steps)

### Number Badge Implementation
```jsx
<div className="service-card professional-card" style={{
  position: 'relative',
  padding: '60px 40px 40px 40px',
  marginTop: '35px',
  overflow: 'visible'
}}>
  <div style={{
    position: 'absolute',
    top: '-25px',
    left: '0px',
    right: '0px',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1
  }}>
    <div style={{
      background: 'linear-gradient(335deg, #1F7CFF, #1e40af)',
      color: 'white',
      width: '3em',
      height: '3em',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5em',
      fontWeight: 'bolder',
      boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)'
    }}>1</div>
  </div>
  
  <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>
    Understanding Your Business
  </h3>
  <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
    Process description here...
  </p>
</div>
```

### Numbering Implementation Details
- Used in "How We Build Your Business Website" section
- Numbers are positioned above cards with negative top margin
- Circular badges with gradient backgrounds
- Bold white numbers with shadow effects
- Cards have extra top padding (60px) to accommodate the number badges

## Card Styling

### Professional Service Cards
```jsx
<div className="service-card professional-card" style={{
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
  border: '2px solid rgba(31, 124, 255, 0.1)',
  borderRadius: '16px',
  padding: '2rem',
  boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden'
}}>
  <div className="service-icon">
    {/* Icon content */}
  </div>
  <h3 style={{color: '#1F7CFF', marginBottom: '1rem'}}>Service Title</h3>
  <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
    Service description...
  </p>
</div>
```

### Hero Service Cards
```jsx
<a href="/services/websites" className="hero-service-card" style={{
  background: 'linear-gradient(135deg, rgba(31, 124, 255, 0.15), rgba(31, 124, 255, 0.08))',
  border: '2px solid rgba(31, 124, 255, 0.3)',
  borderRadius: '12px',
  padding: '1.5rem',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px rgba(31, 124, 255, 0.15), 0 0 0 rgba(31, 124, 255, 0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '80px',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: 'pulseGlow 3s ease-in-out infinite'
}}>
  {/* Card content */}
</a>
```

## Typography

### Headings
```jsx
// Section Title
<h2 className="section-title">Professional Web Design for Moncton Businesses</h2>

// Card Title
<h3 style={{
  color: '#1F7CFF',
  fontSize: '1.4rem',
  fontWeight: '700',
  marginBottom: '1rem',
  lineHeight: '1.3'
}}>Service Title</h3>

// Hero Title with responsive sizing
<h1 style={{
  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
  fontWeight: '900',
  lineHeight: '0.9',
  marginBottom: '1rem',
  color: '#1F7CFF',
  textShadow: '0 0 5px rgba(31, 124, 255, 0.3), 0 0 10px rgba(31, 124, 255, 0.2)'
}}>
  Professional Web Design for Moncton Businesses
</h1>
```

### Body Text
```jsx
// Primary text
<p style={{
  color: colors.text.primary,
  lineHeight: '1.6',
  marginBottom: '1.5rem'
}}>
  Main content text...
</p>

// Secondary text
<p style={{
  fontSize: '1.1rem',
  color: colors.text.secondary,
  maxWidth: '700px',
  margin: '0 auto'
}}>
  Secondary description text...
</p>

// Hero subtitle with responsive sizing
<p style={{
  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
  color: '#e2e8f0',
  marginBottom: '2.5rem',
  fontWeight: '300',
  maxWidth: '500px'
}}>
  Transform your Moncton business...
</p>
```

## Special Effects

### Circuit Background Animation
```jsx
<svg className="circuit-background" style={{
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  opacity: 0.4
}} viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
  <g transform="translate(0,0)">
    <animateTransform
      attributeName="transform"
      type="translate"
      values="0,0; -500,0; -500,-350; 0,-350; 0,0"
      dur="150s"
      repeatCount="indefinite"
    />
    {/* Circuit paths and dots */}
  </g>
</svg>
```

### CSS Animations
```css
@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 8px 32px rgba(31, 124, 255, 0.15), 0 0 20px rgba(31, 124, 255, 0.3);
  }
  50% {
    box-shadow: 0 8px 32px rgba(31, 124, 255, 0.25), 0 0 30px rgba(31, 124, 255, 0.5);
  }
}

.hero-service-card:hover {
  transform: translateY(-8px) scale(1.02) !important;
  box-shadow: 0 20px 60px rgba(31, 124, 255, 0.3), 0 0 40px rgba(31, 124, 255, 0.6) !important;
  border-color: rgba(31, 124, 255, 0.8) !important;
}
```

### Background Effects
```jsx
// Glassmorphism effect
<div style={{
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
  backdropFilter: 'blur(10px)',
  border: '2px solid rgba(31, 124, 255, 0.1)'
}}>

// Gradient overlay
<section style={{
  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
}}>
```

## Layout Structure

### Grid Systems
```jsx
// Service Grid
<div className="services-grid" style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '2rem',
  maxWidth: '1400px',
  margin: '0 auto'
}}>

// Process Grid
<div className="process-grid" style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  marginTop: '3rem'
}}>

// Hero Layout - Two columns
<div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '4rem', alignItems: 'center' }}>
  <div>
    {/* Hero text content */}
  </div>
  <div className="hero-service-cards">
    {/* Hero cards */}
  </div>
</div>
```

### Spacing Examples
```jsx
// Section with standard spacing
<section className="section" style={{ marginTop: '3rem', marginBottom: '3rem' }}>

// Card with internal padding
<div style={{ padding: '2rem' }}>

// Flex layout with gap
<div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
```

## Responsive Design
```jsx
// Responsive grid that adapts to screen size
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem'
}}>

// Responsive typography
<h1 style={{
  fontSize: 'clamp(2.5rem, 6vw, 5rem)', // Adjusts from 2.5rem to 5rem based on viewport
  fontWeight: '900'
}}>

// Mobile-friendly button sizing
<a className="hero-button" style={{
  padding: '18px 40px', // Touch-friendly target size
  fontSize: '1.1rem',
  minWidth: '200px' // Minimum touch target
}}>
```

## Feature Highlights
```jsx
<div className="feature-highlight" style={{
  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
  color: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '20px',
  fontSize: '0.85rem',
  fontWeight: '600',
  marginTop: '1rem',
  display: 'inline-block',
  transition: 'all 0.3s ease'
}}>
  Free example in 48 hours
</div>
```

## List Styling
```jsx
<ul className="service-benefits" style={{
  color: colors.text.secondary,
  listStyle: 'none',
  padding: 0
}}>
  <li style={{
    padding: '0.5rem 0',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17L4 12" stroke="#1F7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    Local SEO to get found in Moncton searches
  </li>
  <li style={{
    padding: '0.5rem 0',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17L4 12" stroke="#1F7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    Mobile-responsive design
  </li>
</ul>
```