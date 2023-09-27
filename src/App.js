import React from "react";
import Title from "./components/Title";
import TitleBar from "./components/partials/TitleBar";
import Selection from "./components/Selection";
import FormGenerate from "./components/partials/FormGenerate";
import QuestionCard from "./utilities/QuestionCard";
import Loader from "./components/Loader";
import ErrorAlert from "./components/ErrorAlert";
import Results from "./components/Results";
import { useQuizData, QuizDataProvider } from "./QuizDataContext";

const App = () => {
  const {
    selectedCategory,
    selectedQuestions,
    selectedDifficulty,
    isDisabled,
    isVisible,
    quiz,
    status,
    categoryName,
    onSelectCategory,
    onSelectQuestion,
    onSelectDifficulty,
    hideForm,
  } = useQuizData();

  return (
    <React.Fragment>
      <TitleBar>
        <Title />
      </TitleBar>
      {isVisible && (
        <>
          <Selection buttonState={isDisabled} onHideForm={hideForm}>
            <FormGenerate
              onSelectCategory={onSelectCategory}
              onSelectQuestion={onSelectQuestion}
              onSelectDifficulty={onSelectDifficulty}
            />
          </Selection>
          <Results />
        </>
      )}
      {status === 2 || status === 1 ? (
        <ErrorAlert />
      ) : (
        !isVisible && (
          quiz.length > 0 ? (
            <QuestionCard quiz={quiz} selectedDifficulty={selectedDifficulty} selectedCategory={categoryName} />
          ) : (
            <Loader />
          )
        )
      )}
    </React.Fragment>
  );
};

const AppWithContext = () => {
  return (
    <QuizDataProvider>
      <App />
    </QuizDataProvider>
  );
};

export default AppWithContext;
