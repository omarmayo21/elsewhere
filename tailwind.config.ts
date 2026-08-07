import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        border: '#e7e7e7',
        primary: {
          DEFAULT: '#000000',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f6f6f6',
          foreground: '#111111',
        },
        muted: {
          DEFAULT: '#fafafa',
          foreground: '#666666',
        },
        accent: {
          DEFAULT: '#f0523d',
          foreground: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        'site-gutter': '4vw',
        'site-gutter-mobile': '6vw',
        'nav-height': '114px',
        'nav-height-mobile': '85px',
      },
      fontSize: {
        xs: ['12px', '1.5'],
        sm: ['14px', '1.6'],
        base: ['16px', '1.6'],
        lg: ['18px', '1.6'],
        xl: ['22px', '1.4'],
        '2xl': ['28px', '1.3'],
        '3xl': ['36px', '1.2'],
        '4xl': ['48px', '1.1'],
        '5xl': ['64px', '1.1'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
