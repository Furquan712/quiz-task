import React, { createContext, useContext, useState, useEffect } from "react";

const QuizDataContext = createContext();

export const useQuizData = () => {
  return useContext(QuizDataContext);
};

export const QuizDataProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("any");
  const [selectedQuestions, setSelectedQuestions] = useState(10);
  const [selectedDifficulty, setSelectedDifficulty] = useState("any");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [quiz, setQuiz] = useState([]);
  const [status, setStatus] = useState(0);
  const [categoryName, setCategoryName] = useState("any");
  const [selectedOptions, setSelectedOptions] = useState({});

  const onSelectCategory = (category, categoryName) => {
    setSelectedCategory(category);
    setCategoryName(categoryName || "any");
  };

  const onSelectQuestion = (question) => {
    setSelectedQuestions(question);
  };

  const onSelectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  useEffect(() => {
    if (selectedDifficulty !== "" && selectedCategory !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [selectedDifficulty, selectedCategory]);

  useEffect(() => {
    const generateQuizQuestions = async () => {
      try {
        let url = `https://opentdb.com/api.php?amount=${selectedQuestions}&type=multiple`;
        if (selectedCategory.trim() !== "any") {
          url += `&category=${selectedCategory}`;
        }
        if (selectedDifficulty.trim() !== "any") {
          url += `&difficulty=${selectedDifficulty}`;
        }
        const res = await fetch(url);
        const data = await res.json();
        setStatus(data.response_code);
        setQuiz(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    generateQuizQuestions();
  }, [isDisabled, selectedCategory, selectedDifficulty, selectedQuestions]);

  const hideForm = (isVisible) => {
    setIsVisible(isVisible);
  };

  const addSelectedOption = (questionIndex, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionIndex]: option,
    }));
  };

  const contextValue = {
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
    selectedOptions,
    addSelectedOption,
  };

  return (
    <QuizDataContext.Provider value={contextValue}>
      {children}
    </QuizDataContext.Provider>
  );
};
