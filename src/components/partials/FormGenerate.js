import {Col, Form} from "react-bootstrap";
import CategoryList from "../../utilities/CategoryList";
import QuestionNumberList from "../../utilities/QuestionNumberList";
import DifficultyList from "../../utilities/DifficultyList";

const FormGenerate = ({onSelectCategory,onSelectDifficulty,onSelectQuestion}) => {
    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        const categoryName = event.target.options[event.target.selectedIndex].text;
        onSelectCategory(selectedCategory, categoryName);
    };

    const handleQuestionChange = (event) => {
        const selectedQuestion = event.target.value;
        onSelectQuestion(selectedQuestion);
    };

    const handleDifficultyChange = (event) => {
        const selectedDifficulty = event.target.value;
        onSelectDifficulty(selectedDifficulty);
    };

    return  <Form>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Categories</Form.Label>
            <Form.Select onChange={handleCategoryChange}>
                <option key='any' value='any'>Any</option>
                <CategoryList/>
            </Form.Select>
            <Form.Label  className='my-3'>Questions</Form.Label>
            <Form.Select onChange={handleQuestionChange}>
                <QuestionNumberList/>
            </Form.Select>
            <Form.Label  className='my-3'>Difficulty</Form.Label>
            <Form.Select  onChange={handleDifficultyChange}>
                <DifficultyList/>
            </Form.Select>
        </Form.Group>
    </Form>
};


export default FormGenerate;