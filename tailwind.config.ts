import { fontFamily } from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif]
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'nav-load': {
          '0%': {
            transform: 'translateY(-100%)'
            
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        'footer-load': {
          '0%': {
            transform: 'translateY(1000%)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        'intro-content-load': {
          '0%': {
            transform: 'translateX(-150%)',
          },
          '90%': {
            transform: 'translateX(50%)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        'intro-image-load': {
          '0%': {
            transform: 'translateX(150%)'
          },
          '90%': {
            transform: 'translateX(-50%)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        
        'project-load': {
          '0%': {
            transform: 'scale(0)'
          },
          '90%': {
            transform: 'scale(1.1)'
          },
          '100%': {
            transform: 'scale(1)'
          },
        },

        'tech-load': {
          '0%': {
            transform: 'translateY(-20px)',
            opacity : '0'
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity : '1'
          }
        },

        'cart-load' : {
          '0%' : {
            transform: 'rotate(-90deg) scale(0)',
            opcaity: '0'
          },

          '100%' : {
            transform: 'rotate(0deg) scale(1)',
            opacity : '1'
          }
        },
        'form-load' : {
          '0%' : {
            transform: 'translateY(300%)',
          },
          '100%' : {
            transform: 'translateY(0)',
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'nav-load': 'nav-load 0.7s ease-in',
        'footer-load': 'footer-load 0.7s ease-in',
        'intro-content-load': 'intro-content-load 0.7s ease-in',
        'intro-image-load': 'intro-image-load 0.7s ease-out',
        'project-load': 'project-load 0.9s ease-in',
        'tech-load': 'tech-load 0.9s ease-in',
        'cart-load' : 'cart-load 0.9s ease-in',
        'form-load' : 'form-load 0.9s ease-in'
      }
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
} satisfies Config

export default config