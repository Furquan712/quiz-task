# Quiz Application README

## Overview

This Quiz Application is designed to allow users to take quizzes with multiple-choice questions. The application provides the following features:

- Users can select a quiz category and difficulty level.
- The application presents questions one by one and tracks the user's score.
- A timer ensures that users complete each question within a specified time limit.
- Users can navigate to specific questions and view their progress.

## Live Preview

You can try the live preview of this Quiz Application at [https://quiz-task-seven.vercel.app/](https://quiz-task-seven.vercel.app/).

## Setup Instructions

To run the Quiz Application locally, follow these steps:

1. Clone the repository to your local machine:

```
git clone https://github.com/your-username/quiz-application.git
```


2. Navigate to the project directory:

```
cd quiz-application

```


3. Install the required dependencies:

```
npm install
```


4. Start the development server:

```
npm start
```


5. Open your web browser and access the application at `http://localhost:3000`.

## Assumptions

- It is assumed that the quiz data is fetched from an API or a data source. Ensure that the API endpoints or data source configuration is correctly set up for your environment.

- This application assumes that the question data is structured consistently with each question containing a `question`, `correct_answer`, `incorrect_answers`, `category`, and `difficulty`.

## Challenges Faced

During the development of this Quiz Application, a few challenges were encountered:

1. **State Management**: Managing the state for tracking visited and attempted questions, as well as handling navigation, required careful consideration and the use of React's `useReducer` hook.

2. **Styling and CSS**: Styling the application to create an appealing and user-friendly interface was challenging. Bootstrap was used to assist with styling, but custom CSS was still required for certain components.

3. **Timer Implementation**: Implementing a timer for each question that triggers actions upon expiration required synchronization and careful handling of timers.

 

## Feedback and Improvements

We welcome any feedback and suggestions for improving this Quiz Application. Please feel free to open issues or pull requests to contribute to the development of this project.


