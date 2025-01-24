# EcoVibe Solutions

**EcoVibe Solutions** is an innovative platform designed to revolutionize waste management through community engagement, blockchain technology, and AI-driven insights. Our goal is to foster a sustainable environment by incentivizing users to report and collect waste, while providing them with valuable data and rewards.

## Introduction

EcoVibe Solutions aims to:
- **Reduce Waste**: By mapping and managing waste through user reports.
- **Reward Engagement**: Users earn points for reporting and collecting waste, which can be redeemed for rewards.
- **Educate and Empower**: Provide insights into carbon footprints and waste hotspots through AI analysis.

## Features

- **Waste Reporting**: Users can report waste locations and types.
- **Waste Collection**: Community members can collect reported waste, earning rewards.
- **Leaderboard**: Compete with others on a leaderboard to see who contributes the most to waste reduction.
- **AI Verification**: Use AI to verify waste photos for authenticity.
- **Carbon Footprint Calculator**: Educate users on their environmental impact.
- **Reward System**: Points-based rewards for waste management activities.
- **Notifications**: Keep users informed with real-time updates on their activities and rewards.
- **Blockchain Integration**: Secure transactions and data integrity through blockchain.

## Technologies

- **Frontend**: 
  - **Next.js** for React framework capabilities
  - **Tailwind CSS** for utility-first CSS
  - **React-Leaflet** for interactive maps
- **Backend**:
  - **PostgreSQL** with **Drizzle ORM** for database management
  - **Neon** for serverless database solution
- **AI & Blockchain**:
  - **Google Generative AI** for image analysis
  - **Lit Protocol** for decentralized data encryption
  - **Web3Auth** for blockchain authentication

## Getting Started

### Prerequisites

- Node.js (version >= 20.0.0)
- npm or Yarn

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/harshchi19/EcoVibe-Solutions.git
   cd EcoVibe-Solutions


    Install Dependencies:
    bash

    npm install
    # or if you use Yarn
    yarn install

    Setup Environment Variables:
        Create a .env.local file in the root of your project and add necessary API keys, database credentials, etc.


Running the Application

    Development Mode:
    bash

    npm run dev
    # or
    yarn dev

    Building for Production:
    bash

    npm run build
    # or
    yarn build

    Starting the Production Server:
    bash

    npm start
    # or
    yarn start


Project Structure

    /src: Contains all source code
        /app: Next.js pages and layouts
        /components: Reusable React components
        /hooks: Custom React hooks
        /lib: Utility functions
        /utils: Database operations, blockchain utilities, etc.


Key Components

    Header.tsx: Navigation and user status display.
    Sidebar.tsx: Contains links to various sections of the app.
    Map.tsx: Displays waste locations on an interactive map.
    ContractInteraction.tsx: Handles blockchain interactions for waste reporting and proposals.


API

    Database Actions: Located in src/utils/db/actions.ts, providing CRUD operations for users, reports, rewards, etc.
    Blockchain: Integration with Ethereum testnet via Web3Auth for secure user authentication and transactions.
