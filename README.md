# Augusto Zanoni - Portfolio

Professional portfolio website showcasing my expertise as a Full Stack Software Engineer and Computer Engineer.

**Live Site:** [https://augustozanoni.github.io](https://augustozanoni.github.io)

## 🚀 Technologies Used

This portfolio is built with modern web technologies:

- **React** - UI framework
- **Vite** - Build tool and development server
- **CSS3** - Animations and parallax effects

## 💻 Tech Stack Showcase

The portfolio demonstrates proficiency in:

- **Frontend**: React, React Native, JavaScript, TypeScript, Electron
- **Backend**: C#, .NET, Node.js, GraphQL
- **Cloud & DevOps**: AWS, Azure, Docker
- **Specialized**: WebRTC, AI/LLM, OpenSearch, Xamarin
- **3D Graphics**: Three.js

## 🛠️ Local Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server with hot-reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The development server will start at `http://localhost:5173`

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🌟 Features

- **Parallax Background**: Smooth animated gradient layers creating depth
- **Horizontal Page Navigation**: Book-like page turning experience with left/right navigation
- **Page Indicators**: Visual dots showing current page position
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Performance Optimized**: Fast loading (146KB bundle) and smooth interactions
- **No Vertical Scroll**: Single viewport experience with horizontal pagination

## 📝 Project Structure

```
/workspace/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with title and bio
│   │   ├── Technologies.jsx  # Tech stack display
│   │   └── Globe3D.jsx       # Interactive 3D globe
│   ├── App.jsx               # Main app component
│   ├── App.css               # Global styles
│   └── main.jsx              # React entry point
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Customization

The color scheme and styling can be customized in `src/App.css` using CSS variables:

- `--accent-blue`: Primary accent color
- `--accent-purple`: Secondary accent color
- `--accent-cyan`: Tertiary accent color
- `--bg-dark`: Main background color
- `--text-primary`: Primary text color

## 📄 License

This project is open source and available under the MIT License.
