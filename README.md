# Open Trivia Quiz Game

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

In order to work wth this app, you need to have Node installed on your local machine
https://nodejs.org/en

## Setup 

1. Clone this repository to your local machine
2. Open the project folder (e.g. `cd trivia-quiz/`)
3. Run `npm install` 
4. Run `npm start`
5. Follow the generated link


## Available Scripts

In the project directory, you can run:

### `npm install`

Downloads and installs the necessary dependencies and node packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Project Overview

This project uses `Open Trivia API` for generating the questions. https://opentdb.com/api_config.php <br>
User can choose between different question types, difficulty level, and number of questions.\
There is timer limited to 5 minutes. If timer expires quiz ends.\
All results are stored in local storage.
 