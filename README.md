# Lunex Webapp

A professional DeFi application built with React, Vite, and Tailwind CSS featuring staking, swapping, and governance voting functionality.

## Features

- **Staking**: Stake Lunex tokens with flexible periods and competitive APY rates
- **Swap**: Trade tokens instantly with the best rates across multiple DEXs
- **Vote**: Participate in governance and help shape the future of the protocol
- **Professional UI**: Modern, responsive design with dark theme
- **React Router**: Seamless navigation between pages

## Pages

1. **Staking (Home)** - `/`
   - View staking statistics
   - Stake tokens with different periods (3, 6, 9, 12 months)
   - Track rewards and withdrawal history

2. **Swap** - `/swap`
   - Token swapping interface
   - Slippage tolerance settings
   - Real-time price updates and transaction history

3. **Vote** - `/vote`
   - Active governance proposals
   - Voting power display
   - Proposal creation and voting

## Tech Stack

- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling and UI components
- **React Router DOM** - Client-side routing
- **ESLint** - Code linting

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   └── Layout.jsx          # Main layout with navigation and footer
├── pages/
│   ├── Staking.jsx         # Staking page (home)
│   ├── Swap.jsx           # Token swap page
│   └── Vote.jsx           # Governance voting page
├── App.jsx                # Main app component with routing
├── main.jsx               # App entry point
└── index.css              # Global styles
```

## Features Overview

### Staking
- Multiple staking periods with different APY rates
- Real-time balance and rewards tracking
- Professional staking interface with period selection

### Swap
- Token-to-token swapping
- Slippage tolerance configuration
- Real-time price impact calculation
- Transaction history tracking

### Governance
- Active and completed proposals
- Voting power based on staked tokens
- Proposal categories and status tracking
- Detailed voting statistics

## Design System

- **Colors**: Cyan and green gradient theme
- **Typography**: Modern, clean fonts
- **Components**: Consistent card-based layouts
- **Responsive**: Mobile-first design approach
- **Animations**: Smooth transitions and hover effects