export const theme = {
  spacing(size: number) {
    return `${size * 0.5}rem`;
  },
  colors: {
    grey: {
      dark: '#7A797D',
      main: '#565660',
      light: 'rgba(122, 121, 125, 0.5)',
    },
    primary: {
      main: '#F3F3F3',
      dark: '#000000',
      light: 'rgba(122, 121, 125, 0.2)',
    },
    purble: {
      main: '#5F49E3',
      light: 'rgba(95, 73, 227, 0.1)',
    },
    pink: {
      main: '#FF80BF',
    },
    cyan: {
      main: '#80FFEA',
    },
    green: {
      main: '#8AFF80',
    },
    success: '#0FAB60',
    success_light: 'rgba(15, 171, 96, 0.1)',
    warning: '#FAAD13',
    danger: '#E95432',
    info: '#00B8D9',
  },
  transitions: {
    min: '200ms',
    medium: '400ms',
    max: '600ms',
  },
  radii: {
    min: '4px',
    medium: '8px',
    max: '12px',
  },
  fonts: {
    family: {
      primary: "'Space Grotesk', 'Fira Code', sans-serif",
    },
    sizes: {
      64: '4rem',
      56: '3.5rem',
      48: '3rem',
      40: '2.5rem',
      36: '2.25rem',
      32: '2rem',
      24: '1.5rem',
      20: '1.25rem',
      18: '1.125rem',
      16: '1rem',
      14: '0.875rem',
      12: '0.75rem',
      10: '0.625rem',
    },
    height: {
      100: '100%',
      125: '125%',
      150: '150%',
      160: '160%',
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  zIndex: {
    BASE: 1010,
    DROPDOWN: 1015,
    MENU: 1020,
    OVERLAY: 1030,
    MODAL: 1040,
  },
  breakpoints: {
    mobile: '767px',
    tablet: '1024px',
    desktop: '1192px',
  },
};
