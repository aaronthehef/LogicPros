// LogicPros Color Palette
// Based on logo colors: #1a79af (primary blue) and #314251 (secondary blue)

export const colors = {
  // Primary Brand Colors
  primary: '#1a79af',           // Logo primary blue
  primaryLight: '#2b8bc7',      // Lighter version of primary
  primaryDark: '#155e8a',       // Darker version of primary
  
  secondary: '#314251',         // Logo secondary blue
  secondaryLight: '#3d5464',    // Lighter version of secondary
  secondaryDark: '#253340',     // Darker version of secondary
  
  // Accent Colors (for CTAs and highlights)
  accent: '#ff6b35',           // Bright orange for CTAs
  accentLight: '#ff8659',      // Lighter orange
  accentDark: '#e55a2b',       // Darker orange
  
  // Neutral Colors
  white: '#f5f8fc',
  lightGray: '#f5f8fc',
  gray: '#6c757d',
  darkGray: '#495057',
  
  // Background Variants
  backgrounds: {
    primary: '#1a79af',
    secondary: '#314251',
    light: '#f5f8fc',
    white: '#f5f8fc',
    gradientPrimary: 'linear-gradient(135deg, #1a79af 0%, #314251 100%)',
    gradientLight: 'linear-gradient(135deg, #2b8bc7 0%, #1a79af 100%)',
  },
  
  // Text Colors
  text: {
    primary: '#314251',         // Dark blue for main text
    secondary: '#6c757d',       // Gray for secondary text
    light: '#ffffff',           // White text on dark backgrounds
    accent: '#ff6b35',          // Orange for highlighted text
  },
  
  // Button Colors
  buttons: {
    primary: {
      bg: '#1a79af',
      hover: '#155e8a',
      text: '#ffffff'
    },
    secondary: {
      bg: 'transparent',
      border: '#1a79af',
      hover: '#1a79af',
      text: '#1a79af',
      textHover: '#ffffff'
    },
    accent: {
      bg: '#ff6b35',
      hover: '#e55a2b',
      text: '#ffffff'
    }
  }
};

// CSS Custom Properties for easy use
export const cssVariables = `
:root {
  --primary-color: ${colors.primary};
  --primary-light: ${colors.primaryLight};
  --primary-dark: ${colors.primaryDark};
  
  --secondary-color: ${colors.secondary};
  --secondary-light: ${colors.secondaryLight};
  --secondary-dark: ${colors.secondaryDark};
  
  --accent-color: ${colors.accent};
  --accent-light: ${colors.accentLight};
  --accent-dark: ${colors.accentDark};
  
  --text-primary: ${colors.text.primary};
  --text-secondary: ${colors.text.secondary};
  --text-light: ${colors.text.light};
  --text-accent: ${colors.text.accent};
  
  --bg-light: ${colors.lightGray};
  --bg-white: ${colors.white};
}
`;