# Finance Dashboard Application

## What is the project about?
This is a full-stack finance dashboard application that provides comprehensive financial analytics and visualization tools. It's designed to help businesses and organizations track their financial performance through interactive charts, graphs, and detailed transaction monitoring.

## What does it do?
- Tracks and visualizes key performance indicators (KPIs)
- Monitors revenue, expenses, and profit metrics
- Provides detailed transaction history
- Displays product performance analytics
- Shows monthly and daily financial trends
- Visualizes expense distribution by category
- Offers interactive data grid for transaction management

## How does it help in real-life?
This application serves as a powerful tool for:
- Business owners to make data-driven decisions by tracking financial performance
- Financial analysts to monitor revenue and expense patterns
- Managers to track operational vs non-operational expenses
- Sales teams to analyze product performance and transaction trends
- Accountants to review detailed transaction histories
- Stakeholders to get quick insights through visual representations of financial data

## Tech Stack

### Frontend
- React with TypeScript
- Vite for build tooling and development server
- Redux Toolkit for state management
- Material-UI (MUI) for UI components
- Recharts for data visualization
- Tailwind CSS for styling

### Backend
- Node.js with Express.js
- MongoDB for database
- Mongoose for object modeling
- RESTful API architecture

### Development & Security
- Helmet for security headers
- CORS for cross-origin resource sharing
- Morgan for HTTP request logging
- dotenv for environment variable management

## APIs
The application provides three main API endpoints:

1. `/kpi/kpis`
   - Returns key performance indicators
   - Includes total profit, revenue, and expenses
   - Provides monthly and daily financial data

2. `/product/products`
   - Returns product information
   - Includes price and expense data
   - Links to related transactions

3. `/transaction/transactions`
   - Returns transaction history
   - Includes buyer information
   - Shows transaction amounts and related products

## Frameworks and Libraries

### Frontend Libraries
- @mui/material: Material UI components
- @mui/x-data-grid: Data grid component for transaction display
- @reduxjs/toolkit: State management
- react-redux: React bindings for Redux
- recharts: Charting library for data visualization
- typescript: Type safety and development tooling
- tailwindcss: Utility-first CSS framework

### Backend Libraries
- express: Web application framework
- mongoose: MongoDB object modeling
- mongoose-currency: Currency type support for Mongoose
- cors: Cross-origin resource sharing
- helmet: Security middleware
- morgan: HTTP request logger
- body-parser: Request body parsing middleware

## Getting Started
1. Clone the repository
2. Install dependencies:
   - Run `npm install` in both client and server directories
3. Set up environment variables:
   - Create `.env` file in server directory with MongoDB connection string
   - Create `.env` file in client directory with API base URL
4. Start the application:
   - Run server: `npm start` in server directory
   - Run client: `npm run dev` in client directory

## Note
Make sure to have MongoDB installed and running locally, or provide a connection string to a MongoDB instance in the environment variables.