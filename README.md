# Expo NativeWind Boilerplate

<div align="center">
  <p><strong>Hey there! 👋 This is my starter template for Expo React Native apps.</strong></p>
  <p>I've bundled TypeScript, Expo Router, and NativeWind to get you up and running fast!</p>
</div>

## Overview

I created this boilerplate to save you time and headaches when starting a new mobile app. It's what I use for my own projects - a simple, clean foundation that combines the power of Expo with the styling flexibility of TailwindCSS through NativeWind.

## Features

- **📱 File-based Routing** - Super intuitive navigation with Expo Router
- **🎨 Styling System** - Write TailwindCSS classes directly in your React Native code
- **🛡️ Type Safety** - TypeScript set up and ready to help you catch bugs early
- **🔤 Custom Fonts** - Poppins font family already configured (my personal favorite!)
- **🏗️ Clean Architecture** - A logical folder structure that makes sense

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI

### Installation

```bash
# Clone the repository
git clone https://github.com/0xPixelNinja/expo-nativewind-boilerplate.git

# Navigate to the project directory
cd expo-nativewind-boilerplate

# Install dependencies
npm install

# Start the development server
npm start
```

## Project Structure

```
expo-nativewind-boilerplate/
├── app/                  # Application screens with file-based routing
│   ├── _layout.tsx       # Root layout component (navigation container)
│   └── index.tsx         # Home screen (where you'll start coding)
├── assets/               # Static assets
│   ├── fonts/            # Includes Poppins font family
│   └── images/           # Put all your images here
└── ...configuration files  # The usual suspects: package.json, tsconfig.json, etc.
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the Expo development server |
| `npm run android` | Run the app on Android |
| `npm run ios` | Run the app on iOS |
| `npm run web` | Run the app in a web browser |
| `npm run lint` | Run ESLint to check code quality |

## Technologies

- **Expo** - v53.0.12 (the latest and greatest!)
- **React Native** - v0.79.4 (rock-solid foundation)
- **Expo Router** - v5.1.0 (file-based navigation that just makes sense)
- **NativeWind** - v4.1.23 (TailwindCSS for React Native = game changer)
- **TypeScript** - v5.8.3 (because who likes runtime errors anyway?)

## License

This project is MIT licensed, which means you can use it pretty much however you want! Check the LICENSE file for the legal details if you're into that sort of thing.

## Author

Hey, I'm [0xPixelNinja](https://github.com/0xPixelNinja) 👨‍💻! I built this template to make mobile app development more enjoyable. Feel free to reach out if you have questions or suggestions!

---

<div align="center">
  <sub>Made with ❤️ by a developer for developers</sub>
</div>