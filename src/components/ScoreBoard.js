import { Alert, Button, Col, Row } from "react-bootstrap";
import { useQuizData } from "../QuizDataContext";

const ScoreBoard = ({ score, totalQuestions }) => {
    const { quiz, selectedOptions } = useQuizData();

    // Function to render selected options for each question
    const renderSelectedOptions = (questionIndex) => {
        const selectedOption = selectedOptions[questionIndex];
        const correctAnswer = quiz[questionIndex].correct_answer;
        const isCorrect = selectedOption === correctAnswer;

        return (
            <p key={questionIndex}>
                Your Selected Option:{" "}
                <strong className={isCorrect ? "text-success" : "text-danger"}>
                    {selectedOption}
                    {isCorrect ? " (Correct)" : " (Incorrect)"}
                </strong>
            </p>
        );
    };
  let color;

  if (totalQuestions === 10) {
    if (score < 3) {
      color = "danger";
    } else if (score < 7) {
      color = "warning";
    } else {
      color = "success";
    }
  } else if (totalQuestions === 15) {
    if (score < 5) {
      color = "danger";
    } else if (score < 10) {
      color = "warning";
    } else {
      color = "success";
    }
  } else if (totalQuestions === 20) {
    if (score < 7) {
      color = "danger";
    } else if (score < 15) {
      color = "warning";
    } else {
      color = "success";
    }
  }

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
        <Row>
            <Col className="text-center">
                <Alert variant={color}>
                    <Alert.Heading>Your Score</Alert.Heading>
                    <p>
                        {score} / {totalQuestions}
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button variant={"outline-" + color} onClick={handleReload}>
                            Start Again
                        </Button>
                    </div>
                </Alert>
            </Col>
        </Row>
        <div>
            {quiz.map((question, index) => (
                <div key={index}>
                    <h3>Question {index + 1}:</h3>
                    <p>Question: {question.question}</p>
                    <p>Correct Answer: {question.correct_answer}</p>
                    {renderSelectedOptions(index)} {/* Render selected options here */}
                </div>
            ))}
        </div>
    </>
);
};

export default ScoreBoard;