import {Button, Card, Container} from "react-bootstrap";

const Selection = ({children, buttonState, onHideForm}) => {
    return (
        <Container>
            <Card>
                <Card.Header as="h5" className="text-center">
                    Select Questions
                </Card.Header>
                <Card.Body>{children}</Card.Body>
                <Card.Footer>
                    <Button variant="primary" disabled={buttonState} onClick={() => onHideForm(false)}>
                        Start
                    </Button>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default Selection;