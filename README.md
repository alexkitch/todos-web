# Introduction

The application is built using React and is written in TypeScript. It uses React Query for data fetching, Tailwind CSS for styling, and Prettier for code formatting.

# Getting Started

-   Clone the repository
-   Run `npm install` to install dependencies
-   Run `npm run dev` to start the development server

# Testing

-   Run `npm run test` to run the test suite
-   Run `npm run test-ui` to run the test suite in UI mode

Assuming no login required
Assuming that the backend API can be hard-coded
Seems logical to split left and right to Pending and Completed - bit like Upwave
The home component should probably be a higher order component responsible for the data operations
The other components should be largely presentational
At the bottom of the left list will be a button to add a new Pending task
A task should be toggleable as 'Complete' (maybe a tick box)
