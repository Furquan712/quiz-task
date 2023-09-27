import React from "react";
import { useQuizData } from "../QuizDataContext";

const FormGenerate = () => {
  const { selectedCategory, onSelectCategory, selectedDifficulty, onSelectDifficulty, quiz, selectedOptions, addSelectedOption } = useQuizData();

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    const categoryName = e.target.options[e.target.selectedIndex].text;
    onSelectCategory(category, categoryName);
  };

  const handleDifficultyChange = (e) => {
    const difficulty = e.target.value;
    onSelectDifficulty(difficulty);
  };

  const handleOptionChange = (e, index) => {
    const selectedOption = e.target.value;
    addSelectedOption(index, selectedOption);
  };

  return (
    <div>
      <label>Select Category:</label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        {/* Category options */}
      </select>

      <label>Select Difficulty:</label>
      <select value={selectedDifficulty} onChange={handleDifficultyChange}>
        {/* Difficulty options */}
      </select>

      {quiz.map((question, index) => (
        <div key={index}>
          <p>Question: {question.question}</p>
          <select value={selectedOptions[index]} onChange={(e) => handleOptionChange(e, index)}>
            <option value="option_1">Option 1</option>
            <option value="option_2">Option 2</option>
            <option value="option_3">Option 3</option>
            <option value="option_4">Option 4</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default FormGenerate;
