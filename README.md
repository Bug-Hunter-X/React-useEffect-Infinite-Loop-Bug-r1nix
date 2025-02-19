# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook.  The bug is caused by creating an infinite loop due to incorrectly updating state within the `useEffect` callback without specifying appropriate dependencies.

## Bug Description

The `useEffect` hook in the `bug.js` file attempts to increment the `count` state variable on every render because it has no dependencies array ([]).  This creates a continuous loop of re-renders, leading to a React application crash.

## Solution

The corrected code in `bugSolution.js` demonstrates the solution by providing a proper dependency array to prevent the infinite loop. The dependency array ensures that the effect runs only when necessary, eliminating the continuous state updates that were causing the issue.

## How to Reproduce the Bug

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the React component's behavior and the resulting error in the console.

## How to Fix the Bug

1. Examine the `useEffect` hook in the React component.
2. Identify and correct any situations where state is being updated based on its current value without a proper dependency array.
3. Include the appropriate dependency array to control when the `useEffect` runs.