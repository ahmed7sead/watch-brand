# Watch Store

E-commerce watch store built with React and dark/light mode support.

## Live Preview
https://watch-brand-eight.vercel.app/

## Technologies Used

- **React 18** - UI library
- **Tailwind CSS** - Styling framework
- **AOS** - Scroll animations
- **React Icons** - Icon library
- **Slick Carousel** - Slider component

## Main Components

### Navbar
Navigation bar includes:
- Logo with auto-switch based on theme
- Responsive menu with dropdown
- Shopping cart button
- Dark mode toggle

### Hero
Main section displays:
- 3 different watches with smooth switching
- Slide animation when changing watches
- Prices and descriptions
- Direct order button

### DarkMode
Theme toggle component:
- Saves preference in localStorage
- Applies "dark" class to root element
- Animated toggle icons

### OrderPopup
Order form popup with:
- 4 input fields: name, email, phone, address
- Form validation
- Clear error messages
- Auto-reset on close

## Features

- Fully responsive design
- Complete dark/light mode
- Smooth animations
- Form validation
- Clean user experience

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The app will run on `http://localhost:2024`

## Project Structure

```
src/
├── components/
│   ├── Hero/
│   │   └── Hero.jsx
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── DarkMode.jsx
│   └── OrderPopup/
│       └── OrderPopup.jsx
├── assets/
├── App.jsx
├── main.jsx
└── index.css
```

## Configuration

### Tailwind Config
- **Colors**: 
  - `primary: #fb8a47` (orange)
  - `secondary: #ffa448` (light orange)
  - `dark: #1e1e1e` and `light: #f5f5f5`
- **Font**: Poppins from Google Fonts
- **Dark Mode**: class-based strategy
- **Container**: centered with responsive padding

### Vite Config
- **Port**: 2024
- **Host**: available on all networks (::)

## Notes

- AOS initialized with 500ms duration and ease-in-sine
- Custom slow spin animation (40s) available as `animate-spin-slow`
