# How long did you spend on your solution?

Approx. 3 hours in total for the frontend, and a further 3 hours on the backend

# What technical and functional assumptions did you make when implementing

When implementing this I assumed that:

-   No login or account related state persistence was required.
-   The backend would be running locally (ie. not deployed to a production environment).
-   Responsive UI wasn't essential to the task, although it does still behave reasonably well to a certain extent.

# Briefly explain your technical design and why do you think is the best

It seemed logical to split this app into two columns for Pending and Completed tasks. I used React Query in custom hooks
to fetch the data from the backend and chose to use the Home component as a higher order component to handle the data operations. The other components which are composed beneath it are largely presentational in nature.

Where possible, I tried to make components such as Buttons reusable and generic, so that they could be used in other parts of the app.

The goal was to try to keep presentation components small and easy to test.

# Getting Started

-   Clone the repository
-   Run `npm install` to install dependencies
-   Run `npm run dev` to start the development server

# Testing

-   Run `npm run test` to run the test suite
-   Run `npm run test-ui` to run the test suite in UI mode
