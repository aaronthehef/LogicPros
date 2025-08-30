# Claude Code Instructions for LogicPros Website

## Color Palette & Styling Standards

### Brand Colors (Located in: `/src/styles/colors.js`)

#### Primary Brand Colors
- **Primary Blue**: `#1a79af` (logo color) - use for main headings, primary elements
- **Primary Light**: `#2b8bc7` - lighter version of primary
- **Primary Dark**: `#155e8a` - darker version of primary
- **Secondary Blue**: `#314251` (logo secondary) - use in gradients and secondary elements
- **Secondary Light**: `#3d5464` - lighter version of secondary
- **Secondary Dark**: `#253340` - darker version of secondary

#### Accent Colors
- **Accent Orange**: `#ff6b35` - use for CTAs, highlights, important elements
- **Accent Light**: `#ff8659` - lighter orange
- **Accent Dark**: `#e55a2b` - darker orange

#### Text Colors
- **Text Primary**: `#314251` (same as secondary blue) - main text color
- **Text Secondary**: `#6c757d` - secondary text, descriptions  
- **Text Light**: `#ffffff` - white text on dark backgrounds
- **Text Accent**: `#ff6b35` - orange for highlighted text

#### Background Colors
- **Background Light**: `#f8f9fa` - light section backgrounds
- **Background White**: `#ffffff` - white backgrounds
- **Background Gradient Primary**: `linear-gradient(135deg, #1a79af 0%, #314251 100%)`
- **Background Gradient Light**: `linear-gradient(135deg, #2b8bc7 0%, #1a79af 100%)`

#### Button Colors
- **Primary Button**: Background `#1a79af`, Hover `#155e8a`, Text `#ffffff`
- **Secondary Button**: Background `transparent`, Border `#1a79af`, Text `#1a79af`
- **Accent Button**: Background `#ff6b35`, Hover `#e55a2b`, Text `#ffffff`

#### Colors to NEVER Use (Replace Immediately)
- ❌ **Greens**: `#27ae60`, `#e8f5e8`, `#232,245,232` - replace with primary blues
- ❌ **Random Purples**: `#667eea`, `#764ba2` - replace with brand gradient
- ❌ **Random Reds**: `#e74c3c` - replace with accent orange
- ❌ **Random Blues**: `#3498db`, `#2c3e50` - replace with brand blues
- ❌ **Gray Text**: `#5d6d7e` - replace with `colors.text.secondary`

### Consistent Styling Patterns

#### 1. Import Color System
Always import colors at the top of each page component:
```javascript
import { colors } from '../../styles/colors';
```

#### 2. Replace All Inconsistent Colors
- Replace `#2c3e50` with `colors.text.primary`
- Replace `#5d6d7e` with `colors.text.secondary`
- Replace `#f8f9fa` with `colors.backgrounds.light`
- Replace random gradients with `colors.backgrounds.gradientPrimary`
- Replace CTA buttons with `colors.accent` background
- NO MORE: greens (#27ae60, #e8f5e8), random purples (#667eea, #764ba2), random reds (#e74c3c)

#### 3. Text Sizing Standards
- Section titles: `fontSize: '1.3rem'` minimum
- List items: `fontSize: '1rem'` minimum
- Ensure text is readable and consistent across pages

#### 4. Hero Section Centering (Critical Issue)
Hero sections often have left-alignment issues. Apply this aggressive centering:
```javascript
<section className="hero-section" style={{ textAlign: 'center' }}>
  <div className="container" style={{ textAlign: 'center' }}>
    <div className="hero-content" style={{ 
      textAlign: 'center !important', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto'
    }}>
      <h1 style={{ 
        textAlign: 'center !important', 
        width: '100%',
        margin: '0 auto 24px auto'
      }}>Title Here</h1>
      <p style={{ 
        textAlign: 'center !important', 
        width: '100%', 
        margin: '0 auto 40px auto'
      }}>Description here</p>
      <div style={{ 
        textAlign: 'center !important', 
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <a href="/contact" className="btn btn-primary">CTA Button</a>
      </div>
    </div>
  </div>
</section>
```

#### 5. Card Height Consistency
For card grids, ensure equal heights:
```javascript
<div style={{ 
  display: 'flex', 
  flexDirection: 'column', 
  minHeight: '140px', 
  justifyContent: 'space-between' 
}}>
```

#### 6. Service Description Lengths
Keep all service descriptions approximately the same length (1-2 lines) for professional appearance.

#### 7. Button Consistency
- Primary buttons: Use `colors.accent` for background
- All buttons in card groups should have same text length to prevent stacking issues
- Standard format: "Learn More" + "Get Quote"

### Page-Specific Issues Found

#### Services Page (`/src/pages/services/ITServicesPage.js`) - COMPLETED
- ✅ All colors standardized to brand palette
- ✅ Hero section centered (required aggressive overrides)
- ✅ Digital Growth Formula cards fixed with proper flexbox layout
- ✅ Service descriptions made consistent length
- ✅ Industry cards text size increased

#### Websites Page (`/src/pages/services/WebsitesPage.js`) - COMPLETED  
- ✅ Number badges positioning fixed (top: -25px, increased padding)
- ✅ Footer white bar removed (margin-top: 0)

### Development Workflow

#### Before Making Changes
1. Start local dev server: `npm start` (runs on http://localhost:3000)
2. Test changes locally before committing
3. Use TodoWrite tool to track progress on complex tasks

#### Common Git Workflow
```bash
git add .
git commit -m "Descriptive commit message

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
git push
```

#### Testing Checklist
- [ ] Colors are consistent with brand palette
- [ ] Text is readable and properly sized  
- [ ] Hero sections are centered
- [ ] Cards have equal heights
- [ ] Buttons are consistent
- [ ] No random colors (greens, purples, etc.)
- [ ] Mobile responsive (check at different screen sizes)

### Key Files
- **Color System**: `/src/styles/colors.js`
- **Main CSS**: `/src/responsive-style.css`
- **Footer Styles**: `/src/components/Footer.css`
- **Router**: `/src/Router.js`

### Future Pages to Update
Apply same color standardization and styling patterns to:
- `/src/pages/services/AutomationsPage.js`
- `/src/pages/services/SecurityAuditPage.js`
- `/src/pages/services/PasswordManagementPage.js`
- `/src/pages/services/MFAPage.js`
- All contractor pages (`/src/pages/contractors/`)
- Location pages (`/src/pages/locations/`)

### Notes
- Site uses hash-based routing (`#/services`, `#/services/websites`, etc.)
- Vercel auto-deploys from GitHub pushes
- User prefers concise communication and efficient workflows
- Always use the TodoWrite tool for multi-step tasks