# Infinite Scrolling and Searchable Product List

This project is a React application built with TypeScript, implementing an infinite scrolling product list with search functionality. It uses the DummyJSON Product API to fetch and display product data.

## Features

- Infinite Scrolling: Automatically loads more products as the user scrolls down.
- Search Functionality: Filters products by name in real-time using a debounced search input.
- Responsive Design: Displays product name, price, and image in a simple card layout.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
    - Node.js (v14 or later)
    - npm or yarn

### Installation

Clone the repository:

    - git clone https://github.com/your-username/infinite-scroll-products.git
    - cd infinite-scroll-products
Install dependencies:

    - npm install
    or
    - yarn install

### Running the Application

    - npm start
    or
    -yarn start

    Open your browser and navigate to:
    - http://localhost:3000

### Testing the Application

1. Infinite Scrolling:
    - Scroll to the bottom of the product list.
    - Ensure more products are loaded automatically.
2. Search:
    - Type a product name in the search bar.
    - Verify that the displayed products match the search query.
3. Reset:
    - Clear the search bar.
    - Confirm that the full product list reloads and infinite scrolling works again.

