import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // Desaturated tones for hero animation
        'light-lavender': '#E6E0F8',
        'pale-blue': '#D6EAF8',
        'soft-white': '#FDFDFD', // A very light, almost white color
        // Primary colors
        yellow: {
          100: '#FCC100', // Yellow 1
          200: '#F5AF00', // Yellow 2
          300: '#FFD23F', // Yellow 3
          400: '#FFEB5E', // Yellow 4
          500: '#FFF7DF', // Yellow 5
        },
        blue: {
          100: '#1C459E', // Blue 1
          200: '#335CB3', // Blue 2
          300: '#2D67DB', // Blue 3
          400: '#0BCCF3', // Blue 4
          500: '#ECF0F6', // Blue 5
          600: '#2A70DB', // Blue king
          700: '#37465A', // Blue gray
        },
        // Secondary colors
        orange: {
          100: '#FF6A30', // Orange
          200: '#FF7030', // Hard orange
        },
        green: {
          100: '#7AD629', // Green
        },
        red: {
          100: '#C52645', // Red
        },
        black: {
          100: '#000000', // Black
        },
        // Legacy barbershop colors for backward compatibility
        barbershop: {
          50: '#ECF0F6',   // Using Blue 5
          100: '#E5EAFF',  
          200: '#CCD6FF',  
          300: '#B3C2FF',  
          400: '#99AEFF',  
          500: '#2D67DB',  // Using Blue 3
          600: '#335CB3',  // Using Blue 2
          700: '#1C459E',  // Using Blue 1
          800: '#37465A',  // Using Blue gray
          900: '#1A4AFF',  
          950: '#0036FF',  
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'gradient-shift': {
          '0%, 100%': { 
            'background-position': '0% 50%',
            'background-size': '300% 300%'
          },
          '50%': { 
            'background-position': '100% 50%',
            'background-size': '300% 300%'
          },
        },
        'gradient-shift-alt': {
          '0%, 100%': { 
            'background-position': '100% 50%',
            'background-size': '300% 300%'
          },
          '50%': { 
            'background-position': '0% 50%',
            'background-size': '300% 300%'
          },
        },
        'ambient-background-scroll': {
          '0%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '100% 100%' },
          '100%': { 'background-position': '0% 0%' },
        },
        'animated-blob-move': {
          '0%, 100%': {
            transform: 'scale(1) translate(0px, 0px) rotate(0deg)',
            opacity: '0.7',
          },
          '25%': {
            transform: 'scale(1.1) translate(20px, -10px) rotate(15deg)',
            opacity: '0.6',
          },
          '50%': {
            transform: 'scale(0.9) translate(-10px, 20px) rotate(-10deg)',
            opacity: '0.75',
          },
          '75%': {
            transform: 'scale(1.05) translate(-15px, -15px) rotate(5deg)',
            opacity: '0.65',
          },
        },
        'subtle-glow-behind-text': {
          '0%, 100%': {
            transform: 'translate(-5%, -5%) scale(1.0)',
            opacity: '0.35', 
          },
          '33%': {
            transform: 'translate(5%, -10%) scale(1.05)',
            opacity: '0.45',
          },
          '66%': {
            transform: 'translate(-10%, 5%) scale(0.95)',
            opacity: '0.30',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'gradient-shift-alt': 'gradient-shift-alt 18s ease infinite',
        'ambient-bg-scroll': 'ambient-background-scroll 40s ease-in-out infinite',
        'animated-blob': 'animated-blob-move 25s ease-in-out infinite',
        'animate-subtle-glow': 'subtle-glow-behind-text 35s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;