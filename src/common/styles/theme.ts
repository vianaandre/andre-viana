export const theme = {
  spacing(size: number) {
    return `${size * 0.5}rem`;
  },
  fonts: {
    styles: {
      text: "'Rubik', 'Poppins', sans-serif",
      title: "'Rubik', 'Poppins', sans-serif",
      default: "'Rubik', 'Poppins', sans-serif",
    },
    sizes: {
      xSmall: '.625rem' /* 10px */,
      small: '.75rem' /* 12px */,
      xMedium: '.875rem' /* 14px */,
      medium: '1rem' /* 16px */,
      sMedium: '1.125rem' /* 18px */,
      heading05: '1.5rem' /* 24px */,
      heading04: '1.75rem' /* 28px */,
      heading03: '2.625rem' /* 42px */,
      heading02: '3rem' /* 48px */,
      heading01: '3.75rem' /* 60px */,
    },
    height: {
      small: '100%',
      medium: '125%',
      large: '150%',
      xlarge: '175%',
      xxlarge: '200%',
    },
  },
  colors: {
    primary: '#1442B8',
    primary_dark: '#030F30',

    title: '#FFFFFF',
    text: '#E0E0E0',
    text_placeholder: 'rgba(204, 204, 204, 0.5)',
    text_input: '#FFFFFF',

    button: '#FFFFFF',

    gray_50: '#F5F5F5',
    gray_75: '#EBEBEB',
    gray_100: '#E0E0E0',
    gray_200: '#CCCCCC',
    gray_300: '#B8B8B8',
    gray_400: '#A3A3A3',
    gray_500: '#8F8F8F',
    gray_600: '#7A7A7A',
    gray_700: '#666666',
    gray_800: '#525252',
    gray_900: '#3D3D3D',
    gray_950: '#292929',
    gray_1000: '#141414',

    shape: '#FFFFFF',
    black: '#000000',

    success: '#02AA7E',
    attention: '#FFA500',
    warning: '#E00002',
  },
  breakpoints: {
    small: '576px',
    medium: '768px',
    large: '992px',
    xlarge: '1200px',
    xxlarge: '1400px',
  },
  zIndex: {
    base: 10,
    dropdown: 15,
    menu: 20,
    overlay: 30,
    modal: 40,
  },
};
